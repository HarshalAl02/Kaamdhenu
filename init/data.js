const information = [
    {
      "name": "Amrit Mahal",
      "origin": "Karnataka",
      "milk_yield": "500-800 litres/year",
      "features": "Grey coat, sharp horns, muscular build",
      "purpose": "Draught power; historically used in military operations",
      "image": "amrut mahal.webp"
    },
    {
      "name": "Khillar",
      "origin": "Maharashtra",
      "milk_yield": "300-500 litres/year",
      "features": "Compact body, long horns, high endurance",
      "purpose": "Draught and agricultural work",
      "image": "khillari.webp"
    },
    {
      "name": "Nagori",
      "origin": "Rajasthan",
      "milk_yield": "600-800 litres/year",
      "features": "Light grey coat, strong limbs, high speed",
      "purpose": "Used for cart pulling and ploughing",
      "image": "nagori.webp"
    },
    {
      "name": "Mewati",
      "origin": "Haryana and Rajasthan",
      "milk_yield": "800-1000 litres/year",
      "features": "White coat, strong legs",
      "purpose": "Dual purpose: milk and draught",
      "image": "mewati.webp"
    },
    {
      "name": "Nimari",
      "origin": "Madhya Pradesh",
      "milk_yield": "600-700 litres/year",
      "features": "Reddish coat, white markings, short stature",
      "purpose": "Draught and light milk production",
      "image": "nimari.webp"
    },
    {
      "name": "Hallikar",
      "origin": "Karnataka",
      "milk_yield": "500-800 litres/year",
      "features": "Grey to dark grey coat, long face",
      "purpose": "Draught; royal breed of Mysore Wodeyars",
      "image": "hallikar.webp"
    },
    {
      "name": "Kangayam",
      "origin": "Tamil Nadu",
      "milk_yield": "600 litres/year",
      "features": "Short horns, grey coat",
      "purpose": "Draught breed famous in Tamil folklore",
      "image": "kangayam.webp"
    },
    {
      "name": "Gir",
      "origin": "Gujarat, India",
      "milk_yield": "12 to 20 liters/day",
      "features": "Long ears, dome-shaped forehead, highly disease-resistant, calm temperament",
      "purpose": "High milk production, contributes to A2 milk market; also revered in religious and cultural contexts",
      "image": "gir.webp"
    },
    {
      "name": "Kherigarh",
      "origin": "Uttar Pradesh",
      "milk_yield": "500-700 litres/year",
      "features": "Long face, light coat",
      "purpose": "Light agricultural tasks",
      "image": "kherigarh.webp"
    },
    {
      "name": "Tharparkar",
      "origin": "Rajasthan",
      "milk_yield": "1500-1800 litres/year",
      "features": "White or light grey, well-developed udder",
      "purpose": "Dual-purpose breed; strong dairy potential",
      "image": "tharparkar.webp"
    },
    {
      "name": "Kankrej",
      "origin": "Gujarat and Rajasthan",
      "milk_yield": "1200-1800 litres/year",
      "features": "Lyre-shaped horns, compact build",
      "purpose": "Milk and bullock use; sacred in many regions",
      "image": "kankrej.webp"
    },
    {
      "name": "Lal Kandhari",
      "origin": "Maharashtra",
      "milk_yield": "500-600 litres/year",
      "features": "Red coat, medium horns",
      "purpose": "Draught and milk",
      "image": "red kandhari.webp"
    },
    {
      "name": "Rathi",
      "origin": "Rajasthan",
      "milk_yield": "2000-3000 litres/year",
      "features": "Brown with white patches, long tail",
      "purpose": "Popular dairy breed of western India",
      "image": "rathi.webp"
    },
    {
      "name": "Kenkatha",
      "origin": "Uttar Pradesh",
      "milk_yield": "400-600 litres/year",
      "features": "Black/grey coat, short horns",
      "purpose": "Draught and hardy nature",
      "image": "kenkatha.webp"
    },
    {
      "name": "Malnad Gidda",
      "origin": "Karnataka",
      "milk_yield": "200-400 litres/year",
      "features": "Short stature, agile body",
      "purpose": "Mythologically revered; used in hilly terrain",
      "image": "malnad gidda.webp"
    },
    {
      "name": "Punganur",
      "origin": "Andhra Pradesh",
      "milk_yield": "600 litres/year",
      "features": "Miniature breed, docile nature",
      "purpose": "Temple cow; revered in rituals",
      "image": "punganur.webp"
    },
    {
      "name": "Bachaur",
      "origin": "Bihar",
      "milk_yield": "500-700 litres/year",
      "features": "Small frame, white coat",
      "purpose": "Draught and rural use",
      "image": "bachaur.webp"
    },
    {
      "name": "Gangatiri",
      "origin": "Eastern UP and Bihar",
      "milk_yield": "1000 litres/year",
      "features": "White coat, good dairy conformation",
      "purpose": "Milk and cart-pulling",
      "image": "gangatiri.webp"
    },
    {
      "name": "Mewati",
      "origin": "Rajasthan",
      "milk_yield": "800-1000 litres/year",
      "features": "White coat, hardy build",
      "purpose": "Dual purpose breed",
      "image": "mewati.webp"
    },
    {
      "name": "Kasaragod Dwarf",
      "origin": "Kerala",
      "milk_yield": "300 litres/year",
      "features": "Dwarf size, low maintenance",
      "purpose": "Organic dairy farming, easy handling",
      "image": "kasargod dwarf (gidda).webp"
    },
    
        {
          "name": "Kherigarh",
          "origin": "Uttar Pradesh",
          "milk_yield": "400-600 litres/year",
          "features": "White to greyish coat, long narrow face",
          "purpose": "Light draught work in agriculture; commonly used in eastern UP",
          "image": "kherigarh.webp"
        },
        {
          "name": "Ponwar",
          "origin": "Uttar Pradesh (Pilibhit)",
          "milk_yield": "400-500 litres/year",
          "features": "Black and white patches, compact and active",
          "purpose": "Draught power in small agricultural operations",
          "image": "ponwar.webp"
        },
        {
          "name": "Siri",
          "origin": "Sikkim and parts of Bhutan",
          "milk_yield": "600-700 litres/year",
          "features": "Medium-sized with hump; tolerant to hilly terrain",
          "purpose": "Used for milk and ploughing in hilly areas",
          "image": "siri.webp"
        },
        {
          "name": "Pullikulam",
          "origin": "Tamil Nadu",
          "milk_yield": "300-400 litres/year",
          "features": "Small, agile, mostly grey; known for aggressive nature",
          "purpose": "Used in Jallikattu festival, socio-cultural significance",
          "image": "pulikulam.webp"
        },
        {
          "name": "Vechur",
          "origin": "Kerala",
          "milk_yield": "400-600 litres/year",
          "features": "Smallest cow breed in the world, low maintenance",
          "purpose": "Dairy farming in small households; religious and ecological importance",
          "image": "vechur.webp"
        },
        {
          "name": "Punganur",
          "origin": "Andhra Pradesh, India",
          "milk_yield": "3 to 5 liters/day",
          "features": "Smallest cattle breed in the world, short stature, white or light grey in color, highly drought-resistant",
          "purpose": "Ideal for small-scale dairy farming, produces A2 milk, known for high-fat content; significant in rural livelihoods and religious value",
          "image": "punganur.webp"
        },
        {
          "name": "Umblachery",
          "origin": "Tamil Nadu (Nagapattinam)",
          "milk_yield": "500-600 litres/year",
          "features": "Grey or dark grey body, short sturdy legs",
          "purpose": "Specialized for wetland paddy cultivation",
          "image": "umbalchery.webp"
        },
        {
          "name": "Dangi",
          "origin": "Maharashtra and Madhya Pradesh",
          "milk_yield": "500-600 litres/year",
          "features": "Red or black with white patches, thick coat for rainfall resistance",
          "purpose": "Special breed for hilly and rainy terrain",
          "image": "dangi.webp"
        },
        {
          "name": "Binjharpuri",
          "origin": "Odisha",
          "milk_yield": "600-700 litres/year",
          "features": "Light grey coat, medium size, agile",
          "purpose": "Draught work; important in tribal communities",
          "image": "binjharpuri.webp"
        }
];

module.exports = { data: information };
      
  