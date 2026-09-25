const regions = [
  {
    id: 'car',
    name: 'CAR',
    fullName: 'Cordillera Administrative Region',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Highland Vegetables',
      'Coffee',
      'Heirloom Rice',
      'Hogs',
      'Commercial Rice',
      'Corn',
      'Cardava Banana',
      'Mango',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/a2d491661c.html',
  },

  {
    id: 'region-1',
    name: 'Region I',
    fullName: 'Ilocos Region',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Rice',
      'Corn',
      'Onion',
      'Mango',
      'Coffee',
      'Peanut',
      'Tomato',
      'Hogs',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/804745dd14.html',
  },

  {
    id: 'region-2',
    name: 'Region II',
    fullName: 'Cagayan Valley',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Rice',
      'Corn',
      'Hogs',
      'Beef Cattle',
      'Banana',
      'Coffee',
      'Mango',
      'Citrus',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/9f0d9e85b7.html',
  },

  {
    id: 'region-3',
    name: 'Region III',
    fullName: 'Central Luzon',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Rice',
      'Corn',
      'Hogs',
      'Mango',
      'Coconut',
      'Ampalaya',
      'Broiler Chicken',
      'Carabao & Carabao-based Products',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/9c22d653d4.html',
  },

  {
    id: 'region-4a',
    name: 'Region IV-A',
    fullName: 'CALABARZON',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Chicken',
      'Swine',
      'Lowland Vegetables',
      'Coconut',
      'Cacao',
      'Coffee',
      'Rice',
      'Yellow Corn',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/e86b589dc3.html',
  },

  {
    id: 'region-4b',
    name: 'Region IV-B',
    fullName: 'MIMAROPA',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Swine',
      'Coconut',
      'Onion',
      'Calamansi',
      'Seaweed',
      'Cashew',
      'Rice',
      'Corn',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/b8ce6424e8.html',
  },

  {
    id: 'region-5',
    name: 'Region V',
    fullName: 'Bicol Region',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Rice',
      'Corn',
      'Swine',
      'Pili',
      'Dairy Cattle',
      'Abaca',
      'Cassava',
      'Cacao',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/f7dc544b9e.html',
  },

  {
    id: 'region-6',
    name: 'Region VI',
    fullName: 'Western Visayas',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Rice',
      'Corn',
      'Oyster',
      'Muscovado',
      'Swine',
      'Seaweeds',
      'Abaca',
      'Mango',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/03591fc5b6.html',
  },

  {
    id: 'region-7',
    name: 'Region VII',
    fullName: 'Central Visayas',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Native Chicken',
      'Swine',
      'Cassava',
      'Cacao',
      'Highland Vegetables',
      'Seaweeds',
      'Rice',
      'Corn',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/ff3128d0fb.html',
  },

  {
    id: 'region-8',
    name: 'Region VIII',
    fullName: 'Eastern Visayas',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Coconut',
      'Cardaba Banana',
      'Seaweeds',
      'Jackfruit',
      'Abaca',
      'Cacao',
      'Rice',
      'Corn',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/16aa3c429b.html',
  },

  {
    id: 'nir',
    name: 'NIR',
    fullName: 'Negros Island Region',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Swine',
      'Cattle',
      'Chicken',
      'Coffee',
      'Sugarcane',
      'Mango',
      'Rice',
      'Corn',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/5bfd5bfa71.html',
  },

  {
    id: 'region-9',
    name: 'Region IX',
    fullName: 'Zamboanga Peninsula',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Rice',
      'Corn',
      'Coconut',
      'Seaweed',
      'Rubber',
      'Swine',
      'Bangus (Milkfish)',
      'Cacao',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/273fe675fb.html',
  },

  {
    id: 'region-10',
    name: 'Region X',
    fullName: 'Northern Mindanao',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Rice',
      'Corn',
      'Coconut',
      'Swine',
      'Cassava',
      'Cattle',
      'Coffee',
      'Abaca',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/f2fa6a0788.html',
  },

  {
    id: 'region-11',
    name: 'Region XI',
    fullName: 'Davao Region',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Cacao',
      'Coconut',
      'Swine',
      'Coffee',
      'Cardaba Banana',
      'Durian',
      'Rice',
      'Corn',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/93f0ef8282.html',
  },

  {
    id: 'region-12',
    name: 'Region XII',
    fullName: 'SOCCSKSARGEN Region',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Rice',
      'Corn',
      'Coconut',
      'Coffee',
      'Rubber',
      'Abaca',
      'Cacao',
      'Tuna',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/f77b363939.html',
  },

  {
    id: 'region-13',
    name: 'Region XIII',
    fullName: 'Caraga',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Rice',
      'Coconut',
      'Coffee',
      'Bangus',
      'Seaweed',
      'Cassava',
      'Cacao',
      'Corn',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/9d026474f5.html',
  },

  {
    id: 'barmm',
    name: 'BARMM',
    fullName: 'Bangsamoro Autonomous Region in Muslim Mindanao',

    information: {
      description: '',
      priorityAreas: [],
    },

    commodities: [
      'Seaweed',
      'Cassava',
      'Coconut',
      'Coffee',
      'Rubber',
      'Abaca',
      'Rice',
      'Corn',
    ],

    investments: [],

    flipbookUrl: 'https://heyzine.com/flip-book/13e9e61cc9.html',
  },
]

export default regions