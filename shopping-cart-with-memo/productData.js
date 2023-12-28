export const productData = generateProducts();

function generateProducts() {
  const arr = [];

  for (let index = 0; index < 10000; index++) {
    arr.push({
      id: Math.random(),
      details: {
        shortName: "PS4",
        longName: "Playstation 4",
        description: "A games console!",
      },
      pricing: {
        price: 40000,
        tax_rate: 1.2,
        max_discount: 10,
      },
      shipping: { weight: 5, volume: 5, requiresSpecialHandle: false },
    });
  }

  return arr;
}

export const productData2 = [
  {
    id: 1,
    details: {
      shortName: "PS4",
      longName: "Playstation 4",
      description: "A games console!",
    },
    pricing: {
      price: 40000,
      tax_rate: 1.2,
      max_discount: 10,
    },
    shipping: { weight: 5, volume: 5, requiresSpecialHandle: false },
  },
  {
    id: 2,
    details: {
      shortName: "XBOX",
      longName: "XBOX 360 Console",
      description: "Another games console!",
    },
    pricing: {
      price: 30000,
      tax_rate: 1.2,
      max_discount: 10,
    },
    shipping: { weight: 4, volume: 6, requiresSpecialHandle: false },
  },
  {
    id: 3,
    details: {
      shortName: "Wii",
      longName: "Nintendo Wii",
      description: "An old games console!",
    },
    pricing: {
      price: 10000,
      tax_rate: 1,
      max_discount: 30,
    },
    shipping: { weight: 2, volume: 3, requiresSpecialHandle: false },
  },
];
