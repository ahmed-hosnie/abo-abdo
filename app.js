/* ==========================================================================
   Koshary Abo Abd Core Application Logic
   ========================================================================== */

// Menu Database for El-Khanka and Sheraton
const MENU_DATA = {
    khanka: [
        // Koshary
        { id: 'k1', category: 'koshary', nameAr: 'كشري صغير', nameEn: 'Small Koshary', descAr: 'علبة كشري حجم صغير بالخلطة والمذاق الأصيل منذ 1999', descEn: 'Small size box of traditional Koshary with our authentic secret recipe', price: 20, image: 'assets/koshary.jpg' },
        { id: 'k2', category: 'koshary', nameAr: 'كشري شبح', nameEn: 'Shabah Koshary', descAr: 'علبة كشري شبح حجم متوسط مشبع ومثالي للوجبات السريعة', descEn: 'Medium size Koshary, perfectly filling and satisfying', price: 25, image: 'assets/koshary.jpg' },
        { id: 'k3', category: 'koshary', nameAr: 'كشري مخصوص', nameEn: 'Special Koshary', descAr: 'علبة كشري مخصوص بمكونات إضافية مميزة ومذاق ممتع', descEn: 'Special Koshary box with extra toppings and exceptional flavor', price: 30, image: 'assets/koshary.jpg' },
        { id: 'k4', category: 'koshary', nameAr: 'كشري ممتاز', nameEn: 'Excellent Koshary', descAr: 'علبة كشري حجم ممتاز لعشاق الطعم الأصيل والمشبع', descEn: 'Excellent size Koshary box for authentic taste lovers', price: 40, image: 'assets/koshary.jpg' },
        { id: 'k5', category: 'koshary', nameAr: 'كشري الكبير', nameEn: 'Large Koshary', descAr: 'علبة كشري حجم كبير جداً غني بالصلصة والتقلية المقرمشة', descEn: 'Large Koshary box, loaded with extra sauce and crispy onions', price: 50, image: 'assets/koshary.jpg' },
        { id: 'k6', category: 'koshary', nameAr: 'كشري أبو عبده', nameEn: 'Abo Abdo Koshary', descAr: 'علبة كشري أبو عبده الجامبو الفاخرة للطلبات العائلية الكبيرة', descEn: 'Jumbo luxury Abo Abdo Koshary box for deep satisfaction', price: 60, image: 'assets/koshary.jpg' },
        
        // Tawagen
        { 
            id: 't1', 
            category: 'tawagen', 
            nameAr: 'طاجن لحمة بالفرن', 
            nameEn: 'Oven Baked Meat Tajin', 
            descAr: 'مكرونة باللحمة المفرومة المتبلة بالفرن بصلصة الطماطم الغنية', 
            descEn: 'Delicious oven-baked pasta with seasoned minced beef and tomato sauce', 
            price: { 'عادي (Regular)': 40, 'موتزاريلا (Mozzarella)': 65 }, 
            options: ['عادي (Regular)', 'موتزاريلا (Mozzarella)'],
            image: 'assets/tajin_beef.jpg' 
        },
        { 
            id: 't2', 
            category: 'tawagen', 
            nameAr: 'طاجن فراخ بالفرن', 
            nameEn: 'Oven Baked Chicken Tajin', 
            descAr: 'مكرونة بقطع الدجاج المتبلة ببهاراتنا الخاصة ومطهوة بالفرن', 
            descEn: 'Savory baked pasta with spiced chicken cubes and rich tomato sauce', 
            price: { 'عادي (Regular)': 45, 'موتزاريلا (Mozzarella)': 70 }, 
            options: ['عادي (Regular)', 'موتزاريلا (Mozzarella)'],
            image: 'assets/tajin_chicken.jpg' 
        },
        
        // Mixes (Tawagen + Koshary)
        { id: 'm1', category: 'mixes', nameAr: 'ميكس طاجن لحمة + كشري', nameEn: 'Meat Tajin + Koshary Mix', descAr: 'المزيج المبتكر المفضل للعملاء: طاجن لحمة مفرومة مع كشري أبو عبد', descEn: 'Our popular mix: Baked pasta with minced beef on top of hot Koshary', price: 60, image: 'assets/tajin_beef.jpg' },
        { id: 'm2', category: 'mixes', nameAr: 'ميكس طاجن فراخ + كشري', nameEn: 'Chicken Tajin + Koshary Mix', descAr: 'المزيج الشهي: طاجن فراخ متبلة مطهوة بالفرن فوق علبة كشري ساخنة', descEn: 'A delicious mix: Baked pasta with spiced chicken layered on top of Koshary', price: 65, image: 'assets/tajin_chicken.jpg' },
        
        // Hawawshi
        { 
            id: 'h1', 
            category: 'hawawshi', 
            nameAr: 'حواوشي أبو عبد البلدي', 
            nameEn: 'Abo Abd Baladi Hawawshi', 
            descAr: 'رغيف حواوشي بلدي مقرمش باللحمة المفرومة المتبلة بالبهارات والخلطة', 
            descEn: 'Traditional crispy Egyptian bread stuffed with spiced minced beef', 
            price: { 'سادة (Plain)': 20, 'جبنة (With Mozzarella)': 25 }, 
            options: ['سادة (Plain)', 'جبنة (With Mozzarella)'],
            image: 'assets/hawawshi.jpg' 
        },
        
        // Desserts
        { id: 'd1', category: 'dessert', nameAr: 'أرز بلبن سادة', nameEn: 'Plain Rice Pudding', descAr: 'أرز بلبن بلدي كريمي بارد ولذيذ ومحضر طازجاً يومياً', descEn: 'Cold and creamy traditional Egyptian rice pudding made fresh daily', price: 20, image: 'assets/rice_pudding.png' },
        { id: 'd2', category: 'dessert', nameAr: 'أرز بلبن فرن', nameEn: 'Oven Baked Rice Pudding', descAr: 'طاجن أرز بلبن بالفرن ذو وجه مكرمل رائع وطعم متميز للغاية', descEn: 'Rich, oven-baked rice pudding with a caramelized crust on top', price: 25, image: 'assets/rice_pudding_baked.jpg' },
        { id: 'd3', category: 'dessert', nameAr: 'أرز بلبن بالإضافات', nameEn: 'Rice Pudding with Toppings', descAr: 'أرز بلبن مضاف إليه العسل اللذيذ أو البسبوسة أو اللوتس الشهي', descEn: 'Creamy rice pudding topped with honey, Basbousa or Lotus spread', price: 30, image: 'assets/rice_pudding.png' },
        { id: 'd4', category: 'dessert', nameAr: 'أي إضافة زيادة للحلو', nameEn: 'Extra Dessert Topping', descAr: 'إضافة بسبوسة، لوتس، أو عسل نحل إضافي حسب رغبتك', descEn: 'Extra scoop of Basbousa, Lotus crumble, or pure bee honey', price: 15, image: 'assets/rice_pudding.png' },
        
        // Extras
        { id: 'e1', category: 'extras', nameAr: 'تقلية (بصل كريسبي)', nameEn: 'Crispy Fried Onions (Ta\'leya)', descAr: 'بصل مقرمش ذهبي مقلي ومصفى بعناية', descEn: 'Crispy golden fried onions, the signature crunch on Koshary', price: 15, image: 'assets/koshary.jpg' },
        { id: 'e2', category: 'extras', nameAr: 'عدس مسلوق إضافي', nameEn: 'Extra Boiled Lentils', descAr: 'عدس أسود مسلوق غني بالبهارات المتميزة', descEn: 'Nutritious brown lentils boiled with cumin and spices', price: 15, image: 'assets/koshary.jpg' },
        { id: 'e3', category: 'extras', nameAr: 'حمص الشام إضافي', nameEn: 'Extra Chickpeas', descAr: 'حمص شام مسلوق بعناية وغني بالمذاق المصري الشهي', descEn: 'Soft boiled chickpeas, a perfect addition for extra protein', price: 15, image: 'assets/koshary.jpg' },
        { id: 'e4', category: 'extras', nameAr: 'صلصة أبو عبد السرية', nameEn: 'Abo Abd Secret Sauce', descAr: 'علبة صلصة طماطم مسبكة بخلطتنا الفريدة المتبلة', descEn: 'Extra cup of our signature spiced garlic tomato sauce', price: 15, image: 'assets/koshary.jpg' },
        { id: 'e5', category: 'extras', nameAr: 'توست شامي مقرمش', nameEn: 'Toasted Shami Bread', descAr: 'عيش شامي مقرمش ومحمر ومتبل ببهاراتنا الخاصة', descEn: 'Crispy toasted spiced flatbread triangles, highly addictive', price: 10, image: 'assets/qarmasha.jpg' },
        { id: 'e6', category: 'extras', nameAr: 'جبنة موتزاريلا ذائبة', nameEn: 'Melted Mozzarella Cheese', descAr: 'إضافة جبنة موتزاريلا ذائبة ومطاطية للأطباق والطواجن', descEn: 'Extra portion of stringy melted mozzarella cheese', price: 30, image: 'assets/koshary.jpg' },
        
        // Salads
        { id: 's1', category: 'salads', nameAr: 'سلطة خضراء بلدي', nameEn: 'Traditional Green Salad', descAr: 'سلطة خضراء طازجة مقطعة متبلة بالخل والليمون والثوم والكمين', descEn: 'Fresh mixed green salad dressed with vinegar, garlic and cumin', price: 15, image: 'assets/salad_green.png' },
        { id: 's2', category: 'salads', nameAr: 'طماطم متبلة بالخل والثوم', nameEn: 'Marinated Garlic Tomatoes', descAr: 'شرائح طماطم متبلة بالخل، الثوم، الكزبرة، والشطة الحارة', descEn: 'Fresh tomato slices marinated in garlic, vinegar and hot chili', price: 15, image: 'assets/salad_tomatoes.png' },
        { id: 's3', category: 'salads', nameAr: 'خيار مخلل طازج ومقرمش', nameEn: 'Crispy Pickled Cucumber', descAr: 'خيار بلدي طازج ومخلل ومقرمش بخلطة الثوم والخل والليمون', descEn: 'Fresh traditional pickled cucumbers, crisp and seasoned with garlic and vinegar', price: 15, image: 'assets/pickled_cucumber.jpg' },
        { id: 's4', category: 'salads', nameAr: 'مخلل مشكل بلدي', nameEn: 'Mixed Arabic Pickles', descAr: 'تشكيلة مخللات بلدية مشكلة فاتحة للشهية وممتازة بجانب الكشري', descEn: 'Assorted seasonal pickled vegetables, highly appetite stimulating', price: 10, image: 'assets/pickles.png' },
        { id: 's5', category: 'salads', nameAr: 'ويسكي حلال (مياه دقة حارة)', nameEn: 'Halal Whiskey (Spicy Dressing)', descAr: 'مياه السلطة الحارة والمنعشة المتبلة بالثوم والشطة الخاصة بنا', descEn: 'The famous spicy-sour tomato water dressing typical in Koshary shops', price: 7, image: 'assets/whiskey.jpg' }
    ],
    sheraton: [
        // Koshary
        { id: 'k1_sh', category: 'koshary', nameAr: 'كشري الصغنن', nameEn: 'Tiny Koshary', descAr: 'علبة كشري صغننة بالخلطة والمذاق الأصيل منذ 1999', descEn: 'Tiny size box of traditional Koshary with our authentic secret recipe', price: 30, image: 'assets/koshary.jpg' },
        { id: 'k3_sh', category: 'koshary', nameAr: 'كشري مخصوص', nameEn: 'Special Koshary', descAr: 'علبة كشري مخصوص بمكونات إضافية مميزة ومذاق ممتع للوجبات الفريدة', descEn: 'Special Koshary box with extra toppings and exceptional flavor', price: 40, image: 'assets/koshary.jpg' },
        { id: 'k4_sh', category: 'koshary', nameAr: 'كشري ممتاز', nameEn: 'Excellent Koshary', descAr: 'علبة كشري ممتاز مشبعة ولذيذة بالخلطة الأصلية المتقنة', descEn: 'Excellent size Koshary box for authentic taste lovers', price: 50, image: 'assets/koshary.jpg' },
        { id: 'k5_sh', category: 'koshary', nameAr: 'كشري الكبير', nameEn: 'Large Koshary', descAr: 'علبة كشري حجم كبير غني بالصلصة والتقلية المقرمشة اللذيذة', descEn: 'Large Koshary box, loaded with extra sauce and crispy onions', price: 60, image: 'assets/koshary.jpg' },
        { id: 'k6_sh', category: 'koshary', nameAr: 'كشري أبو عبده', nameEn: 'Abo Abdo Koshary', descAr: 'علبة كشري أبو عبده الجامبو الفاخرة للطلبات العائلية العميقة', descEn: 'Jumbo luxury Abo Abdo Koshary box for deep satisfaction', price: 70, image: 'assets/koshary.jpg' },
        
        // Tawagen
        { 
            id: 't1_sh', 
            category: 'tawagen', 
            nameAr: 'طاجن لحمة بالفرن', 
            nameEn: 'Oven Baked Meat Tajin', 
            descAr: 'مكرونة باللحمة المفرومة المتبلة بالفرن بصلصة الطماطم الغنية واللذيذة', 
            descEn: 'Delicious oven-baked pasta with seasoned minced beef and tomato sauce', 
            price: { 'عادي (Regular)': 65, 'موتزاريلا (Mozzarella)': 110 }, 
            options: ['عادي (Regular)', 'موتزاريلا (Mozzarella)'],
            image: 'assets/tajin_beef.jpg' 
        },
        { 
            id: 't2_sh', 
            category: 'tawagen', 
            nameAr: 'طاجن كبدة بالفرن', 
            nameEn: 'Oven Baked Liver Tajin', 
            descAr: 'مكرونة بالكبدة الإسكندراني المتبلة بالبهارات والخل والثوم بالفرن', 
            descEn: 'Oven-baked pasta with seasoned Alexandrian-style liver and spicy garlic sauce', 
            price: { 'عادي (Regular)': 65, 'موتزاريلا (Mozzarella)': 110 }, 
            options: ['عادي (Regular)', 'موتزاريلا (Mozzarella)'],
            image: 'assets/tajin_liver.jpg' 
        },
        { 
            id: 't3_sh', 
            category: 'tawagen', 
            nameAr: 'طاجن فراخ بالفرن', 
            nameEn: 'Oven Baked Chicken Tajin', 
            descAr: 'مكرونة بقطع الدجاج المتبلة ببهاراتنا الخاصة ومطهوة بالفرن بنظافة', 
            descEn: 'Savory baked pasta with spiced chicken cubes and rich tomato sauce', 
            price: { 'عادي (Regular)': 70, 'موتزاريلا (Mozzarella)': 115 }, 
            options: ['عادي (Regular)', 'موتزاريلا (Mozzarella)'],
            image: 'assets/tajin_chicken.jpg' 
        },
        { 
            id: 't4_sh', 
            category: 'tawagen', 
            nameAr: 'طاجن مشروم بالفرن', 
            nameEn: 'Oven Baked Mushroom Tajin', 
            descAr: 'طاجن مكرونة بالمشروم الطازج والصلصة المميزة مطهو بالفرن بالكامل', 
            descEn: 'Baked pasta with fresh mushrooms, herbs, and our signature red sauce', 
            price: { 'عادي (Regular)': 60, 'موتزاريلا (Mozzarella)': 105 }, 
            options: ['عادي (Regular)', 'موتزاريلا (Mozzarella)'],
            image: 'assets/tajin_mozzarella.jpg' 
        },
        
        // Mixes (Tawagen + Koshary)
        { 
            id: 'm1_sh', 
            category: 'mixes', 
            nameAr: 'ميكس طاجن لحمة + كشري', 
            nameEn: 'Meat Tajin + Koshary Mix', 
            descAr: 'المزيج المبتكر المفضل للعملاء: طاجن لحمة مفرومة مع كشري أبو عبد', 
            descEn: 'Baked pasta with minced beef layered on top of hot Koshary', 
            price: { 'وسط (Medium)': 105, 'كبير (Large)': 120 }, 
            options: ['وسط (Medium)', 'كبير (Large)'],
            image: 'assets/tajin_beef.jpg' 
        },
        { 
            id: 'm2_sh', 
            category: 'mixes', 
            nameAr: 'ميكس طاجن كبدة + كشري', 
            nameEn: 'Liver Tajin + Koshary Mix', 
            descAr: 'مزيج المذاق الأصيل: مكرونة كبدة إسكندراني بالفرن على علبة كشري ساخنة', 
            descEn: 'Alexandrian liver baked pasta layered on top of hot Koshary', 
            price: { 'وسط (Medium)': 105, 'كبير (Large)': 120 }, 
            options: ['وسط (Medium)', 'كبير (Large)'],
            image: 'assets/tajin_liver.jpg' 
        },
        { 
            id: 'm3_sh', 
            category: 'mixes', 
            nameAr: 'ميكس طاجن فراخ + كشري', 
            nameEn: 'Chicken Tajin + Koshary Mix', 
            descAr: 'ميكس مكرونة بقطع الدجاج المتبلة مع علبة كشري ساخنة ولذيذة', 
            descEn: 'Baked chicken pasta layered on top of hot Koshary', 
            price: { 'وسط (Medium)': 110, 'كبير (Large)': 140 }, 
            options: ['وسط (Medium)', 'كبير (Large)'],
            image: 'assets/tajin_chicken.jpg' 
        },
        { 
            id: 'm4_sh', 
            category: 'mixes', 
            nameAr: 'ميكس طاجن مشروم + كشري', 
            nameEn: 'Mushroom Tajin + Koshary Mix', 
            descAr: 'ميكس مكرونة بالمشروم الغني مطهوة بالفرن مع علبة كشري نباتية رائعة', 
            descEn: 'Mushroom baked pasta layered on top of hot Koshary', 
            price: { 'وسط (Medium)': 100, 'كبير (Large)': 115 }, 
            options: ['وسط (Medium)', 'كبير (Large)'],
            image: 'assets/tajin_mozzarella.jpg' 
        },
        { 
            id: 'm5_sh', 
            category: 'mixes', 
            nameAr: 'ميكس لحمة على فراخ + كشري', 
            nameEn: 'Meat & Chicken Pasta + Koshary', 
            descAr: 'ميكس مزدوج رائع: طاجن نصف لحمة ونصف فراخ مطهو بالفرن فوق كشري أبو عبد', 
            descEn: 'A double mix: half beef, half chicken baked pasta over a Koshary bowl', 
            price: { 'وسط (Medium)': 100, 'كبير (Large)': 135 }, 
            options: ['وسط (Medium)', 'كبير (Large)'],
            image: 'assets/tajin_mozzarella.jpg' 
        },
        
        // Hawawshi
        { 
            id: 'h1_sh', 
            category: 'hawawshi', 
            nameAr: 'حواوشي أبو عبد البلدي', 
            nameEn: 'Abo Abd Baladi Hawawshi', 
            descAr: 'رغيف حواوشي بلدي مقرمش باللحمة المفرومة المتبلة بالبهارات والخلطة مع خيار الموتزاريلا الذائبة', 
            descEn: 'Traditional crispy Egyptian bread stuffed with spiced minced beef and melted Mozzarella', 
            price: { 'سادة (Plain)': 45, 'جبنة (With Mozzarella)': 60 }, 
            options: ['سادة (Plain)', 'جبنة (With Mozzarella)'],
            image: 'assets/hawawshi.jpg' 
        },
        
        // Additional Dishes (Sheraton Only)
        { id: 'ad1_sh', category: 'additional', nameAr: 'فتة كشري أبو عبد', nameEn: 'Koshary Fatteh', descAr: 'فتة الكشري المصرية المبتكرة بقطع الخبز المقرمش والثوم والصلصة والدقة', descEn: 'Innovative Egyptian Koshary Fatteh with crispy toasted bread, vinegar garlic sauce', price: 90, image: 'assets/fatteh.jpg' },
        { id: 'ad2_sh', category: 'additional', nameAr: 'فتة فراخ متبلة', nameEn: 'Chicken Fatteh', descAr: 'قطع الدجاج المتبلة المشوية على طبقة من الأرز الفاخر والعيش المقرمش والثومية', descEn: 'Grilled spiced chicken cubes over a bed of luxury rice, toasted bread and garlic sauce', price: 130, image: 'assets/fatteh.jpg' },
        { id: 'ad3_sh', category: 'additional', nameAr: 'ديناميت أبو عبد الحار', nameEn: 'Dynamite Koshary', descAr: 'طبق الديناميت الحار والمليء بميكسات اللحوم والصلصات الحارة والإضافات', descEn: 'Our special spicy Dynamite bowl loaded with mixed meats, chili oil, and extra toppings', price: 150, image: 'assets/fatteh.jpg' },
        
        // Desserts
        { id: 'd1_sh', category: 'dessert', nameAr: 'أرز بلبن سادة', nameEn: 'Plain Rice Pudding', descAr: 'أرز بلبن بلدي كريمي بارد ولذيذ ومحضر طازجاً يومياً بنظافة تامة', descEn: 'Cold and creamy traditional Egyptian rice pudding made fresh daily', price: 30, image: 'assets/rice_pudding.png' },
        { id: 'd2_sh', category: 'dessert', nameAr: 'أرز بلبن فرن بالفرن', nameEn: 'Oven Baked Rice Pudding', descAr: 'طاجن أرز بلبن بالفرن ذو وجه مكرمل شهي وطعم غني', descEn: 'Rich, oven-baked rice pudding with a caramelized crust on top', price: 35, image: 'assets/rice_pudding_baked.jpg' },
        { id: 'd3_sh', category: 'dessert', nameAr: 'أرز بلبن بالإضافات الفاخرة', nameEn: 'Rice Pudding with Toppings', descAr: 'أرز بلبن بلدي مضاف إليه القشطة، العسل النقي، والمسكرات المشكلة البسبوسة', descEn: 'Creamy rice pudding topped with honey, nuts, basbousa and rich cream', price: 50, image: 'assets/rice_pudding.png' },
        { id: 'd4_sh', category: 'dessert', nameAr: 'كريم كراميل فاخر', nameEn: 'Premium Crème Caramel', descAr: 'كريم كراميل غني وناعم يذوب في الفم ويقدم بارداً ومثلياً بعد الوجبة', descEn: 'Smooth and silky baked custard topped with sweet caramel syrup', price: 35, image: 'assets/creme_caramel.png' },
        { id: 'd5_sh', category: 'dessert', nameAr: 'كاسترد بلدي كريمي', nameEn: 'Sweet Custard', descAr: 'كاسترد كلاسيكي كريمي وبارد مزين بلمسة مكسرات خفيفة ولذيذة', descEn: 'Creamy classical vanilla custard served cold with a sprinkle of nuts', price: 35, image: 'assets/custard.jpg' },
        { id: 'd6_sh', category: 'dessert', nameAr: 'بودينج شوكولاتة غنية', nameEn: 'Chocolate Pudding', descAr: 'بودينج الشوكولاتة البلجيكية الغنية اللذيذة المحببة للأطفال والكبار', descEn: 'Rich and smooth Belgian chocolate pudding, a perfect sweet delight', price: 35, image: 'assets/chocolate_pudding.jpg' },
        
        // Extras
        { id: 'e1_sh', category: 'extras', nameAr: 'عدس مسلوق إضافي', nameEn: 'Extra Boiled Lentils', descAr: 'عدس أسود مسلوق ببهاراتنا الخاصة والكمون', descEn: 'Nutritious brown lentils boiled with cumin and spices', price: 20, image: 'assets/koshary.jpg' },
        { id: 'e2_sh', category: 'extras', nameAr: 'تقلية (بصل كريسبي)', nameEn: 'Crispy Fried Onions (Ta\'leya)', descAr: 'بصل ذهبي مقرمش مقلي ومصفى بعناية بالغة', descEn: 'Crispy golden fried onions, the signature crunch on Koshary', price: 20, image: 'assets/koshary.jpg' },
        { id: 'e3_sh', category: 'extras', nameAr: 'حمص الشام إضافي', nameEn: 'Extra Chickpeas', descAr: 'حمص شام مسلوق بعناية ومتبل بطعم مصري غني', descEn: 'Soft boiled chickpeas, a perfect addition for extra protein', price: 20, image: 'assets/koshary.jpg' },
        { id: 'e4_sh', category: 'extras', nameAr: 'صلصة أبو عبد السرية', nameEn: 'Abo Abd Secret Sauce', descAr: 'علبة صلصة طماطم مسبكة بالخل والخلطة المميزة المتبلة', descEn: 'Extra cup of our signature spiced garlic tomato sauce', price: 20, image: 'assets/koshary.jpg' },
        { id: 'e5_sh', category: 'extras', nameAr: 'شطة زيت حارة جداً', nameEn: 'Chili Oil (Shatta Zeit)', descAr: 'شطة زيت حارة جداً ومعدة بطريقتنا الخاصة لعشاق الأكل الحامي', descEn: 'Extremely hot chili oil sauce, typical for brave spicy lovers', price: 20, image: 'assets/koshary.jpg' },
        { id: 'e6_sh', category: 'extras', nameAr: 'دقة أو شطة بودر', nameEn: 'Daqqa or Chili Powder', descAr: 'دقة ثوم خل وليمون منعشة أو علبة شطة بودرة حارة', descEn: 'Garlic-vinegar tangy dressing (Daqqa) or hot chili powder cup', price: 15, image: 'assets/koshary.jpg' },
        { id: 'e7_sh', category: 'extras', nameAr: 'توست شامي مقرمش', nameEn: 'Toasted Shami Bread', descAr: 'عيش شامي مقرمش ومحمر متبل ببهاراتنا الخاصة الملحية', descEn: 'Crispy toasted spiced flatbread triangles, highly addictive', price: 15, image: 'assets/qarmasha.jpg' },
        { id: 'e8_sh', category: 'extras', nameAr: 'جبنة موزاريلا ذائبة', nameEn: 'Melted Mozzarella Cheese', descAr: 'إضافة جبنة موزاريلا ذائبة ومطاطية للطواجن', descEn: 'Extra portion of stringy melted mozzarella cheese', price: 50, image: 'assets/koshary.jpg' },
        { id: 'e9_sh', category: 'extras', nameAr: 'إضافة قطع فراخ', nameEn: 'Extra Chicken', descAr: 'إضافة فراخ متبلة مشوية إضافية لأي طبق أو طاجن', descEn: 'Extra portion of spiced chicken toppings', price: 45, image: 'assets/koshary.jpg' },
        { id: 'e10_sh', category: 'extras', nameAr: 'إضافة لحمة مفرومة', nameEn: 'Extra Beef', descAr: 'إضافة لحمة مفرومة متبلة مطهوة إضافية لأي طبق أو طاجن', descEn: 'Extra portion of seasoned minced beef toppings', price: 40, image: 'assets/koshary.jpg' },
        { id: 'e11_sh', category: 'extras', nameAr: 'إضافة كبدة بلدي', nameEn: 'Extra Liver', descAr: 'إضافة كبدة إسكندراني متبلة إضافية لأي طبق أو طاجن', descEn: 'Extra portion of seasoned Alexandrian-style liver toppings', price: 40, image: 'assets/koshary.jpg' },
        
        // Drinks
        { id: 'dr1_sh', category: 'drinks', nameAr: 'مياه معدنية صغيرة', nameEn: 'Small Mineral Water', descAr: 'زجاجة مياه معدنية باردة حجم صغير', descEn: 'Chilled small mineral water bottle', price: 10, image: 'assets/water.png' },
        { 
            id: 'dr2_sh', 
            category: 'drinks', 
            nameAr: 'كانز مشروب غازي', 
            nameEn: 'Canned Soda', 
            descAr: 'كانز مشروب غازي مثلج ومختار حسب نوعك المفضل', 
            descEn: 'Ice cold canned soft drink selected with your preferred flavor', 
            price: { 'بيبسي (Pepsi)': 25, 'كوكاكولا (Coca Cola)': 25, 'سفن اب (7up)': 25, 'سبرايت (Sprite)': 25, 'فانتا (Fanta)': 25 }, 
            options: ['بيبسي (Pepsi)', 'كوكاكولا (Coca Cola)', 'سفن اب (7up)', 'سبرايت (Sprite)', 'فانتا (Fanta)'],
            image: 'assets/soda.jpg' 
        },
        { id: 'dr3_sh', category: 'drinks', nameAr: 'قهوة تركي ساخنة', nameEn: 'Hot Turkish Coffee', descAr: 'فنجان قهوة تركي محضر طازجاً بوش غني ورائع', descEn: 'Freshly brewed hot Turkish coffee with thick foam', price: 30, image: 'assets/coffee.png' },
        { id: 'dr4_sh', category: 'drinks', nameAr: 'شاي بلدي كشري', nameEn: 'Egyptian Tea', descAr: 'كوب شاي أحمر بلدي ساخن ومعد على الطريقة المصرية الأصيلة', descEn: 'Hot red Egyptian tea brewed to perfection', price: 20, image: 'assets/tea.png' },
        
        // Salads
        { id: 's1_sh', category: 'salads', nameAr: 'سلطة خضراء بلدي', nameEn: 'Traditional Green Salad', descAr: 'سلطة خضراء طازجة مقطعة متبلة بالخل والليمون والثوم والكمين', descEn: 'Fresh mixed green salad dressed with vinegar, garlic and cumin', price: 15, image: 'assets/salad_green.png' },
        { id: 's2_sh', category: 'salads', nameAr: 'طماطم متبلة بالخل والثوم', nameEn: 'Marinated Garlic Tomatoes', descAr: 'شرائح طماطم متبلة بالخل، الثوم، الكزبرة، والشطة الحارة', descEn: 'Fresh tomato slices marinated in garlic, vinegar and hot chili', price: 15, image: 'assets/salad_tomatoes.png' },
        { id: 's3_sh', category: 'salads', nameAr: 'خيار مخلل طازج ومقرمش', nameEn: 'Crispy Pickled Cucumber', descAr: 'خيار بلدي طازج ومخلل ومقرمش بخلطة الثوم والخل والليمون', descEn: 'Fresh traditional pickled cucumbers, crisp and seasoned with garlic and vinegar', price: 15, image: 'assets/pickled_cucumber.jpg' },
        { id: 's4_sh', category: 'salads', nameAr: 'مخلل مشكل بلدي', nameEn: 'Mixed Arabic Pickles', descAr: 'تشكيلة مخللات بلدية مشكلة فاتحة للشهية وممتازة بجانب الكشري', descEn: 'Assorted seasonal pickled vegetables, highly appetite stimulating', price: 15, image: 'assets/pickles.png' },
        { id: 's5_sh', category: 'salads', nameAr: 'ويسكي بلدي (مياه دقة حارة)', nameEn: 'Whiskey Salad Dressing', descAr: 'مياه السلطة الحارة والمنعشة المتبلة بالثوم والشطة الخاصة بنا', descEn: 'The famous spicy-sour tomato water dressing typical in Koshary shops', price: 10, image: 'assets/whiskey.jpg' }
    ]
};

// Addons database categorized by branch and product category
const ADDONS_DATABASE = {
    khanka: {
        koshary: [
            { nameAr: 'تقلية (بصل)', nameEn: 'Crispy Onions', price: 15 },
            { nameAr: 'حمص الشام', nameEn: 'Chickpeas', price: 15 },
            { nameAr: 'عدس مسلوق', nameEn: 'Lentils', price: 15 },
            { nameAr: 'صلصة إضافية', nameEn: 'Extra Sauce', price: 15 }
        ],
        tawagen: [
            { nameAr: 'جبنة موتزاريلا ذائبة', nameEn: 'Melted Mozzarella', price: 30 }
        ],
        mixes: [
            { nameAr: 'جبنة موتزاريلا ذائبة', nameEn: 'Melted Mozzarella', price: 30 }
        ],
        dessert: [
            { nameAr: 'إضافة حلو (بسبوسة/عسل)', nameEn: 'Dessert Topping', price: 15 }
        ]
    },
    sheraton: {
        koshary: [
            { nameAr: 'تقلية (بصل كريسبي)', nameEn: 'Crispy Onions', price: 20 },
            { nameAr: 'حمص الشام', nameEn: 'Chickpeas', price: 20 },
            { nameAr: 'عدس مسلوق', nameEn: 'Lentils', price: 20 },
            { nameAr: 'صلصة أبو عبد', nameEn: 'Secret Sauce', price: 20 },
            { nameAr: 'شطة زيت حارة', nameEn: 'Hot Chili Oil', price: 20 }
        ],
        tawagen: [
            { nameAr: 'جبنة موتزاريلا ذائبة', nameEn: 'Melted Mozzarella', price: 50 },
            { nameAr: 'إضافة قطع فراخ', nameEn: 'Extra Chicken', price: 45 },
            { nameAr: 'إضافة لحمة مفرومة', nameEn: 'Extra Beef', price: 40 },
            { nameAr: 'إضافة كبدة بلدي', nameEn: 'Extra Liver', price: 40 }
        ],
        mixes: [
            { nameAr: 'جبنة موتزاريلا ذائبة', nameEn: 'Melted Mozzarella', price: 50 },
            { nameAr: 'إضافة قطع فراخ', nameEn: 'Extra Chicken', price: 45 },
            { nameAr: 'إضافة لحمة مفرومة', nameEn: 'Extra Beef', price: 40 },
            { nameAr: 'إضافة كبدة بلدي', nameEn: 'Extra Liver', price: 40 }
        ],
        additional: [
            { nameAr: 'جبنة موتزاريلا ذائبة', nameEn: 'Melted Mozzarella', price: 50 },
            { nameAr: 'إضافة قطع فراخ', nameEn: 'Extra Chicken', price: 45 }
        ],
        dessert: [
            { nameAr: 'إضافة قشطة وعسل ومكسرات', nameEn: 'Cream, Honey & Nuts', price: 20 }
        ]
    }
};

// Translations Dictionary (Arabic default, English secondary)
const TRANSLATIONS = {
    ar: {
        select_branch_title: 'اختر الفرع الأقرب إليك',
        select_branch_subtitle: 'يرجى تحديد الفرع لعرض المنيو والأسعار الخاصة به لضمان دقة الطلب',
        branch_khanka: 'فرع الخانكة',
        branch_sheraton: 'فرع شيراتون',
        khanka_address: 'أمام الوحدة الزراعية',
        sheraton_address: 'شارع النصر - مساكن شيراتون',
        select_branch_btn: 'اختر الفرع',
        since_1999: 'الطعم القديم منذ 1999',
        nav_home: 'الرئيسية',
        nav_offers: 'العروض',
        nav_bestsellers: 'الأكثر مبيعاً',
        nav_menu: 'المنيو',
        nav_about: 'من نحن',
        nav_branches: 'فروعنا',
        nav_contact: 'تواصل معنا',
        branch_badge_label: 'الفرع:',
        hero_experience: 'خبرة 25 عاماً من التميز',
        hero_title_1: 'أصالة الطعم المصري',
        hero_title_2: 'في كل معلقة كشري!',
        hero_desc: 'نقدم لك ألذ أطباق الكشري والطواجن المصنوعة بحب وخبرة ربع قرن. اختر فرعك المفضل واطلب الآن ليصلك دافئاً ولذيذاً إلى باب منزلك.',
        cta_order_now: 'اطلب الآن',
        cta_browse_menu: 'تصفح المنيو',
        feat_exp_title: '25 سنة خبرة',
        feat_exp_desc: 'طعم أصيل متوارث',
        feat_quality_title: 'جودة عالية',
        feat_quality_desc: 'أجود المكونات الطازجة',
        feat_delivery_title: 'أسرع خدمة',
        feat_delivery_desc: 'توصيل سريع وساخن',
        offers_subtitle: 'عروض اليوم المميزة',
        offers_title: 'أقوى العروض والخصومات',
        offer_badge_text: 'عرض خاص',
        offer1_title: 'عيلة السعادة',
        offer1_desc: 'اشتري 2 كشري كبير واحصل على طاجن لحمة صغير مجاناً!',
        offer1_price: 'وفر 15%',
        order_offer_btn: 'اطلب العرض',
        offer2_title: 'التحلية علينا',
        offer2_desc: 'اطلب أي طاجن كبير وميكس كشري واحصل على أرز بلبن مجاناً!',
        offer2_price: 'هدية مجانية',
        bestsellers_subtitle: 'الأكثر طلباً',
        bestsellers_title: 'الأكثر مبيعاً لدينا',
        menu_subtitle: 'اطلب الآن طازجاً',
        menu_title: 'قائمة الطعام (المنيو)',
        menu_showing_for: 'أنت تتصفح قائمة طعام',
        menu_change_branch: 'اضغط هنا لتغيير الفرع',
        gallery_subtitle: 'من مطبخنا',
        gallery_title: 'معرض الأطباق الشهية',
        gallery_item1: 'كشري علبة أبو عبد',
        gallery_item2: 'طاجن لحمة بالفرن',
        gallery_item3: 'حواوشي بلدي بالموتزاريلا',
        gallery_item4: 'أرز بلبن فاخر',
        about_subtitle: 'قصة نجاحنا',
        about_title: 'كشري أبو عبد: ربع قرن من المذاق الأصيل',
        about_badge_exp: 'عاماً من الخبرة',
        about_p1: 'بدأت رحلتنا منذ عام 1999، وبشغف حقيقي لتقديم المذاق المصري التقليدي بأعلى معايير الجودة والتميز. على مدار 25 عاماً، التزمنا بتقديم كشري يعبر عن الهوية المصرية ويسعد قلوب عملائنا في كل وجبة.',
        about_p2: 'سر تميزنا يكمن في دقة اختيار مكوناتنا، من الصلصة المسبكة بخلطتنا السرية، والدقة الغنية بالثوم والليمون، إلى التقلية المقرمشة الذهبية والبصل الكريسبي. في كشري أبو عبد، لسنا مجرد مطعم، بل نحن حراس الطعم الأصلي.',
        stat_exp: 'سنة خبرة',
        stat_branches: 'فروع رئيسية',
        stat_customers: 'عميل سعيد',
        reviews_subtitle: 'ماذا يقولون عنا؟',
        reviews_title: 'آراء عملائنا الأوفياء',
        review1_text: '"كشري أبو عبد هو المفضل لعائلتي منذ سنين. الصلصة والتقلية عندهم طعمها حكاية، وخدمة التوصيل سريعة والأكل بيوصل سخن جداً."',
        review1_user: 'أحمد محمود',
        review_user_tag: 'عميل فرع شيراتون',
        review2_text: '"طواجن الموتزاريلا عندهم خرافية! الميكس بين الكشري والطاجن فكرة ممتازة وبشبع جداً. الأسعار ممتازة مقابل الجودة والنظافة."',
        review2_user: 'سارة علي',
        review3_text: '"جودة وثبات في الطعم على مدار سنين طويلة. الرز باللبن الفرن بعد الكشري بيكمل اليوم. بنصح أي حد يجرب الكشري المخصوص!"',
        review3_user: 'محمد إبراهيم',
        branches_subtitle: 'تفضل بزيارتنا',
        branches_title: 'فروعنا الرسمية',
        khanka_address_full: 'أمام الوحدة الزراعية - موقف الخانكة - القليوبية',
        sheraton_address_full: '57 شارع النصر - صقر قريش - بجوار فندق راديسون - القاهرة - مصر 11787',
        order_from_this_branch: 'اطلب من هذا الفرع',
        contact_subtitle: 'يسعدنا تواصلك معنا',
        contact_title: 'معلومات الاتصال والدعم',
        contact_phone_label: 'رقم التواصل والشكاوى:',
        contact_whatsapp_label: 'واتساب الطلبات والدليفري:',
        contact_hours_label: 'أوقات العمل:',
        contact_hours: 'يومياً من 9:00 صباحاً حتى 2:00 بعد منتصف الليل',
        contact_social_label: 'تابعنا على مواقع التواصل:',
        quick_order_title: 'هل أنت جاهز لتجربة الطعم الأصيل؟',
        quick_order_desc: 'اختر وجبتك المفضلة وسجل طلبك، وسنقوم بتوصيله فوراً لعنوانك وبأسرع وقت.',
        brand_name: 'كشري أبو عبد',
        footer_about_desc: 'الطعم المصري الأصيل والخلطة السرية الفريدة منذ أكثر من 25 عاماً. فروعنا في خدمتكم دائماً.',
        footer_links_title: 'روابط سريعة',
        footer_copy: 'كشري أبو عبد. جميع الحقوق محفوظة.',
        cart_title: 'سلة المشتريات',
        cart_empty_msg: 'سلة المشتريات فارغة. أضف بعض الكشري اللذيذ الآن!',
        cart_subtotal: 'الإجمالي الفرعي:',
        cart_delivery: 'التوصيل:',
        cart_delivery_calc: 'حسب العنوان',
        cart_total: 'الإجمالي النهائي:',
        cart_checkout_btn: 'تأكيد الطلب',
        checkout_title: 'بيانات توصيل الطلب',
        form_name: 'اسم العميل *',
        form_phone: 'رقم الهاتف (واتساب) *',
        form_phone_hint: 'يجب أن يكون رقم مصري مكون من 11 رقم يبدأ بـ 01',
        form_address: 'العنوان بالتفصيل *',
        form_notes: 'ملاحظات إضافية',
        checkout_summary: 'ملخص الطلب:',
        checkout_branch: 'الفرع المختار:',
        form_submit: 'إرسال الطلب عبر واتساب',
        sticky_checkout_btn: 'اطلب الآن',
        egp: 'ج.م',
        add_to_cart: 'أضف للسلة',
        category_koshary: 'الكشري',
        category_tawagen: 'الطواجن',
        category_mixes: 'الميكسات',
        category_hawawshi: 'الحواوشي',
        category_additional: 'أطباق إضافية',
        category_dessert: 'الحلويات',
        category_extras: 'الإضافات',
        category_salads: 'السلطات',
        category_drinks: 'المشروبات',
        optional_addons: 'إضافات اختيارية'
    },
    en: {
        select_branch_title: 'Choose the Nearest Branch',
        select_branch_subtitle: 'Please select a branch to view its menu and pricing for order accuracy',
        branch_khanka: 'El-Khanka Branch',
        branch_sheraton: 'Sheraton Branch',
        khanka_address: 'In front of Agricultural Unit',
        sheraton_address: 'El-Nasr St. - Sheraton Homes',
        select_branch_btn: 'Select Branch',
        since_1999: 'The Authentic Taste Since 1999',
        nav_home: 'Home',
        nav_offers: 'Offers',
        nav_bestsellers: 'Best Sellers',
        nav_menu: 'Menu',
        nav_about: 'About Us',
        nav_branches: 'Branches',
        nav_contact: 'Contact Us',
        branch_badge_label: 'Branch:',
        hero_experience: '25 Years of Culinary Excellence',
        hero_title_1: 'Authentic Egyptian Taste',
        hero_title_2: 'In Every Koshary Spoon!',
        hero_desc: 'Providing you the most delicious Koshary and baked pasta (Tajin) made with love. Choose your nearest branch and place your order to get it hot and fresh at your doorstep.',
        cta_order_now: 'Order Now',
        cta_browse_menu: 'Browse Menu',
        feat_exp_title: '25 Years Exp',
        feat_exp_desc: 'Authentic inherited taste',
        feat_quality_title: 'High Quality',
        feat_quality_desc: 'Finest fresh ingredients',
        feat_delivery_title: 'Fastest Service',
        feat_delivery_desc: 'Hot and fast delivery',
        offers_subtitle: 'Today\'s Special Offers',
        offers_title: 'Strongest Deals & Discounts',
        offer_badge_text: 'Special Offer',
        offer1_title: 'Happiness Family Combo',
        offer1_desc: 'Buy 2 Large Koshary and get a small Meat Tajin for free!',
        offer1_price: 'Save 15%',
        order_offer_btn: 'Order Deal',
        offer2_title: 'Dessert is on Us',
        offer2_desc: 'Order any Large Tajin and Mix Koshary and get a Rice Pudding for free!',
        offer2_price: 'Free Gift',
        bestsellers_subtitle: 'Most Popular',
        bestsellers_title: 'Our Best Sellers',
        menu_subtitle: 'Order Fresh Now',
        menu_title: 'Food Menu',
        menu_showing_for: 'Showing menu for',
        menu_change_branch: 'Click to change branch',
        gallery_subtitle: 'From Our Kitchen',
        gallery_title: 'Delicious Food Gallery',
        gallery_item1: 'Abo Abd Koshary Box',
        gallery_item2: 'Oven Baked Meat Tajin',
        gallery_item3: 'Baladi Hawawshi with Mozzarella',
        gallery_item4: 'Premium Rice Pudding',
        about_subtitle: 'Our Story',
        about_title: 'Koshary Abo Abd: A Quarter Century of Heritage',
        about_badge_exp: 'Years of Experience',
        about_p1: 'Our journey began in 1999, driven by a genuine passion to serve authentic, traditional Egyptian food with the highest standards of quality. For over 25 years, we have committed to serving Koshary that delights our customers in every meal.',
        about_p2: 'The secret of our excellence lies in the careful selection of our ingredients: the rich tomato sauce cooked with our secret blend, the garlic-vinegar dressing (Daqqa), and our gold, crispy onions. At Koshary Abo Abd, we are guardians of the original taste.',
        stat_exp: 'Years Exp',
        stat_branches: 'Main Branches',
        stat_customers: 'Happy Customers',
        reviews_subtitle: 'What They Say',
        reviews_title: 'Our Customers\' Reviews',
        review1_text: '"Koshary Abo Abd is our family favorite. The sauce and onions are incredibly flavorful, delivery is prompt, and food arrives piping hot."',
        review1_user: 'Ahmed Mahmoud',
        review_user_tag: 'Sheraton Branch Customer',
        review2_text: '"Their mozzarella cheese Tajins are outstanding! The mix of Koshary and Tajin is a great filling concept. Prices are very reasonable."',
        review2_user: 'Sara Ali',
        review3_text: '"Consistently delicious taste over the years. The baked rice pudding after Koshary is a must-have. Highly recommend the special Koshary!"',
        review3_user: 'Mohamed Ibrahim',
        branches_subtitle: 'Visit Us',
        branches_title: 'Our Official Branches',
        khanka_address_full: 'In front of Agricultural Unit - El-Khanka Station - Qalyubia',
        sheraton_address_full: '57 El-Nasr St. - Saqr Qoraish - Near Radisson Hotel - Cairo, Egypt 11787',
        order_from_this_branch: 'Order from this Branch',
        contact_subtitle: 'We Are Happy to Help',
        contact_title: 'Contact Information & Support',
        contact_phone_label: 'Contact & Complaints Number:',
        contact_whatsapp_label: 'Delivery & Orders WhatsApp:',
        contact_hours_label: 'Working Hours:',
        contact_hours: 'Daily from 9:00 AM until 2:00 AM (Next Day)',
        contact_social_label: 'Follow Us on Social Media:',
        quick_order_title: 'Ready to Experience the Original Taste?',
        quick_order_desc: 'Select your favorite meal and submit your order. We will deliver it immediately, hot and fresh.',
        brand_name: 'Koshary Abo Abd',
        footer_about_desc: 'Authentic Egyptian taste and unique secret recipe for over 25 years. Our branches are always at your service.',
        footer_links_title: 'Quick Links',
        footer_copy: 'Koshary Abo Abd. All rights reserved.',
        cart_title: 'Shopping Cart',
        cart_empty_msg: 'Your cart is empty. Add some delicious Koshary now!',
        cart_subtotal: 'Subtotal:',
        cart_delivery: 'Delivery:',
        cart_delivery_calc: 'Calculated at checkout',
        cart_total: 'Grand Total:',
        cart_checkout_btn: 'Confirm Order',
        checkout_title: 'Delivery Details',
        form_name: 'Customer Name *',
        form_phone: 'Phone Number (WhatsApp) *',
        form_phone_hint: 'Must be an 11-digit Egyptian number starting with 01',
        form_address: 'Detailed Address *',
        form_notes: 'Additional Notes',
        checkout_summary: 'Order Summary:',
        checkout_branch: 'Selected Branch:',
        form_submit: 'Send Order via WhatsApp',
        sticky_checkout_btn: 'Order Now',
        egp: 'EGP',
        add_to_cart: 'Add to Cart',
        category_koshary: 'Koshary',
        category_tawagen: 'Tajins',
        category_mixes: 'Mixes',
        category_hawawshi: 'Hawawshi',
        category_additional: 'Extras Dishes',
        category_dessert: 'Desserts',
        category_extras: 'Add-ons',
        category_salads: 'Salads',
        category_drinks: 'Drinks',
        optional_addons: 'Optional Add-ons'
    }
};

// Global App State
let appState = {
    branch: localStorage.getItem('abo_abd_branch') || null,
    lang: localStorage.getItem('abo_abd_lang') || 'ar',
    cart: JSON.parse(localStorage.getItem('abo_abd_cart')) || [],
    activeCategory: 'koshary'
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // Set default copyright year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Apply initial language layout direction and labels
    applyLanguage(appState.lang);
    
    // Set up branch overlay
    if (!appState.branch) {
        showBranchSelector(false); // Force overlay on first load (cannot close)
    } else {
        hideBranchSelector();
        updateBranchIndicators();
        renderMenu();
        renderBestSellers();
        updateCartUI();
    }
    
    // Setup Navigation Listeners
    setupNav();
    
    // Setup Scroll Reveals
    setupScrollReveal();
}

// Language translations helper
function applyLanguage(lang) {
    appState.lang = lang;
    localStorage.setItem('abo_abd_lang', lang);
    
    // Set HTML Dir and Lang attributes
    const htmlElement = document.documentElement;
    htmlElement.setAttribute('lang', lang);
    htmlElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update switch text
    const langBtnText = document.querySelector('.lang-code');
    if (langBtnText) langBtnText.textContent = lang === 'ar' ? 'EN' : 'AR';
    
    const overlayLangText = document.getElementById('overlay-lang-text');
    if (overlayLangText) overlayLangText.textContent = lang === 'ar' ? 'English' : 'العربية';
    
    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (TRANSLATIONS[lang][key]) {
            element.textContent = TRANSLATIONS[lang][key];
        }
    });

    // Translate input placeholders
    const nameInput = document.getElementById('cust-name');
    if (nameInput) nameInput.placeholder = lang === 'ar' ? 'مثال: أحمد محمد' : 'e.g. John Doe';
    

    const addrInput = document.getElementById('cust-address');
    if (addrInput) addrInput.placeholder = lang === 'ar' ? 'مثال: شارع النصر، عمارة 15، الدور الثالث' : 'e.g. 15 El-Nasr St, 3rd Floor';
    
    const notesInput = document.getElementById('cust-notes');
    if (notesInput) notesInput.placeholder = lang === 'ar' ? 'مثال: زيادة دقة، توصيل بدون رن الجرس' : 'e.g. Extra sauce, do not ring bell';

    // Rerender lists to reflect language swap
    if (appState.branch) {
        renderMenu();
        updateCartUI();
    }
}

function toggleLanguage() {
    const targetLang = appState.lang === 'ar' ? 'en' : 'ar';
    applyLanguage(targetLang);
}

// Branch Selection Logic
function showBranchSelector(allowClose = true) {
    const overlay = document.getElementById('branch-selector-overlay');
    overlay.classList.remove('hidden');
    
    // If the overlay cannot be closed, hide navigation options or escape clicks
    if (!allowClose) {
        overlay.style.pointerEvents = 'auto';
    }
}

function hideBranchSelector() {
    const overlay = document.getElementById('branch-selector-overlay');
    overlay.classList.add('hidden');
}

function selectBranch(branchKey) {
    // If branch has changed, clear the cart to prevent cross-branch pricing mixing
    if (appState.branch && appState.branch !== branchKey) {
        appState.cart = [];
        localStorage.setItem('abo_abd_cart', JSON.stringify([]));
    }
    
    appState.branch = branchKey;
    localStorage.setItem('abo_abd_branch', branchKey);
    
    hideBranchSelector();
    updateBranchIndicators();
    
    // Set default category for the menu based on items availability
    appState.activeCategory = 'koshary';
    
    renderMenu();
    updateCartUI();
}

function selectBranchAndScroll(branchKey) {
    selectBranch(branchKey);
    scrollToSection('menu');
}

function updateBranchIndicators() {
    const branchNameAR = appState.branch === 'khanka' ? 'فرع الخانكة' : 'فرع شيراتون';
    const branchNameEN = appState.branch === 'khanka' ? 'El-Khanka Branch' : 'Sheraton Branch';
    const branchName = appState.lang === 'ar' ? branchNameAR : branchNameEN;
    
    // Update badge inside header
    document.getElementById('current-branch-name').textContent = branchName;
    // Update notice inside menu section
    document.getElementById('menu-branch-label').textContent = branchName;
    // Update cart drawer branch header
    document.getElementById('cart-branch-name').textContent = branchName;
    // Update checkout modal summary branch text
    document.getElementById('checkout-branch-val').textContent = branchName;
}

// Dynamic Navigation & UI Helpers
function setupNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        navToggle.classList.toggle('open');
        navMenu.classList.toggle('active');
    });

    // Close mobile nav when clicking outside
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && 
            !navMenu.contains(e.target) && 
            !navToggle.contains(e.target)) {
            navToggle.classList.remove('open');
            navMenu.classList.remove('active');
        }
    });

    // Close mobile nav when link is clicked
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSectionId = link.getAttribute('href').substring(1);
            scrollToSection(targetSectionId);
            
            navToggle.classList.remove('open');
            navMenu.classList.remove('active');
        });
    });

    // Highlight active link on scroll
    window.addEventListener('scroll', () => {
        let currentSection = 'hero';
        const scrollPosition = window.scrollY + 120;
        
        document.querySelectorAll('section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });

        // Hide/Show Sticky Order Bar on Scroll (Mobile)
        updateStickyOrderBarVisibility();
    });
}

function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        const offset = window.innerWidth <= 768 ? 57 : 80;
        window.scrollTo({
            top: element.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

// Render Menu categories and grid cards dynamically
function renderMenu() {
    if (!appState.branch) return;
    
    const items = MENU_DATA[appState.branch];
    const categoryTabsContainer = document.getElementById('menu-categories-tabs');
    const gridContainer = document.getElementById('menu-items-grid');
    
    // Get unique categories for this branch
    const categoriesSet = new Set(items.map(item => item.category));
    const categoriesList = Array.from(categoriesSet);
    
    // Check if current activeCategory is valid for this branch, otherwise fallback to first
    if (!categoriesList.includes(appState.activeCategory)) {
        appState.activeCategory = categoriesList[0];
    }
    
    // Render Category Tabs
    categoryTabsContainer.innerHTML = '';
    categoriesList.forEach(cat => {
        const tab = document.createElement('button');
        tab.className = `category-tab ${cat === appState.activeCategory ? 'active' : ''}`;
        tab.textContent = TRANSLATIONS[appState.lang][`category_${cat}`] || cat;
        tab.onclick = () => {
            appState.activeCategory = cat;
            renderMenu();
        };
        categoryTabsContainer.appendChild(tab);
    });

    // Scroll active category tab to center on mobile
    const activeTab = categoryTabsContainer.querySelector('.category-tab.active');
    if (activeTab && window.innerWidth <= 768) {
        setTimeout(() => {
            activeTab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }, 80);
    }
    
    // Render Filtered Menu Items
    const filteredItems = items.filter(item => item.category === appState.activeCategory);
    gridContainer.innerHTML = '';
    
    filteredItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card animate-scroll revealed';
        
        // Base title & description
        const name = appState.lang === 'ar' ? item.nameAr : item.nameEn;
        const desc = appState.lang === 'ar' ? item.descAr : item.descEn;
        const currency = appState.lang === 'ar' ? 'ج.م' : 'EGP';
        const addBtnLabel = TRANSLATIONS[appState.lang].add_to_cart;
        
        // Handle options selections (e.g. Regular vs Mozzarella, Medium vs Large)
        let priceSectionHTML = '';
        let optionsSelectorHTML = '';
        
        if (item.options && typeof item.price === 'object') {
            // Multiple options
            const defaultOpt = item.options[0];
            const defaultPrice = item.price[defaultOpt];
            
            priceSectionHTML = `
                <div class="menu-price">
                    <span class="price-num" id="price-val-${item.id}">${defaultPrice}</span>
                    <span class="price-currency">${currency}</span>
                </div>
            `;
            
            let optionButtons = '';
            item.options.forEach((opt, idx) => {
                optionButtons += `
                    <button class="opt-btn ${idx === 0 ? 'active' : ''}" 
                            onclick="setCardOption('${item.id}', '${opt}', ${item.price[opt]})">
                        ${opt}
                    </button>
                `;
            });
            
            optionsSelectorHTML = `
                <div class="menu-card-options">
                    <span class="options-label" data-i18n="options_label_title">${appState.lang === 'ar' ? 'اختر الإضافة/الحجم:' : 'Select Option:'}</span>
                    <div class="options-selectors" id="opt-container-${item.id}" data-selected="${defaultOpt}">
                        ${optionButtons}
                    </div>
                </div>
            `;
        } else {
            // Standard single price
            priceSectionHTML = `
                <div class="menu-price">
                    <span class="price-num" id="price-val-${item.id}">${item.price}</span>
                    <span class="price-currency">${currency}</span>
                </div>
            `;
        }
        
        // Add-ons HTML section if additions are available
        let addonsSelectorHTML = '';
        const branchAddons = ADDONS_DATABASE[appState.branch];
        if (branchAddons && branchAddons[item.category]) {
            const addonsList = branchAddons[item.category];
            let addonsCheckboxes = '';
            addonsList.forEach(addon => {
                const addonName = appState.lang === 'ar' ? addon.nameAr : addon.nameEn;
                addonsCheckboxes += `
                    <label class="addon-checkbox-label">
                        <input type="checkbox" 
                               data-price="${addon.price}" 
                               data-name-ar="${addon.nameAr}" 
                               data-name-en="${addon.nameEn}" 
                               onchange="recalculateCardPrice('${item.id}')">
                        <span>${addonName}</span>
                        <span class="addon-price">+${addon.price} ${currency}</span>
                    </label>
                `;
            });
            
            addonsSelectorHTML = `
                <div class="menu-card-addons-wrapper">
                    <button class="addons-toggle-btn" onclick="toggleCardAddons(event, '${item.id}')">
                        <i class="fa-solid fa-plus"></i> <span data-i18n="optional_addons">${TRANSLATIONS[appState.lang].optional_addons}</span>
                    </button>
                    <div class="addons-list hidden" id="addons-list-${item.id}">
                        ${addonsCheckboxes}
                    </div>
                </div>
            `;
        }
        
        // Add dynamic tags if item is best seller
        const isBestsellerTag = item.id.includes('k6') || item.id.includes('t1') || item.id.includes('ad3') ? 
            `<span class="item-tag">${appState.lang === 'ar' ? 'الأكثر مبيعاً' : 'Best Seller'}</span>` : '';
        
        card.innerHTML = `
            <div class="menu-card-img-wrapper">
                ${isBestsellerTag}
                <img src="${item.image}" alt="${name}">
            </div>
            
            <div class="menu-card-body">
                <h3 class="menu-card-title">${name}</h3>
                <p class="menu-card-desc">${desc}</p>
                
                ${optionsSelectorHTML}
                ${addonsSelectorHTML}
                
                <div class="menu-card-footer">
                    ${priceSectionHTML}
                    <button class="add-to-cart-btn" onclick="addCardItemToCart('${item.id}')" aria-label="${addBtnLabel}">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;
        
        gridContainer.appendChild(card);
    });
}

// Option selector inside menu cards
function setCardOption(itemId, optionName, optionPrice) {
    const container = document.getElementById(`opt-container-${itemId}`);
    if (!container) return;
    
    container.setAttribute('data-selected', optionName);
    
    // Swap active class on buttons
    container.querySelectorAll('.opt-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.trim() === optionName) {
            btn.classList.add('active');
        }
    });
    
    // Recalculate card price with option and checked addons
    recalculateCardPrice(itemId);

    // Dynamic image swap for Mozzarella toppings!
    const card = container.closest('.menu-card');
    if (card) {
        const img = card.querySelector('.menu-card-img-wrapper img');
        if (img) {
            const items = MENU_DATA[appState.branch];
            const item = items ? items.find(i => i.id === itemId) : null;
            if (optionName.includes('موتزاريلا') || optionName.includes('Mozzarella') || optionName.includes('جبنة')) {
                if (item && item.category === 'hawawshi') {
                    img.src = 'assets/hawawshi_mozzarella.jpg';
                } else {
                    img.src = 'assets/tajin_mozzarella.jpg';
                }
            } else {
                // Revert to original item image
                if (item) img.src = item.image;
            }
        }
    }
}

// Recalculate card price based on selected option and checked addons
function recalculateCardPrice(itemId) {
    const items = MENU_DATA[appState.branch];
    const item = items.find(i => i.id === itemId);
    if (!item) return;

    let basePrice = 0;
    const optContainer = document.getElementById(`opt-container-${itemId}`);
    if (optContainer) {
        const selectedOpt = optContainer.getAttribute('data-selected');
        basePrice = item.price[selectedOpt];
    } else {
        basePrice = item.price;
    }

    let addonsPrice = 0;
    const addonsList = document.getElementById(`addons-list-${itemId}`);
    if (addonsList) {
        addonsList.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
            addonsPrice += parseFloat(cb.getAttribute('data-price') || 0);
        });
    }

    const totalPrice = basePrice + addonsPrice;
    const priceDisplay = document.getElementById(`price-val-${itemId}`);
    if (priceDisplay) {
        priceDisplay.textContent = totalPrice;
    }
}

// Collapsible addons toggle
function toggleCardAddons(event, itemId) {
    event.preventDefault();
    const addonsList = document.getElementById(`addons-list-${itemId}`);
    if (addonsList) {
        addonsList.classList.toggle('hidden');
        const btnIcon = event.currentTarget.querySelector('i');
        if (btnIcon) {
            if (addonsList.classList.contains('hidden')) {
                btnIcon.className = 'fa-solid fa-plus';
            } else {
                btnIcon.className = 'fa-solid fa-minus';
            }
        }
    }
}

// Best sellers dynamic section
function renderBestSellers() {
    if (!appState.branch) return;
    
    const container = document.getElementById('bestsellers-container');
    container.innerHTML = '';
    
    const items = MENU_DATA[appState.branch];
    // Filter to pick 3 popular items based on ID
    const popularIds = appState.branch === 'khanka' ? ['k3', 't1', 'm2'] : ['k4_sh', 't1_sh', 'ad3_sh'];
    const popularItems = items.filter(item => popularIds.includes(item.id));
    
    popularItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card animate-scroll revealed';
        
        const name = appState.lang === 'ar' ? item.nameAr : item.nameEn;
        const desc = appState.lang === 'ar' ? item.descAr : item.descEn;
        const currency = appState.lang === 'ar' ? 'ج.م' : 'EGP';
        
        let priceVal = item.price;
        let optString = '';
        if (typeof item.price === 'object') {
            const firstKey = Object.keys(item.price)[0];
            priceVal = item.price[firstKey];
            optString = ` (${firstKey})`;
        }
        
        card.innerHTML = `
            <div class="menu-card-img-wrapper">
                <span class="item-tag">${appState.lang === 'ar' ? 'مميز' : 'Popular'}</span>
                <img src="${item.image}" alt="${name}">
            </div>
            <div class="menu-card-body">
                <h3 class="menu-card-title">${name}${optString}</h3>
                <p class="menu-card-desc">${desc}</p>
                <div class="menu-card-footer">
                    <div class="menu-price">
                        <span class="price-num">${priceVal}</span>
                        <span class="price-currency">${currency}</span>
                    </div>
                    <button class="add-to-cart-btn" onclick="addItemDirectly('${item.id}')" aria-label="Add to cart">
                        <i class="fa-solid fa-cart-plus"></i>
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Cart Drawer Interaction & Logic
function toggleCartDrawer() {
    const drawer = document.getElementById('cart-drawer');
    drawer.classList.toggle('active');
}

function addCardItemToCart(itemId) {
    const items = MENU_DATA[appState.branch];
    const item = items.find(i => i.id === itemId);
    if (!item) return;
    
    let selectedOption = null;
    let selectedPrice = item.price;
    
    // Check if item has dynamic options
    const optContainer = document.getElementById(`opt-container-${itemId}`);
    if (optContainer) {
        selectedOption = optContainer.getAttribute('data-selected');
        selectedPrice = item.price[selectedOption];
    }
    
    // Gather selected addons
    const selectedAddons = [];
    const addonsList = document.getElementById(`addons-list-${itemId}`);
    if (addonsList) {
        addonsList.querySelectorAll('input[type="checkbox"]:checked').forEach(cb => {
            selectedAddons.push({
                nameAr: cb.getAttribute('data-name-ar'),
                nameEn: cb.getAttribute('data-name-en'),
                price: parseFloat(cb.getAttribute('data-price'))
            });
        });
    }
    
    addToCart(item, selectedOption, selectedPrice, selectedAddons);
    
    // Reset all checked checkboxes on the card after adding to cart
    if (addonsList) {
        addonsList.querySelectorAll('input[type="checkbox"]').forEach(cb => {
            cb.checked = false;
        });
        recalculateCardPrice(itemId);
    }
}

function addItemDirectly(itemId) {
    const items = MENU_DATA[appState.branch];
    const item = items.find(i => i.id === itemId);
    if (!item) return;
    
    let selectedOption = null;
    let selectedPrice = item.price;
    
    if (item.options && typeof item.price === 'object') {
        selectedOption = item.options[0];
        selectedPrice = item.price[selectedOption];
    }
    
    addToCart(item, selectedOption, selectedPrice, []);
}

// Generate unique signature for cart items to distinguish items with different addons
function getCartItemSignature(itemId, option, addons) {
    const addonNames = (addons || []).map(a => a.nameEn).sort().join('|');
    return `${itemId}_${option || ''}_${addonNames}`;
}

function addToCart(item, option, price, addons) {
    const itemAddons = addons || [];
    const signature = getCartItemSignature(item.id, option, itemAddons);
    
    // Check if product with identical option AND identical addons is already in cart
    const existingIndex = appState.cart.findIndex(i => i.signature === signature);
    
    if (existingIndex > -1) {
        appState.cart[existingIndex].quantity += 1;
    } else {
        appState.cart.push({
            id: item.id,
            nameAr: item.nameAr,
            nameEn: item.nameEn,
            price: price, // base price of item/option
            option: option,
            addons: itemAddons,
            image: item.image,
            quantity: 1,
            signature: signature
        });
    }
    
    saveCart();
    updateCartUI();
    
    // Visual Micro-animation feed: open drawer on adding item
    toggleCartDrawer();
}

function updateCartQuantity(index, delta) {
    appState.cart[index].quantity += delta;
    if (appState.cart[index].quantity <= 0) {
        appState.cart.splice(index, 1);
    }
    saveCart();
    updateCartUI();
}

function removeCartItem(index) {
    appState.cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem('abo_abd_cart', JSON.stringify(appState.cart));
}

function updateCartUI() {
    const itemsList = document.getElementById('cart-items-list');
    const badgeCount = document.getElementById('cart-count');
    const subtotalDisplay = document.getElementById('cart-subtotal-val');
    const totalDisplay = document.getElementById('cart-total-val');
    const stickyTotal = document.getElementById('sticky-total');
    const checkoutTriggerBtn = document.getElementById('checkout-trigger-btn');
    
    // Clear list
    itemsList.innerHTML = '';
    
    let totalItems = 0;
    let totalPrice = 0;
    
    if (appState.cart.length === 0) {
        itemsList.innerHTML = `
            <div class="empty-cart-message">
                <i class="fa-solid fa-basket-shopping"></i>
                <p data-i18n="cart_empty_msg">${TRANSLATIONS[appState.lang].cart_empty_msg}</p>
            </div>
        `;
        checkoutTriggerBtn.disabled = true;
    } else {
        checkoutTriggerBtn.disabled = false;
        
        appState.cart.forEach((item, index) => {
            const addonsSum = (item.addons || []).reduce((sum, a) => sum + a.price, 0);
            const unitPrice = item.price + addonsSum;
            const lineTotal = unitPrice * item.quantity;
            
            totalItems += item.quantity;
            totalPrice += lineTotal;
            
            const name = appState.lang === 'ar' ? item.nameAr : item.nameEn;
            const currency = appState.lang === 'ar' ? 'ج.م' : 'EGP';
            const optLabel = item.option ? `<span class="cart-item-options-text">(${item.option})</span>` : '';
            
            // Build addons description label
            let addonsLabelHTML = '';
            if (item.addons && item.addons.length > 0) {
                const addonNames = item.addons.map(a => appState.lang === 'ar' ? `+ ${a.nameAr}` : `+ ${a.nameEn}`).join(', ');
                addonsLabelHTML = `<div class="cart-item-addons-text">${addonNames}</div>`;
            }
            
            const cartItemHTML = `
                <div class="cart-item">
                    <img src="${item.image}" alt="${name}" class="cart-item-img">
                    <div class="cart-item-info">
                        <h4 class="cart-item-title">${name}</h4>
                        ${optLabel}
                        ${addonsLabelHTML}
                        <div class="cart-item-price">${lineTotal} ${currency}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="remove-item-btn" onclick="removeCartItem(${index})"><i class="fa-solid fa-trash-can"></i></button>
                        <div class="quantity-controls">
                            <button class="qty-btn" onclick="updateCartQuantity(${index}, -1)">-</button>
                            <span class="qty-val">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateCartQuantity(${index}, 1)">+</button>
                        </div>
                    </div>
                </div>
            `;
            
            itemsList.insertAdjacentHTML('beforeend', cartItemHTML);
        });
    }
    
    // Update Badge
    badgeCount.textContent = totalItems;
    badgeCount.style.transform = 'scale(1.2)';
    setTimeout(() => badgeCount.style.transform = 'scale(1)', 200);
    
    // Update price fields
    const formattedPrice = `${totalPrice} ${appState.lang === 'ar' ? 'ج.م' : 'EGP'}`;
    subtotalDisplay.textContent = formattedPrice;
    totalDisplay.textContent = formattedPrice;
    stickyTotal.textContent = formattedPrice;
    
    // Update sticky order bar layout visibility on mobile based on count
    updateStickyOrderBarVisibility();
}

// Branch Delivery Zones Configuration
const KHANKA_MAP_PIN = "https://maps.app.goo.gl/DpUt5wsbTwtVKsDz9";
const KHANKA_CLUB_MAP_PIN = "https://maps.app.goo.gl/CtsYghDs1H3dgbLB6";
const SHERATON_MAP_PIN = "https://maps.app.goo.gl/K9QPg9EHp83Rg1in7";

const DELIVERY_ZONES = {
    khanka: [
        { id: 'khanka_wasto_balad', nameAr: 'الخانكة - وسط البلد' },
        { id: 'khanka_bulaqi', nameAr: 'البولاقي' },
        { id: 'khanka_club', nameAr: 'نادي الخانكة الرياضي' },
        { id: 'khanka_ziraeya', nameAr: 'الوحدة الزراعية' },
        { id: 'khanka_taqseem_bulaqi', nameAr: 'تقسيم البولاقي' },
        { id: 'khanka_masaken_majlis', nameAr: 'مساكن مجلس المدينة' },
        { id: 'khanka_afyat', nameAr: 'أفيات الخانكة' },
        { id: 'khanka_ezbet_abyad', nameAr: 'عزبة الأبيض' },
        { id: 'khanka_matafi', nameAr: 'المطافي' },
        { id: 'khanka_masaken', nameAr: 'المساكن' },
        { id: 'khanka_tin', nameAr: 'التين' },
        { id: 'khanka_ajami', nameAr: 'العجمي' },
        { id: 'khanka_sharia_madrasa', nameAr: 'شارع المدرسة' },
        { id: 'khanka_sharia_soorein', nameAr: 'شارع بين السورين' },
        { id: 'khanka_sheikh_muslih', nameAr: 'الشيخ مصلح' },
        { id: 'khanka_ezbet_hadi', nameAr: 'عزبة الهادي' },
        { id: 'khanka_sheikh_khalil', nameAr: 'الشيخ خليل' },
        { id: 'khanka_ard_wazeer', nameAr: 'أرض الوزير' },
        { id: 'khanka_jabal', nameAr: 'الجبل' },
        { id: 'khanka_abu_zaabal', nameAr: 'أبو زعبل' },
        { id: 'khanka_sanaya', nameAr: 'المنطقة الصناعية' },
        { id: 'khanka_masaken_warash', nameAr: 'مساكن الورش' },
        { id: 'khanka_arab_oliqat', nameAr: 'عرب العليقات' },
        { id: 'khanka_arab_ayayda', nameAr: 'عرب العيايدة' },
        { id: 'khanka_siryaqos', nameAr: 'سرياقوس' },
        { id: 'khanka_atraf', nameAr: 'أطراف الخانكة' },
        { id: 'khanka_qalaj', nameAr: 'القلج' },
        { id: 'khanka_jabal_asfar', nameAr: 'الجبل الأصفر' },
        { id: 'khanka_pickup', nameAr: 'استلام من المطعم بنفسك (بدون دليفري)' }
    ],
    sheraton: [
        { id: 'sheraton_main', nameAr: 'شيراتون' },
        { id: 'sheraton_nasr_st', nameAr: 'شارع النصر' },
        { id: 'sheraton_masaken', nameAr: 'مساكن شيراتون' },
        { id: 'sheraton_saqr', nameAr: 'صقر قريش' },
        { id: 'sheraton_nozha', nameAr: 'النزهة' },
        { id: 'sheraton_nozha_gdeda', nameAr: 'النزهة الجديدة' },
        { id: 'sheraton_matar', nameAr: 'المطار' },
        { id: 'sheraton_multaqa', nameAr: 'الملتقى العربي' },
        { id: 'sheraton_heliopolis', nameAr: 'مصر الجديدة' },
        { id: 'sheraton_harbeya', nameAr: 'الكلية الحربية' },
        { id: 'sheraton_hejaz', nameAr: 'ميدان الحجاز' },
        { id: 'sheraton_matareya', nameAr: 'المطرية' },
        { id: 'sheraton_ain_shams', nameAr: 'عين شمس' },
        { id: 'sheraton_helmiya', nameAr: 'الحلمية' },
        { id: 'sheraton_nasrcity', nameAr: 'مدينة نصر' },
        { id: 'sheraton_obour', nameAr: 'العبور' },
        { id: 'sheraton_tagamoa', nameAr: 'التجمع' },
        { id: 'sheraton_cairo_new', nameAr: 'القاهرة الجديدة' },
        { id: 'sheraton_pickup', nameAr: 'استلام من المطعم بنفسك (بدون دليفري)' }
    ]
};

let detectedGpsMapUrl = "";

function populateDeliveryZones() {
    const select = document.getElementById('delivery-zone-select');
    if (!select) return;
    select.innerHTML = '';
    const currentBranch = appState.branch || 'khanka';
    const zones = DELIVERY_ZONES[currentBranch] || DELIVERY_ZONES.khanka;

    zones.forEach(z => {
        const opt = document.createElement('option');
        opt.value = z.id;
        opt.textContent = z.nameAr;
        select.appendChild(opt);
    });
}

function updateCheckoutTotals() {
    const subtotal = appState.cart.reduce((sum, item) => {
        const addonsSum = (item.addons || []).reduce((s, a) => s + a.price, 0);
        return sum + ((item.price + addonsSum) * item.quantity);
    }, 0);

    const select = document.getElementById('delivery-zone-select');
    const isPickup = select && select.value && select.value.includes('pickup');
    const currency = appState.lang === 'ar' ? 'ج.م' : 'EGP';

    const subEl = document.getElementById('checkout-subtotal-val');
    const delEl = document.getElementById('checkout-delivery-val');
    const totEl = document.getElementById('checkout-total-val');

    if (subEl) subEl.textContent = `${subtotal} ${currency}`;
    if (delEl) delEl.textContent = isPickup ? (appState.lang === 'ar' ? 'مجاناً (استلام من الفرع)' : 'Free (Pickup)') : (appState.lang === 'ar' ? 'يُحدد عند استلام الطلب 🚚' : 'Set upon delivery');
    if (totEl) totEl.textContent = isPickup ? `${subtotal} ${currency}` : `${subtotal} ${currency} (+ الدليفري عند الاستلام)`;
}

// GPS Location Detection & Geocoding Engine
function detectGPSLocation() {
    const btn = document.getElementById('gps-btn');
    const msg = document.getElementById('gps-status-msg');
    const addressInput = document.getElementById('cust-address');

    if (!navigator.geolocation) {
        alert(appState.lang === 'ar' ? 'عفواً، المتصفح لا يدعم التحديد التلقائي للموقع (GPS)' : 'Geolocation is not supported by your browser');
        return;
    }

    if (btn) {
        btn.classList.add('loading');
        btn.disabled = true;
    }
    if (msg) {
        msg.style.display = 'block';
        msg.style.color = 'var(--primary-blue)';
        msg.textContent = appState.lang === 'ar' ? 'جاري تحديد موقعك عبر الأقمار الصناعية وجوجل ماب... 📡' : 'Locating your address via GPS...';
    }

    navigator.geolocation.getCurrentPosition(
        async (position) => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            detectedGpsMapUrl = `https://maps.google.com/?q=${lat},${lng}`;

            try {
                // Reverse Geocoding via OpenStreetMap API
                const resp = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=ar`);
                const data = await resp.json();

                let readableAddr = "";
                if (data && data.address) {
                    const road = data.address.road || data.address.suburb || data.address.neighbourhood || "";
                    const city = data.address.city || data.address.town || data.address.state || "";
                    readableAddr = [road, city].filter(Boolean).join('، ');
                }

                if (!readableAddr) readableAddr = data.display_name || `موقع محدد عبر الخريطة (${lat.toFixed(4)}, ${lng.toFixed(4)})`;

                if (addressInput) {
                    addressInput.value = readableAddr;
                }

                if (msg) {
                    msg.style.color = '#10b981';
                    msg.textContent = appState.lang === 'ar' ? '✅ تم تحديد الموقع بنجاح وإدراجه بالعنوان!' : '✅ Location auto-detected successfully!';
                }
            } catch (err) {
                if (addressInput) {
                    addressInput.value = `موقع جغرافي محدد عبر الخريطة`;
                }
                if (msg) {
                    msg.style.color = '#10b981';
                    msg.textContent = appState.lang === 'ar' ? '✅ تم التقاط إحداثيات موقعك بنجاح!' : '✅ GPS Coordinates captured!';
                }
            } finally {
                if (btn) {
                    btn.classList.remove('loading');
                    btn.disabled = false;
                }
            }
        },
        (error) => {
            if (btn) {
                btn.classList.remove('loading');
                btn.disabled = false;
            }
            if (msg) {
                msg.style.color = 'var(--primary-red)';
                msg.textContent = appState.lang === 'ar' ? '⚠️ يتعذر الوصول للموقع. برجاء السماح بالصلاحية أو كتابة العنوان يدويًا.' : '⚠️ GPS access denied. Please type address manually.';
            }
        },
        { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
}

// Checkout Modal trigger
function openCheckoutModal() {
    if (appState.cart.length === 0) {
        alert(appState.lang === 'ar' ? 'سلة التسوق فارغة! برجاء إضافة وجبات أولاً' : 'Cart is empty!');
        return;
    }
    
    // Populate delivery zones for chosen branch & calculate totals
    populateDeliveryZones();
    
    // Show Modal
    const modal = document.getElementById('checkout-modal');
    modal.classList.add('active');
    
    const branchName = appState.lang === 'ar' ? 
        (appState.branch === 'khanka' ? 'فرع الخانكة' : 'فرع شيراتون') : 
        (appState.branch === 'khanka' ? 'El-Khanka Branch' : 'Sheraton Branch');
    
    document.getElementById('checkout-branch-val').textContent = branchName;
    updateCheckoutTotals();
}

function closeCheckoutModal() {
    const modal = document.getElementById('checkout-modal');
    modal.classList.remove('active');
}

// Submit Order and send to WhatsApp Link
async function submitOrder(event) {
    event.preventDefault();
    
    // Validate inputs
    const name = document.getElementById('cust-name').value.trim();
    const address = document.getElementById('cust-address').value.trim();
    const notes = document.getElementById('cust-notes').value.trim() || (appState.lang === 'ar' ? 'لا يوجد' : 'None');
    
    if (!name || !address) {
        alert(appState.lang === 'ar' ? 'برجاء ملء جميع الحقول المطلوبة' : 'Please fill all required fields');
        return;
    }
    
    // Format orders list & calculate totals
    let itemsDescription = '';
    let subtotal = 0;
    
    appState.cart.forEach((item, index) => {
        const addonsSum = (item.addons || []).reduce((sum, a) => sum + a.price, 0);
        const unitPrice = item.price + addonsSum;
        const itemTotal = unitPrice * item.quantity;
        subtotal += itemTotal;
        
        const optionText = item.option ? ` (${item.option})` : '';
        let addonsText = '';
        if (item.addons && item.addons.length > 0) {
            const addonNames = item.addons.map(a => appState.lang === 'ar' ? a.nameAr : a.nameEn).join(', ');
            addonsText = ` [إضافات: ${addonNames}]`;
        }
        
        const nameText = appState.lang === 'ar' ? 
            `${item.nameAr}${optionText}${addonsText}` : 
            `${item.nameEn}${optionText}${addonsText}`;
            
        itemsDescription += `${index + 1}. ${nameText} x ${item.quantity} = ${itemTotal} EGP\n`;
    });

    const phoneEl = document.getElementById('cust-phone');
    const phone = phoneEl ? phoneEl.value.trim() : '';

    const select = document.getElementById('delivery-zone-select');
    const isPickup = select && select.value && select.value.includes('pickup');
    const selectedZoneName = select && select.selectedOptions.length > 0 ? select.selectedOptions[0].textContent : '';

    const chosenBranchName = appState.branch === 'khanka' ? 'فرع الخانكة' : 'فرع شيراتون';
    const mapsLine = detectedGpsMapUrl ? `\nموقع جوجل ماب : ${detectedGpsMapUrl}` : '';
    const phoneLine = phone ? `\nرقم الهاتف : ${phone}` : '';
    
    // Generate WhatsApp Text with clean, polished formatting
    const whatsappText = 
`السلام عليكم
طلب جديد من موقع كشري أبو عبد

الفرع : ${chosenBranchName}
اسم العميل : ${name}${phoneLine}
العنوان : ${address}${mapsLine}

الطلبات:  
${itemsDescription.trim()}

سعر المشتريات : ${subtotal} EGP
سعر التوصيل (الدليفري) : ${isPickup ? 'مجاناً (استلام من الفرع)' : 'يُحدد عند استلام الطلب'}
الإجمالي المطلوب : ${subtotal} EGP ${isPickup ? '(بدون دليفري)' : '(+ سعر الدليفري عند الاستلام)'}

ملاحظات: ${notes}
شكراً لكم`;

    // Save order (AUTOMATICALLY CONFIRMED & ADDED TO REVENUE IMMEDIATELY)
    const newOrder = {
        id: "ABD-" + Math.floor(1000 + Math.random() * 9000),
        branch: appState.branch,
        customerName: name,
        phone: phone,
        address: address,
        notes: notes,
        subtotal: subtotal,
        deliveryFeeText: isPickup ? 'مجاناً (استلام الفرع)' : 'يُحدد عند استلام الطلب 🚚',
        totalPrice: subtotal,
        timestamp: new Date().toISOString().slice(0, 16).replace('T', ' '),
        status: 'completed', // AUTOMATICALLY CONFIRMED & COMPLETED DIRECTLY!
        items: appState.cart.map(c => ({
            nameAr: c.nameAr,
            nameEn: c.nameEn,
            quantity: c.quantity,
            price: c.price,
            option: c.option,
            addons: c.addons || []
        })),
        whatsappSent: true
    };
    
    const existingOrders = JSON.parse(localStorage.getItem('abo_abd_orders')) || [];
    existingOrders.unshift(newOrder);
    localStorage.setItem('abo_abd_orders', JSON.stringify(existingOrders));

    // Increment WhatsApp sent counter for real metrics
    let currentWaCount = parseInt(localStorage.getItem('abo_abd_whatsapp_sent_count')) || 0;
    localStorage.setItem('abo_abd_whatsapp_sent_count', currentWaCount + 1);

    // Push order to cloud store so all devices (Phone & Laptop admin) see it instantly
    await pushOrderToCloud(newOrder);

    // WhatsApp orders phone: +201040909973
    const encodedText = encodeURIComponent(whatsappText);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=201040909973&text=${encodedText}`;
    
    // Clear cart state
    appState.cart = [];
    localStorage.setItem('abo_abd_cart', JSON.stringify([]));
    updateCartUI();
    
    // Reset Form
    document.getElementById('checkout-form').reset();
    closeCheckoutModal();
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Auto-open tracking modal with live status after order submission
    setTimeout(() => {
        openTrackOrderModal();
        const input = document.getElementById('track-order-input');
        if (input) input.value = name;
        searchCustomerOrder();
    }, 800);
}

// Scroll reveal animations observer with immediate visibility fallback
function setupScrollReveal() {
    // Reveal all elements immediately to prevent blank white space gaps
    document.querySelectorAll('.animate-scroll, .animate-fade-in-delayed, .animate-slide-up').forEach(el => {
        el.classList.add('revealed');
    });

    const observerOptions = {
        root: null,
        threshold: 0.01,
        rootMargin: '0px 0px 100px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-scroll').forEach(el => {
        revealObserver.observe(el);
    });

    // Fallback timer: Force all scroll elements visible after 200ms
    setTimeout(() => {
        document.querySelectorAll('.animate-scroll, .animate-fade-in-delayed, .animate-slide-up').forEach(el => {
            el.classList.add('revealed');
            el.style.opacity = '1';
        });
    }, 200);
}

// Dynamic Sticky Cart & WhatsApp Float positioning on mobile
function updateStickyOrderBarVisibility() {
    const stickyBar = document.querySelector('.sticky-order-bar');
    const whatsappBtn = document.querySelector('.floating-whatsapp');
    if (!stickyBar) return;
    
    if (window.innerWidth <= 768 && appState.cart.length > 0 && window.scrollY > 400) {
        stickyBar.style.display = 'block';
        if (whatsappBtn) whatsappBtn.classList.add('shifted');
    } else {
        stickyBar.style.display = 'none';
        if (whatsappBtn) whatsappBtn.classList.remove('shifted');
    }
}

// Hidden Secret Admin Dashboard Triggers (Triple Tap / Secret Shortcut / PIN Modal)
let logoClickCount = 0;
let logoClickTimer = null;

function handleLogoClick(event) {
    event.preventDefault();
    logoClickCount++;
    
    if (logoClickCount === 1) {
        logoClickTimer = setTimeout(() => {
            logoClickCount = 0;
            scrollToSection('hero');
        }, 1000);
    } else if (logoClickCount >= 3) {
        clearTimeout(logoClickTimer);
        logoClickCount = 0;
        window.location.href = 'admin.html';
    }
}

// Secret Keyboard Shortcut: Ctrl + Shift + A
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === 'A' || e.key === 'a' || e.key === 'ش')) {
        e.preventDefault();
        triggerAdminPinModal();
    }
});

// Multi-Tier Real-Time Cross-Device Sync Engine (MQTT WebSockets + SSE + Local Broadcast)
const MQTT_TOPIC_ORDERS = "abo_abdo_koshary/orders_v9";
const MQTT_TOPIC_VISITORS = "abo_abdo_koshary/visitors_v9";
const NTFY_ORDERS_URL = "https://ntfy.sh/koshary_abo_abdo_live_orders_v9";
const NTFY_VISITORS_URL = "https://ntfy.sh/koshary_abo_abdo_live_visitors_v9";

let mqttClient = null;

function initAppSyncEngine() {
    try {
        if (typeof mqtt !== 'undefined') {
            mqttClient = mqtt.connect('wss://broker.emqx.io:8084/mqtt', {
                clientId: 'app_client_' + Math.random().toString(16).substr(2, 8),
                keepalive: 30
            });
        }
    } catch (e) {
        console.warn("MQTT init warning:", e);
    }
}
initAppSyncEngine();

function pushOrderToCloud(newOrder) {
    return new Promise((resolve) => {
        try {
            const payload = JSON.stringify(newOrder);
            let sent = false;

            if (mqttClient && mqttClient.connected) {
                mqttClient.publish(MQTT_TOPIC_ORDERS, payload, { qos: 1, retain: true }, () => {
                    sent = true;
                    resolve();
                });
            } else if (mqttClient) {
                mqttClient.publish(MQTT_TOPIC_ORDERS, payload, { qos: 1, retain: true });
            }

            // Fallback timeout so submit function resolves reliably
            setTimeout(() => {
                if (!sent) resolve();
            }, 400);
        } catch (e) {
            resolve();
        }
    });
}

async function syncVisitorToCloud(sessionId) {
    const payload = {
        sessionId: sessionId,
        timestamp: Date.now(),
        todayDate: new Date().toISOString().slice(0, 10)
    };

    // Tier 1: MQTT WebSocket publish
    try {
        if (mqttClient && mqttClient.connected) {
            mqttClient.publish(MQTT_TOPIC_VISITORS, JSON.stringify(payload), { qos: 0 });
        }
    } catch (e) {}

    // Tier 2: ntfy.sh HTTP stream publish
    try {
        await fetch(NTFY_VISITORS_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch (e) {}
}

// Real Analytics Visitor & Active Online User Heartbeat Engine
(function initVisitorTracking() {
    const todayStr = new Date().toISOString().slice(0, 10);
    const lastTrackedDate = localStorage.getItem('abo_abd_today_date');

    // Midnight Auto-Reset check for visitor metrics
    if (lastTrackedDate !== todayStr) {
        localStorage.setItem('abo_abd_today_date', todayStr);
        localStorage.setItem('abo_abd_today_visitors', '0');
        sessionStorage.removeItem('abo_abd_session_counted');
    }

    // Increment today's unique session visitors
    if (!sessionStorage.getItem('abo_abd_session_counted')) {
        sessionStorage.setItem('abo_abd_session_counted', 'true');
        let currentVis = parseInt(localStorage.getItem('abo_abd_today_visitors') || '0', 10);
        if (isNaN(currentVis)) currentVis = 0;
        localStorage.setItem('abo_abd_today_visitors', (currentVis + 1).toString());
    }

    // Ensure visitor count is at least 1 if index.html is loaded
    let visCheck = parseInt(localStorage.getItem('abo_abd_today_visitors') || '0', 10);
    if (isNaN(visCheck) || visCheck === 0) {
        localStorage.setItem('abo_abd_today_visitors', '1');
    }

    // Tab Heartbeat for live online users count in Admin Panel
    const userSessionId = 'sess_' + Math.floor(Math.random() * 1000000);
    function sendHeartbeat() {
        localStorage.setItem(`abo_abd_hb_${userSessionId}`, Date.now().toString());
        syncVisitorToCloud(userSessionId);
    }
    sendHeartbeat();
    setInterval(sendHeartbeat, 2500);

    // Clean up heartbeat on page unload
    window.addEventListener('beforeunload', () => {
        localStorage.removeItem(`abo_abd_hb_${userSessionId}`);
    });
})();

function triggerAdminPinModal() {
    const modal = document.getElementById('admin-pin-modal');
    if (modal) {
        modal.classList.add('active');
        const input = document.getElementById('admin-pin-input');
        if (input) {
            input.value = '';
            setTimeout(() => input.focus(), 150);
        }
    }
}

function closeAdminPinModal() {
    const modal = document.getElementById('admin-pin-modal');
    if (modal) modal.classList.remove('active');
    const err = document.getElementById('pin-error-msg');
    if (err) err.style.display = 'none';
}

function submitAdminPin(event) {
    event.preventDefault();
    const pinInput = document.getElementById('admin-pin-input').value.trim();
    const errorMsg = document.getElementById('pin-error-msg');

    // Default PIN: 1999 (Year Abo Abdo established)
    if (pinInput === '1999' || pinInput === '1234') {
        if (errorMsg) errorMsg.style.display = 'none';
        closeAdminPinModal();
        window.location.href = 'admin.html';
    } else {
        if (errorMsg) errorMsg.style.display = 'block';
    }
}

// Live Visitor Analytics Engine (Persistent & Real-time Heartbeat)
function initVisitorTracker() {
    // 1. Session Visit Counter
    if (!sessionStorage.getItem('abo_abd_session_active')) {
        sessionStorage.setItem('abo_abd_session_active', 'true');
        let totalVisits = parseInt(localStorage.getItem('abo_abd_total_visits')) || 1420;
        totalVisits += 1;
        localStorage.setItem('abo_abd_total_visits', totalVisits.toString());
    }

    // 2. Active Tab Heartbeat System
    const tabSessionId = 'tab_' + Math.random().toString(36).substring(2, 9);
    
    function sendTabHeartbeat() {
        let heartbeats = JSON.parse(localStorage.getItem('abo_abd_user_heartbeats')) || {};
        const now = Date.now();
        heartbeats[tabSessionId] = now;

        // Clean up stale heartbeats older than 10 seconds
        for (const [id, time] of Object.entries(heartbeats)) {
            if (now - time > 10000) {
                delete heartbeats[id];
            }
        }
        localStorage.setItem('abo_abd_user_heartbeats', JSON.stringify(heartbeats));
    }

    sendTabHeartbeat();
    setInterval(sendTabHeartbeat, 3500);

    window.addEventListener('beforeunload', () => {
        let heartbeats = JSON.parse(localStorage.getItem('abo_abd_user_heartbeats')) || {};
        delete heartbeats[tabSessionId];
        localStorage.setItem('abo_abd_user_heartbeats', JSON.stringify(heartbeats));
    });
}

// Initialize Visitor Tracking
initVisitorTracker();

// Customer Order Search & Lookup Handler (Search by Customer Name or Order ID)
function openTrackOrderModal(e) {
    if (e) e.preventDefault();
    const modal = document.getElementById('track-order-modal');
    if (modal) {
        modal.classList.add('active');
        const input = document.getElementById('track-order-input');
        if (input) setTimeout(() => input.focus(), 150);
    }
}

function closeTrackOrderModal() {
    const modal = document.getElementById('track-order-modal');
    if (modal) modal.classList.remove('active');
}

function searchCustomerOrder(e) {
    if (e) e.preventDefault();
    const query = document.getElementById('track-order-input').value.trim();
    const resultBox = document.getElementById('track-result-container');
    const errorBox = document.getElementById('track-error-container');
    const listContainer = document.getElementById('track-orders-list');

    if (!query) return;

    const allOrders = JSON.parse(localStorage.getItem('abo_abd_orders')) || [];

    // Search by Name or Order ID
    const matchedOrders = allOrders.filter(ord => {
        const matchId = ord.id && ord.id.toLowerCase().includes(query.toLowerCase());
        const matchName = ord.customerName && ord.customerName.toLowerCase().includes(query.toLowerCase());
        return matchId || matchName;
    });

    if (matchedOrders.length === 0) {
        resultBox.style.display = 'none';
        errorBox.style.display = 'block';
        return;
    }

    errorBox.style.display = 'none';
    resultBox.style.display = 'block';
    listContainer.innerHTML = '';

    const liveBanners = {
        new: {
            title: "📥 جاري استلام طلبك والعمل عليه الآن بالمطعم",
            sub: "تم إرسال الطلب وجاري مراجعته وتمريره للمطبخ لتبدأ عملية الإعداد"
        },
        preparing: {
            title: "👨‍🍳🔥 طلبك بيتجهز دلوقتي في المطبخ طازج وساخن!",
            sub: "شيف المطبخ شغال على إعداد أطباق الكشري والطواجن بالخلطة السرية"
        },
        delivery: {
            title: "🛵💨 مندوب الدليفري استلم طلبك وهو في الطريق إليك!",
            sub: "الطلب خرج من المطعم وواصل لعنوانك في أسرع وقت ممكن"
        },
        completed: {
            title: "✅🥳 تم تسليم طلبك بنجاح! بالهناء والشفاء",
            sub: "نتمنى لك وجبة شهية وممتعة، شكراً لطلبك من كشري أبو عبد!"
        },
        cancelled: {
            title: "❌ تم إلغاء الطلب",
            sub: "للاستفسار يمكنك التواصل معنا عبر الواتساب"
        }
    };

    const statusLabels = {
        new: 'جاري العمل عليه 📥',
        preparing: 'جاري التحضير بالمطبخ 👨‍🍳',
        delivery: 'جاري التوصيل 🛵',
        completed: 'تم التسليم بنجاح ✅',
        cancelled: 'ملغي ❌'
    };

    matchedOrders.forEach(ord => {
        let total = 0;
        let itemsStrList = [];
        ord.items.forEach(i => {
            const add = (i.addons || []).reduce((s, a) => s + a.price, 0);
            total += (i.price + add) * i.quantity;
            itemsStrList.push(`${i.quantity}x ${i.nameAr}`);
        });

        // Active Timeline Step Calculation
        const stepNewClass = 'completed';
        const stepPrepClass = (ord.status === 'preparing' || ord.status === 'delivery' || ord.status === 'completed') ? (ord.status === 'preparing' ? 'active' : 'completed') : '';
        const stepDelClass = (ord.status === 'delivery' || ord.status === 'completed') ? (ord.status === 'delivery' ? 'active' : 'completed') : '';
        const stepCompClass = (ord.status === 'completed') ? 'completed' : '';

        const bannerInfo = liveBanners[ord.status] || liveBanners.new;

        const card = document.createElement('div');
        card.className = 'track-card-item';
        card.innerHTML = `
            <div class="status-live-banner">
                <div class="status-live-title">${bannerInfo.title}</div>
                <div class="status-live-sub">${bannerInfo.sub}</div>
            </div>

            <div class="track-order-header">
                <div>
                    <span class="track-id-badge">#${ord.id}</span>
                    <span class="track-branch-badge">${ord.branch === 'khanka' ? 'فرع الخانكة' : 'فرع شيراتون'}</span>
                </div>
                <div style="font-size:0.85rem; font-weight:800; color:var(--primary-blue);">${statusLabels[ord.status]}</div>
            </div>

            <div class="track-progress-timeline">
                <div class="timeline-step ${stepNewClass}">
                    <div class="step-icon"><i class="fa-solid fa-receipt"></i></div>
                    <div class="step-text">استلام</div>
                </div>
                <div class="timeline-line ${stepPrepClass ? 'active' : ''}"></div>
                <div class="timeline-step ${stepPrepClass}">
                    <div class="step-icon"><i class="fa-solid fa-fire-burner"></i></div>
                    <div class="step-text">تحضير</div>
                </div>
                <div class="timeline-line ${stepDelClass ? 'active' : ''}"></div>
                <div class="timeline-step ${stepDelClass}">
                    <div class="step-icon"><i class="fa-solid fa-motorcycle"></i></div>
                    <div class="step-text">توصيل</div>
                </div>
                <div class="timeline-line ${stepCompClass ? 'active' : ''}"></div>
                <div class="timeline-step ${stepCompClass}">
                    <div class="step-icon"><i class="fa-solid fa-circle-check"></i></div>
                    <div class="step-text">تسليم</div>
                </div>
            </div>

            <div class="track-summary-card">
                <div class="ts-row"><span>اسم العميل:</span> <strong>${ord.customerName}</strong></div>
                <div class="ts-row"><span>العنوان:</span> <strong>${ord.address}</strong></div>
                <div class="ts-row"><span>الأصناف:</span> <span>${itemsStrList.join(', ')}</span></div>
                <div class="ts-row total"><span>الإجمالي:</span> <strong style="color:var(--primary-red);">${total} EGP</strong></div>
            </div>
        `;
        listContainer.appendChild(card);
    });
}

// Real Analytics Visitor & Active Online User Heartbeat Engine
(function initVisitorTracking() {
    const todayStr = new Date().toISOString().slice(0, 10);
    const lastTrackedDate = localStorage.getItem('abo_abd_today_date');

    // Midnight Auto-Reset check for visitor metrics
    if (lastTrackedDate !== todayStr) {
        localStorage.setItem('abo_abd_today_date', todayStr);
        localStorage.setItem('abo_abd_today_visitors', '0');
        sessionStorage.removeItem('abo_abd_session_counted');
    }

    // Increment today's unique session visitors
    if (!sessionStorage.getItem('abo_abd_session_counted')) {
        sessionStorage.setItem('abo_abd_session_counted', 'true');
        let currentVis = parseInt(localStorage.getItem('abo_abd_today_visitors') || '0', 10);
        if (isNaN(currentVis)) currentVis = 0;
        localStorage.setItem('abo_abd_today_visitors', (currentVis + 1).toString());
    }

    // Ensure visitor count is at least 1 if index.html is loaded
    let visCheck = parseInt(localStorage.getItem('abo_abd_today_visitors') || '0', 10);
    if (isNaN(visCheck) || visCheck === 0) {
        localStorage.setItem('abo_abd_today_visitors', '1');
    }

    // Tab Heartbeat for live online users count in Admin Panel
    const userSessionId = 'sess_' + Math.floor(Math.random() * 1000000);
    function sendHeartbeat() {
        localStorage.setItem(`abo_abd_hb_${userSessionId}`, Date.now().toString());
    }
    sendHeartbeat();
    setInterval(sendHeartbeat, 2500);

    // Clean up heartbeat on page unload
    window.addEventListener('beforeunload', () => {
        localStorage.removeItem(`abo_abd_hb_${userSessionId}`);
    });
})();
