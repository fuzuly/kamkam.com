export const CATEGORIES = [
  "all",
  "food",
  "drink",
  "dessert",
  "beauty",
  "health",
  "care",
  "petServices",
  "car",
  "carCare",
  "industry",
] as const;

export const PLACES = [
  {
    id: 1,
    name: "The Artisan Bakery",
    category: "dessert",
    address: "Nişantaşı, Şişli",
    status: "open",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Bakery&backgroundColor=ffffff",
    promotion: "artisanDiscount",
    extraCampaigns: 2
  },
  {
    id: 2,
    name: "Glow & Go Beauty",
    category: "beauty",
    address: "Bağdat Caddesi, Kadıköy",
    status: "open",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Glow&backgroundColor=ffffff",
    promotion: "coffeeGift"
  },
  {
    id: 3,
    name: "AutoFix Premium",
    category: "carCare",
    address: "Atatürk Oto Sanayi, Maslak",
    status: "open",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=AutoFix&backgroundColor=ffffff",
    promotion: "freeCheck",
    extraCampaigns: 1
  },
  {
    id: 4,
    name: "Healthy Paws Vet",
    category: "petServices",
    address: "Cihangir, Beyoğlu",
    status: "open",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Paws&backgroundColor=ffffff",
    promotion: "tenPercentDiscount"
  },
  {
    id: 5,
    name: "FitLife Gym & Spa",
    category: "health",
    address: "Levent, Beşiktaş",
    status: "closed",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=FitLife&backgroundColor=ffffff",
    promotion: "firstMonthDiscount"
  },
  {
    id: 6,
    name: "Elite Car Wash",
    category: "car",
    address: "Ataşehir Bulvarı",
    status: "open",
    image: "https://api.dicebear.com/7.x/shapes/svg?seed=Elite&backgroundColor=ffffff",
    promotion: "vipWashGift",
    extraCampaigns: 3
  }
];

export const FEATURED = [
  {
    id: 1,
    name: "Gourmet Steakhouse",
    category: "food",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800&h=400",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Gourmet&backgroundColor=ffffff",
    promotion: "wineTreat",
    location: "Beşiktaş",
    status: "open",
  },
  {
    id: 2,
    name: "Luxury Spa Resort",
    category: "care",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800&h=400",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Luxury&backgroundColor=ffffff",
    promotion: "weekendDiscount",
    location: "Sapanca",
    status: "open",
  },
  {
    id: 3,
    name: "AutoVision VIP",
    category: "carCare",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=800&h=400",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Auto&backgroundColor=ffffff",
    promotion: "ceramicCoating",
    location: "Maslak",
    status: "open",
  },
  {
    id: 4,
    name: "Brew & Co. Roasters",
    category: "drink",
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800&h=400",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Brew&backgroundColor=ffffff",
    promotion: "secondCoffeeGift",
    location: "Kadıköy",
    status: "open",
  },
  {
    id: 5,
    name: "Pawsitive Pet Spa",
    category: "petServices",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800&h=400",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Pawsitive&backgroundColor=ffffff",
    promotion: "firstGroomingDiscount",
    location: "Cihangir",
    status: "open",
  },
  {
    id: 6,
    name: "Zen Flow Studio",
    category: "health",
    image: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800&h=400",
    avatar: "https://api.dicebear.com/7.x/shapes/svg?seed=Zen&backgroundColor=ffffff",
    promotion: "freeFirstClass",
    location: "Nişantaşı",
    status: "closed",
  }
];
