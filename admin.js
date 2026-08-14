/* ==========================================================================
   Koshary Abo Abd Admin Dashboard Engine (Fateta-Style Control Panel)
   ========================================================================== */

// Clean Seed Orders (All initial metrics reset cleanly to 0)
const DEMO_ORDERS = [];

// Admin State
let adminState = {
    branchFilter: 'all', // all, khanka, sheraton
    statusFilter: 'all', // all, new, preparing, delivery, completed, cancelled
    activeTab: 'orders', // orders, stock, reports
    selectedDateFilter: new Date().toISOString().slice(0, 10), // Default to today (YYYY-MM-DD)
    orders: [],
    stock: JSON.parse(localStorage.getItem('abo_abd_stock')) || {}
};

const ADMIN_CORRECT_PASS = "01280386290";

// Password Check & Auth Controller
function checkAdminAuth() {
    const isAuth = sessionStorage.getItem('abo_abd_admin_authenticated') === 'true';
    const overlay = document.getElementById('admin-login-overlay');
    if (isAuth) {
        if (overlay) overlay.style.display = 'none';
        return true;
    } else {
        if (overlay) overlay.style.display = 'flex';
        return false;
    }
}

function checkAdminPassword(event) {
    if (event) event.preventDefault();
    const input = document.getElementById('admin-pass-input');
    const errorBox = document.getElementById('login-error-msg');
    
    const entered = (input ? input.value : '').replace(/\s+/g, '').trim();
    if (entered === ADMIN_CORRECT_PASS) {
        sessionStorage.setItem('abo_abd_admin_authenticated', 'true');
        if (errorBox) errorBox.style.display = 'none';
        const overlay = document.getElementById('admin-login-overlay');
        if (overlay) overlay.style.display = 'none';
        initAdminDashboard();
    } else {
        if (errorBox) {
            errorBox.style.display = 'block';
            errorBox.textContent = '⚠️ كلمة السر غير صحيحة! برجاء المحاولة مرة أخرى.';
        }
        if (input) {
            input.value = '';
            input.focus();
        }
    }
}

function logoutAdmin() {
    sessionStorage.removeItem('abo_abd_admin_authenticated');
    window.location.reload();
}

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
    if (checkAdminAuth()) {
        initAdminDashboard();
    }
});

function initAdminDashboard() {
    if (!checkAdminAuth()) return;

    // Force clean zero reset for all admin metrics & order history
    localStorage.setItem('abo_abd_orders', JSON.stringify([]));
    localStorage.setItem('abo_abd_today_visitors', '0');
    localStorage.setItem('abo_abd_whatsapp_sent_count', '0');
    adminState.orders = [];

    checkMidnightAutoReset();
    
    // Set Date Filter Input value
    const dateInput = document.getElementById('admin-date-filter');
    if (dateInput) {
        dateInput.value = adminState.selectedDateFilter;
    }

    loadOrdersFromStorage();
    renderDashboardStats();
    renderAdminOrders();
    renderStockManager();
    renderReports();
    
    // Initialize Real-Time SSE Cloud Sync & Auto Refresh Listeners
    initAdminCloudSync();
    setInterval(async () => {
        if (!checkAdminAuth()) return;
        checkMidnightAutoReset();
        await pollCloudOrders();
        await pollCloudVisitors();
        loadOrdersFromStorage();
        renderDashboardStats();
        renderAdminOrders();
        renderReports();
    }, 2000);
}

// Multi-Tier Real-Time Cross-Device Sync Engine (MQTT WebSockets + SSE + Local Broadcast)
const MQTT_TOPIC_ORDERS = "abo_abdo_koshary/orders_v9";
const MQTT_TOPIC_VISITORS = "abo_abdo_koshary/visitors_v9";
const NTFY_ORDERS_URL = "https://ntfy.sh/koshary_abo_abdo_live_orders_v9";
const NTFY_VISITORS_URL = "https://ntfy.sh/koshary_abo_abdo_live_visitors_v9";

let adminMqttClient = null;
const activeCloudSessions = new Map();

function initAdminCloudSync() {
    // 1. MQTT WebSocket Connection (Instant 20ms delivery)
    try {
        if (typeof mqtt !== 'undefined') {
            adminMqttClient = mqtt.connect('wss://broker.emqx.io:8084/mqtt', {
                clientId: 'admin_client_' + Math.random().toString(16).substr(2, 8),
                keepalive: 30
            });

            adminMqttClient.on('connect', () => {
                adminMqttClient.subscribe(MQTT_TOPIC_ORDERS, { qos: 1 });
                adminMqttClient.subscribe(MQTT_TOPIC_VISITORS, { qos: 0 });
            });

            adminMqttClient.on('message', (topic, message) => {
                try {
                    const str = message.toString();
                    if (topic === MQTT_TOPIC_ORDERS) {
                        const ord = JSON.parse(str);
                        if (ord && ord.id) {
                            addOrUpdateCloudOrder(ord);
                            renderDashboardStats();
                            renderAdminOrders();
                        }
                    } else if (topic === MQTT_TOPIC_VISITORS) {
                        const vis = JSON.parse(str);
                        if (vis && vis.sessionId) {
                            activeCloudSessions.set(vis.sessionId, Date.now());
                            updateActiveOnlineCount();
                        }
                    }
                } catch (e) {}
            });
        }
    } catch (e) {}

    // 2. ntfy.sh SSE Stream listener fallback
    try {
        const orderSource = new EventSource(`${NTFY_ORDERS_URL}/sse`);
        orderSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                if (data && data.message) {
                    const ord = JSON.parse(data.message);
                    if (ord && ord.id) {
                        addOrUpdateCloudOrder(ord);
                        renderDashboardStats();
                        renderAdminOrders();
                    }
                }
            } catch (e) {}
        };
    } catch (e) {}
}

function updateActiveOnlineCount() {
    const now = Date.now();
    let count = 0;
    for (const [id, time] of activeCloudSessions.entries()) {
        if (now - time <= 15000) {
            count++;
        } else {
            activeCloudSessions.delete(id);
        }
    }
    adminState.cloudActiveOnline = count;
}

async function pollCloudOrders() {
    try {
        const resp = await fetch(`${NTFY_ORDERS_URL}/json?poll=1`);
        if (!resp.ok) return;
        const text = await resp.text();
        const lines = text.trim().split('\n');
        lines.forEach(line => {
            try {
                const parsed = JSON.parse(line);
                if (parsed && parsed.message) {
                    const ord = JSON.parse(parsed.message);
                    if (ord && ord.id) {
                        addOrUpdateCloudOrder(ord);
                    }
                }
            } catch (e) {}
        });
    } catch (e) {}
}

async function pollCloudVisitors() {
    try {
        const resp = await fetch(`${NTFY_VISITORS_URL}/json?poll=1`);
        if (!resp.ok) return;
        const text = await resp.text();
        const lines = text.trim().split('\n');
        const now = Date.now();
        const todayStr = new Date().toISOString().slice(0, 10);

        lines.forEach(line => {
            try {
                const parsed = JSON.parse(line);
                if (parsed && parsed.message) {
                    const vis = JSON.parse(parsed.message);
                    if (vis.todayDate === todayStr && vis.timestamp && (now - vis.timestamp <= 15000)) {
                        activeCloudSessions.set(vis.sessionId, vis.timestamp);
                    }
                }
            } catch (e) {}
        });

        updateActiveOnlineCount();
        const currentLocalVis = parseInt(localStorage.getItem('abo_abd_today_visitors') || '0', 10);
        const maxVis = Math.max(currentLocalVis, activeCloudSessions.size || 1);
        localStorage.setItem('abo_abd_today_visitors', maxVis.toString());
    } catch (e) {}
}

function addOrUpdateCloudOrder(ord) {
    const existing = adminState.orders.find(o => o.id === ord.id);
    if (!existing) {
        adminState.orders.unshift(ord);
    } else {
        Object.assign(existing, ord);
    }
    localStorage.setItem('abo_abd_orders', JSON.stringify(adminState.orders));
}

async function pushAdminStateToCloud() {
    // Orders auto push via client submissions & local storage sync
}

// Midnight Auto-Reset Check
function checkMidnightAutoReset() {
    const todayStr = new Date().toISOString().slice(0, 10);
    const lastDate = localStorage.getItem('abo_abd_today_date');

    if (lastDate !== todayStr) {
        localStorage.setItem('abo_abd_today_date', todayStr);
        localStorage.setItem('abo_abd_today_visitors', '0');
        localStorage.setItem('abo_abd_whatsapp_sent_count', '0');
    }
}

function loadOrdersFromStorage() {
    const stored = localStorage.getItem('abo_abd_orders');
    if (stored) {
        adminState.orders = JSON.parse(stored);
    } else {
        adminState.orders = [];
    }
}

function saveOrdersToStorage() {
    localStorage.setItem('abo_abd_orders', JSON.stringify(adminState.orders));
    pushAdminStateToCloud();
}

// Date Filter Handlers
function onAdminDateFilterChange(dateValue) {
    if (!dateValue) return;
    adminState.selectedDateFilter = dateValue;
    renderDashboardStats();
    renderAdminOrders();
    renderReports();
}

function resetAdminDateToToday() {
    const todayStr = new Date().toISOString().slice(0, 10);
    adminState.selectedDateFilter = todayStr;
    const dateInput = document.getElementById('admin-date-filter');
    if (dateInput) dateInput.value = todayStr;
    renderDashboardStats();
    renderAdminOrders();
    renderReports();
}

// Stats Widget Calculation Engine (Real Metrics & Clean Start)
function renderDashboardStats() {
    let totalRevenue = 0;
    let activeCount = 0;
    let completedCount = 0;
    let waSentCount = 0;
    let dishFrequency = {};

    adminState.orders.forEach(ord => {
        // Filter by selected branch if applicable
        if (adminState.branchFilter !== 'all' && ord.branch !== adminState.branchFilter) return;

        // Filter by selected date if set
        const ordDate = (ord.timestamp || '').slice(0, 10);
        if (adminState.selectedDateFilter && ordDate !== adminState.selectedDateFilter) return;

        let ordTotal = 0;
        ord.items.forEach(item => {
            const addonsPrice = (item.addons || []).reduce((s, a) => s + a.price, 0);
            const linePrice = (item.price + addonsPrice) * item.quantity;
            ordTotal += linePrice;

            dishFrequency[item.nameAr] = (dishFrequency[item.nameAr] || 0) + item.quantity;
        });

        if (ord.whatsappSent) waSentCount++;

        if (ord.status === 'completed') {
            totalRevenue += ordTotal;
            completedCount += 1;
        } else if (ord.status === 'new' || ord.status === 'preparing' || ord.status === 'delivery') {
            activeCount += 1;
        }
    });

    // Find top dish
    let topDishName = 'لا يوجد طلبات';
    let maxFreq = 0;
    for (const [name, count] of Object.entries(dishFrequency)) {
        if (count > maxFreq) {
            maxFreq = count;
            topDishName = name;
        }
    }

    document.getElementById('stat-revenue').textContent = `${totalRevenue} ج.م`;
    document.getElementById('stat-active-orders').textContent = activeCount;
    document.getElementById('stat-completed-orders').textContent = completedCount;
    
    const waEl = document.getElementById('stat-whatsapp-sent');
    if (waEl) waEl.textContent = waSentCount;

    document.getElementById('stat-top-dish').textContent = topDishName;

    // Real Visitor Stats Calculation
    const todayVisitors = localStorage.getItem('abo_abd_today_visitors') || '0';
    const visitsEl = document.getElementById('stat-total-visits');
    if (visitsEl) visitsEl.textContent = todayVisitors;

    // Active Online Users Heartbeat Count (Combine local & cloud active online count across devices)
    const now = Date.now();
    let localActiveCount = 0;
    const keysToRemove = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith('abo_abd_hb_')) {
            const time = parseInt(localStorage.getItem(key)) || 0;
            if (now - time <= 10000) {
                localActiveCount++;
            } else if (now - time > 15000) {
                keysToRemove.push(key);
            }
        }
    }
    keysToRemove.forEach(k => localStorage.removeItem(k));

    const finalActiveOnline = Math.max(localActiveCount, adminState.cloudActiveOnline || 0);

    const activeEl = document.getElementById('stat-active-online');
    if (activeEl) activeEl.textContent = finalActiveOnline;
}

// Branch Filter Handler
function filterAdminBranch(branchKey) {
    adminState.branchFilter = branchKey;
    
    document.querySelectorAll('.branch-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn-branch-${branchKey}`).classList.add('active');
    
    renderDashboardStats();
    renderAdminOrders();
    renderReports();
}

// Status Filter Handler
function filterOrderStatus(statusKey) {
    adminState.statusFilter = statusKey;
    
    document.querySelectorAll('.status-badge-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    renderAdminOrders();
}

// Tab Switcher
function switchAdminTab(tabKey) {
    adminState.activeTab = tabKey;
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    
    document.getElementById(`tab-btn-${tabKey}`).classList.add('active');
    document.getElementById(`tab-content-${tabKey}`).classList.add('active');
}

// Filter helper
function getFilteredOrders() {
    return adminState.orders.filter(ord => {
        const matchesBranch = adminState.branchFilter === 'all' || ord.branch === adminState.branchFilter;
        const matchesStatus = adminState.statusFilter === 'all' || ord.status === adminState.statusFilter;
        const ordDate = (ord.timestamp || '').slice(0, 10);
        const matchesDate = !adminState.selectedDateFilter || ordDate === adminState.selectedDateFilter;
        return matchesBranch && matchesStatus && matchesDate;
    });
}

// Export Orders to Excel / CSV Sheet
function exportOrdersToExcel() {
    const filtered = getFilteredOrders();
    if (!filtered || filtered.length === 0) {
        alert('لا توجد طلبات لتصديرها للشيت حالياً!');
        return;
    }

    let csvContent = "\uFEFF"; // UTF-8 BOM for Arabic Excel
    csvContent += "رقم الطلب,التاريخ والوقت,الفرع,اسم العميل,العنوان,الأصناف,الإجمالي (ج.م),الحالة,حالة إرسال الواتساب\n";

    filtered.forEach(ord => {
        const branchName = ord.branch === 'khanka' ? 'فرع الخانكة' : 'فرع شيراتون';
        
        let subtotal = 0;
        const itemsListStr = (ord.items || []).map(i => {
            const addonsP = (i.addons || []).reduce((s, a) => s + a.price, 0);
            subtotal += (i.price + addonsP) * i.quantity;
            return `${i.nameAr} (${i.quantity})`;
        }).join(' - ');

        let statusText = 'جديد';
        if (ord.status === 'preparing') statusText = 'جاري التحضير بالمطبخ';
        if (ord.status === 'delivery') statusText = 'جاري التوصيل';
        if (ord.status === 'completed') statusText = 'مكتمل ومعتمد';
        if (ord.status === 'cancelled') statusText = 'ملغي';

        const waText = ord.whatsappSent ? 'تم الإرسال للواتساب ✅' : 'مستلم عبر الموقع';

        const row = [
            `"${ord.id}"`,
            `"${ord.timestamp || ''}"`,
            `"${branchName}"`,
            `"${(ord.customerName || '').replace(/"/g, '""')}"`,
            `"${(ord.address || '').replace(/"/g, '""')}"`,
            `"${itemsListStr.replace(/"/g, '""')}"`,
            `"${subtotal}"`,
            `"${statusText}"`,
            `"${waText}"`
        ];
        csvContent += row.join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const selectedDate = adminState.selectedDateFilter || new Date().toISOString().slice(0, 10);
    link.setAttribute("href", url);
    link.setAttribute("download", `شيت_مبيعات_أبو_عبد_${selectedDate}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Render Orders Grid & Status Flow Cards
function renderAdminOrders() {
    const container = document.getElementById('admin-orders-container');
    container.innerHTML = '';

    // Filter orders
    let filtered = getFilteredOrders();

    // Update status badge counts
    updateStatusCounts();

    if (filtered.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
                <i class="fa-solid fa-inbox" style="font-size: 3rem; margin-bottom: 12px; opacity: 0.3;"></i>
                <p>لا توجد طلبات تطابق الفلتر أو التاريخ المحدد حالياً.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(ord => {
        let orderTotal = 0;
        let itemsHTML = '';

        ord.items.forEach(item => {
            const addonsSum = (item.addons || []).reduce((s, a) => s + a.price, 0);
            const lineTotal = (item.price + addonsSum) * item.quantity;
            orderTotal += lineTotal;

            const optStr = item.option ? ` <span class="opt-text">(${item.option})</span>` : '';
            let addonsStr = '';
            if (item.addons && item.addons.length > 0) {
                const names = item.addons.map(a => a.nameAr).join(', ');
                addonsStr = ` <br><span class="opt-text">+ إضافات: ${names}</span>`;
            }

            itemsHTML += `
                <div class="order-item-line">
                    <div><strong>${item.quantity}x</strong> ${item.nameAr}${optStr}${addonsStr}</div>
                    <div><strong>${lineTotal} ج.م</strong></div>
                </div>
            `;
        });

        const statusLabels = {
            new: 'جديد 📥',
            preparing: 'جاري التحضير 👨‍🍳',
            delivery: 'جاري التوصيل 🛵',
            completed: 'مؤكد ومكتمل تلقائياً ✅',
            cancelled: 'ملغي ❌'
        };

        const branchName = ord.branch === 'khanka' ? 'فرع الخانكة' : 'فرع شيراتون';

        // Direct Action Buttons (Auto Confirmed Orders)
        let statusActionBtns = `
            <button class="btn-status-act print" onclick="openReceiptModal('${ord.id}')" style="flex:1; background: var(--primary-blue); color:#fff; border:none; font-weight:700;"><i class="fa-solid fa-print"></i> طباعة الفاتورة</button>
        `;

        const card = document.createElement('div');
        card.className = 'order-card';
        card.innerHTML = `
            <div>
                <div class="order-card-head">
                    <span class="order-id">#${ord.id}</span>
                    <span class="order-branch-tag">${branchName}</span>
                </div>

                <div class="order-status-tag completed">${statusLabels[ord.status] || 'مؤكد ومكتمل تلقائياً ✅'}</div>

                <div class="order-cust-info">
                    <div class="order-cust-name"><i class="fa-solid fa-user"></i> ${ord.customerName} ${(ord.phone || ord.customerPhone) ? `<a href="tel:${ord.phone || ord.customerPhone}" style="color:var(--status-new-color); margin-right:8px; font-size:0.85rem;"><i class="fa-solid fa-phone"></i> ${ord.phone || ord.customerPhone}</a>` : ''}</div>
                    <div class="order-cust-address"><i class="fa-solid fa-location-dot"></i> ${ord.address}</div>
                    ${ord.notes ? `<div style="margin-top:4px; font-size:0.78rem; color:var(--accent-gold);"><i class="fa-solid fa-comment"></i> ${ord.notes}</div>` : ''}
                </div>

                <div class="order-items-box">
                    ${itemsHTML}
                </div>
            </div>

            <div class="order-card-foot">
                <div class="order-price-row">
                    <span>الإجمالي:</span>
                    <span style="color:var(--primary-red);">${orderTotal} ج.م</span>
                </div>
                <div class="order-actions-btns">
                    ${statusActionBtns}
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}

function updateStatusCounts() {
    let newC = 0, prepC = 0, delC = 0, compC = 0, cancC = 0;
    
    adminState.orders.forEach(ord => {
        if (adminState.branchFilter !== 'all' && ord.branch !== adminState.branchFilter) return;
        const ordDate = (ord.timestamp || '').slice(0, 10);
        if (adminState.selectedDateFilter && ordDate !== adminState.selectedDateFilter) return;

        if (ord.status === 'new') newC++;
        else if (ord.status === 'preparing') prepC++;
        else if (ord.status === 'delivery') delC++;
        else if (ord.status === 'completed') compC++;
        else if (ord.status === 'cancelled') cancC++;
    });

    const totalCount = newC + prepC + delC + compC + cancC;
    const elAll = document.getElementById('count-all');
    if (elAll) elAll.textContent = totalCount;

    const elBadge = document.getElementById('orders-badge-count');
    if (elBadge) elBadge.textContent = totalCount;
}

function updateOrderStatus(orderId, newStatus) {
    const order = adminState.orders.find(o => o.id === orderId);
    if (order) {
        order.status = newStatus;
        saveOrdersToStorage();
        renderDashboardStats();
        renderAdminOrders();
        renderReports();
    }
}

function reloadAdminOrders() {
    loadOrdersFromStorage();
    renderDashboardStats();
    renderAdminOrders();
    renderReports();
}

function clearAllOrdersHistory() {
    if (confirm('هل أنت تأكد من مسح جميع سجلات الطلبات؟')) {
        adminState.orders = [];
        saveOrdersToStorage();
        renderDashboardStats();
        renderAdminOrders();
        renderReports();
    }
}

// Stock & Availability Toggle Manager
function renderStockManager() {
    const container = document.getElementById('stock-items-container');
    container.innerHTML = '';

    // Sample catalogue items list for stock toggle demo
    const stockItems = [
        { id: 'koshary_all', name: 'جميع أطباق الكشري', category: 'الكشري', image: 'assets/koshary.jpg' },
        { id: 'tajin_beef', name: 'طاجن لحمة بالفرن', category: 'الطواجن', image: 'assets/tajin_beef.jpg' },
        { id: 'tajin_chicken', name: 'طاجن فراخ بالفرن', category: 'الطواجن', image: 'assets/tajin_chicken.jpg' },
        { id: 'tajin_liver', name: 'طاجن كبدة بالفرن', category: 'الطواجن', image: 'assets/tajin_liver.jpg' },
        { id: 'hawawshi_item', name: 'حواوشي أبو عبد البلدي', category: 'الحواوشي', image: 'assets/hawawshi.jpg' },
        { id: 'mozzarella_topping', name: 'جبنة موتزاريلا ذائبة', category: 'الإضافات', image: 'assets/tajin_mozzarella.jpg' },
        { id: 'desserts_all', name: 'جميع الحلويات والأرز باللبن', category: 'الحلويات', image: 'assets/rice_pudding_baked.jpg' }
    ];

    stockItems.forEach(item => {
        const isAvailable = adminState.stock[item.id] !== false; // default true

        const card = document.createElement('div');
        card.className = 'stock-card';
        card.innerHTML = `
            <div class="stock-card-info">
                <img src="${item.image}" alt="${item.name}" class="stock-img">
                <div>
                    <div class="stock-name">${item.name}</div>
                    <div class="stock-category">${item.category}</div>
                </div>
            </div>
            <label class="switch">
                <input type="checkbox" ${isAvailable ? 'checked' : ''} onchange="toggleStockAvailability('${item.id}', this.checked)">
                <span class="slider"></span>
            </label>
        `;
        container.appendChild(card);
    });
}

function toggleStockAvailability(itemId, isAvailable) {
    adminState.stock[itemId] = isAvailable;
    localStorage.setItem('abo_abd_stock', JSON.stringify(adminState.stock));
}

// Reports & Sales Split
function renderReports() {
    let khankaSales = 0;
    let sheratonSales = 0;

    adminState.orders.forEach(ord => {
        if (ord.status === 'completed') {
            let total = 0;
            ord.items.forEach(i => {
                const add = (i.addons || []).reduce((s, a) => s + a.price, 0);
                total += (i.price + add) * i.quantity;
            });

            if (ord.branch === 'khanka') khankaSales += total;
            else if (ord.branch === 'sheraton') sheratonSales += total;
        }
    });

    document.getElementById('rep-khanka-sales').textContent = `${khankaSales} ج.م`;
    document.getElementById('rep-sheraton-sales').textContent = `${sheratonSales} ج.م`;

    const totalSales = khankaSales + sheratonSales || 1;
    document.getElementById('fill-khanka').style.width = `${(khankaSales / totalSales) * 100}%`;
    document.getElementById('fill-sheraton').style.width = `${(sheratonSales / totalSales) * 100}%`;
}

function exportOrdersJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(adminState.orders, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute("href", dataStr);
    dlAnchor.setAttribute("download", `abo_abd_orders_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(dlAnchor);
    dlAnchor.click();
    dlAnchor.remove();
}

// POS Thermal Receipt Printer Modal
function openReceiptModal(orderId) {
    const order = adminState.orders.find(o => o.id === orderId);
    if (!order) return;

    document.getElementById('receipt-id').textContent = `#${order.id}`;
    document.getElementById('receipt-date').textContent = order.timestamp;
    document.getElementById('receipt-cust-name').textContent = order.customerName;
    document.getElementById('receipt-cust-address').textContent = order.address;
    document.getElementById('receipt-cust-notes').textContent = order.notes || 'لا يوجد';
    document.getElementById('receipt-branch-name').textContent = order.branch === 'khanka' ? 'فرع الخانكة (أمام الوحدة الزراعية)' : 'فرع شيراتون (شارع النصر)';

    const tbody = document.getElementById('receipt-items-body');
    tbody.innerHTML = '';

    let grandTotal = 0;
    order.items.forEach(item => {
        const addonsSum = (item.addons || []).reduce((s, a) => s + a.price, 0);
        const lineTotal = (item.price + addonsSum) * item.quantity;
        grandTotal += lineTotal;

        const optText = item.option ? `<br><small>(${item.option})</small>` : '';
        let addonsText = '';
        if (item.addons && item.addons.length > 0) {
            addonsText = `<br><small>+ ${item.addons.map(a => a.nameAr).join(', ')}</small>`;
        }

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${item.nameAr}${optText}${addonsText}</td>
            <td>${item.quantity}</td>
            <td>${lineTotal} EGP</td>
        `;
        tbody.appendChild(tr);
    });

    document.getElementById('receipt-total').textContent = `${grandTotal} EGP`;

    const modal = document.getElementById('receipt-modal');
    modal.classList.add('active');
}

function closeReceiptModal() {
    const modal = document.getElementById('receipt-modal');
    modal.classList.remove('active');
}

// Perfected Excel CSV Export Engine (UTF-8 with clean columns for Excel)
function exportOrdersToExcel() {
    const filtered = getFilteredOrders();
    if (!filtered || filtered.length === 0) {
        alert('لا توجد طلبات لتصديرها في التاريخ أو الفرع المحدد!');
        return;
    }

    const headers = [
        "رقم الطلب",
        "تاريخ ووقت الطلب",
        "الفرع",
        "اسم العميل",
        "رقم الهاتف",
        "العنوان بالتفصيل",
        "الأصناف المطلوبة والكميات والإضافات",
        "سعر المشتريات (ج.م)",
        "سعر التوصيل (الدليفري)",
        "الإجمالي النهائي (ج.م)",
        "حالة الواتساب",
        "حالة الطلب"
    ];

    const rows = filtered.map(ord => {
        const branchName = ord.branch === 'khanka' ? 'فرع الخانكة' : (ord.branch === 'sheraton' ? 'فرع شيراتون' : 'جميع الفروع');
        const phone = ord.phone || ord.customerPhone || 'غير مدون';
        
        let subtotal = 0;
        const itemsStr = ord.items.map(item => {
            const addSum = (item.addons || []).reduce((s, a) => s + a.price, 0);
            const lineTotal = (item.price + addSum) * item.quantity;
            subtotal += lineTotal;
            const optionText = item.option ? ` (${item.option})` : '';
            const addonsText = (item.addons && item.addons.length > 0) ? ` [إضافات: ${item.addons.map(a => a.nameAr).join(' + ')}]` : '';
            return `${item.nameAr}${optionText}${addonsText} (عدد ${item.quantity}) بسعر ${lineTotal}ج.م`;
        }).join(' - ');

        const statusText = 'مؤكد ومكتمل تلقائياً ✅';
        const waText = ord.whatsappSent ? 'تم إرساله عبر الواتساب' : 'لم يكتمل بالواتساب';

        return [
            `"${ord.id}"`,
            `"${ord.timestamp || ''}"`,
            `"${branchName}"`,
            `"${(ord.customerName || '').replace(/"/g, '""')}"`,
            `"${(phone || '').replace(/"/g, '""')}"`,
            `"${(ord.address || '').replace(/"/g, '""')}"`,
            `"${itemsStr.replace(/"/g, '""')}"`,
            `"${subtotal}"`,
            `"يُحدد عند استلام الطلب 🚚"`,
            `"${subtotal}"`,
            `"${waText}"`,
            `"${statusText}"`
        ];
    });

    // Use sep=; header so Excel automatically separates columns cleanly!
    const csvContent = "\uFEFFsep=;\n" + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    const dateStr = adminState.selectedDateFilter || new Date().toISOString().slice(0, 10);
    link.setAttribute('download', `شيت_مبيعات_كشري_أبو_عبد_${dateStr}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
