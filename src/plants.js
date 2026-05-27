export const plants = [
  // Air Purifying Plants
  {
    id: 1,
    name: "Spider Plant",
    category: "Air Purifying Plants",
    description:
      "One of the most adaptable houseplants. Effectively removes toxins like formaldehyde and xylene from the air. Perfect for beginners.",
    price: 12.99,
    image: "https://picsum.photos/seed/spiderplant/400/300",
  },
  {
    id: 2,
    name: "Peace Lily",
    category: "Air Purifying Plants",
    description:
      "Elegant white blooms and glossy leaves. Removes benzene, formaldehyde, and ammonia. Thrives in low light conditions.",
    price: 14.99,
    image: "https://picsum.photos/seed/peacelily/400/300",
  },
  {
    id: 3,
    name: "Boston Fern",
    category: "Air Purifying Plants",
    description:
      "Lush, feathery fronds that act as a natural humidifier. Excellent at removing formaldehyde and acts as a natural air purifier.",
    price: 16.99,
    image: "https://picsum.photos/seed/bostonfern/400/300",
  },
  {
    id: 4,
    name: "Aloe Vera",
    category: "Air Purifying Plants",
    description:
      "A dual-purpose plant: purifies air of benzene and formaldehyde while its gel soothes burns and skin irritations.",
    price: 9.99,
    image: "https://picsum.photos/seed/aloevera/400/300",
  },
  {
    id: 5,
    name: "Snake Plant",
    category: "Air Purifying Plants",
    description:
      "Nearly indestructible and highly efficient. Converts CO₂ to oxygen at night, making it ideal for bedrooms.",
    price: 11.99,
    image: "https://picsum.photos/seed/snakeplant/400/300",
  },
  {
    id: 6,
    name: "Bamboo Palm",
    category: "Air Purifying Plants",
    description:
      "A top-ranked air purifier that adds tropical elegance. Filters formaldehyde, benzene, and trichloroethylene effectively.",
    price: 19.99,
    image: "https://picsum.photos/seed/bamboopalm/400/300",
  },

  // Aromatic Fragrant Plants
  {
    id: 7,
    name: "Lavender",
    category: "Aromatic Fragrant Plants",
    description:
      "Famous for its calming scent, lavender reduces anxiety and promotes restful sleep. Beautiful purple blooms.",
    price: 13.99,
    image: "https://picsum.photos/seed/lavender/400/300",
  },
  {
    id: 8,
    name: "Jasmine",
    category: "Aromatic Fragrant Plants",
    description:
      "Intensely sweet fragrance that fills any room. Known to reduce stress and improve mood with its heavenly scent.",
    price: 15.99,
    image: "https://picsum.photos/seed/jasmine/400/300",
  },
  {
    id: 9,
    name: "Rosemary",
    category: "Aromatic Fragrant Plants",
    description:
      "A versatile herb with a refreshing piney aroma. Boosts memory and concentration while adding flavor to your cooking.",
    price: 10.99,
    image: "https://picsum.photos/seed/rosemary/400/300",
  },
  {
    id: 10,
    name: "Mint",
    category: "Aromatic Fragrant Plants",
    description:
      "Invigorating cool scent that refreshes any space. Easy to grow and great for teas, cooking, and natural freshening.",
    price: 8.99,
    image: "https://picsum.photos/seed/mintplant/400/300",
  },
  {
    id: 11,
    name: "Gardenia",
    category: "Aromatic Fragrant Plants",
    description:
      "Produces stunningly fragrant white blooms. Its rich, sweet perfume makes it one of the most beloved houseplants.",
    price: 17.99,
    image: "https://picsum.photos/seed/gardenia/400/300",
  },
  {
    id: 12,
    name: "Eucalyptus",
    category: "Aromatic Fragrant Plants",
    description:
      "Clean, medicinal aroma that clears the sinuses and purifies the air. Beautiful silvery-green foliage.",
    price: 14.99,
    image: "https://picsum.photos/seed/eucalyptus/400/300",
  },

  // Insect Repellent Plants
  {
    id: 13,
    name: "Citronella",
    category: "Insect Repellent Plants",
    description:
      "Nature's mosquito repellent. The strong lemony scent keeps mosquitoes, flies, and other insects at bay naturally.",
    price: 12.99,
    image: "https://picsum.photos/seed/citronella/400/300",
  },
  {
    id: 14,
    name: "Catnip",
    category: "Insect Repellent Plants",
    description:
      "Proven to repel mosquitoes more effectively than DEET. A safe, natural pest deterrent for your home and garden.",
    price: 9.99,
    image: "https://picsum.photos/seed/catnip/400/300",
  },
  {
    id: 15,
    name: "Marigold",
    category: "Insect Repellent Plants",
    description:
      "Vibrant orange and yellow blooms that repel aphids, mosquitoes, and whiteflies. A beautiful and functional plant.",
    price: 7.99,
    image: "https://picsum.photos/seed/marigold/400/300",
  },
  {
    id: 16,
    name: "Basil",
    category: "Insect Repellent Plants",
    description:
      "Strong aromatic oils repel flies, mosquitoes, and aphids. Also a culinary staple for fresh, flavorful cooking.",
    price: 6.99,
    image: "https://picsum.photos/seed/basilplant/400/300",
  },
  {
    id: 17,
    name: "Lemongrass",
    category: "Insect Repellent Plants",
    description:
      "Contains citronella oil, a natural insect deterrent. Tall, elegant grass with a pleasant lemony fragrance.",
    price: 11.99,
    image: "https://picsum.photos/seed/lemongrass/400/300",
  },
  {
    id: 18,
    name: "Chrysanthemum",
    category: "Insect Repellent Plants",
    description:
      "Contains pyrethrin, a natural insecticide used in many commercial repellents. Beautiful blooms in vivid colors.",
    price: 13.99,
    image: "https://picsum.photos/seed/chrysanthemum/400/300",
  },
];

export const categories = [...new Set(plants.map((p) => p.category))];
