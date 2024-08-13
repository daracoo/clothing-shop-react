import product1 from '../src/assets/tshirt1.webp'
import product2 from '../src/assets/tshirt2.jpg'
import product3 from '../src/assets/tshirt3.webp'
import product4 from '../src/assets/pants1.webp'
import product5 from '../src/assets/pants2.webp'
import product6 from '../src/assets/pants3.webp'
import product7 from '../src/assets/socks.webp'


export interface ClothingItem {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }

  export const clothingItems: ClothingItem[] = [
    {
      id: 1,
      name: "Chicago Shirt",
      description: "A comfortable casual shirt perfect for everyday wear.",
      price: 29.99,
      imageUrl: product1,
    },
    {
      id: 2,
      name: "White Shirt",
      description: "A comfortable casual shirt perfect for everyday wear.",
      price: 19.99,
      imageUrl: product2,
    },
    {
        id: 3,
        name: "White W Shirt",
        description: "A comfortable casual shirt perfect for everyday wear.",
        price: 18.99,
        imageUrl: product3,
      },
      {
        id: 4,
        name: "Pants M",
        description: "Classic pants with a modern fit.",
        price: 49.99,
        imageUrl: product4,
      },
      {
        id: 5,
        name: "Pants M",
        description: "Classic pants with a modern fit.",
        price: 29.99,
        imageUrl: product5,
      },
      {
        id: 6,
        name: "Pants W",
        description: "Classic pants with a modern fit.",
        price: 49.99,
        imageUrl: product6,
      },
      {
        id: 7,
        name: "Socks",
        description: "100% Cotton Socks for everyday wear.",
        price: 9.99,
        imageUrl: product7,
      },

];
  
  