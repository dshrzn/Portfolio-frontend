// Импорт локальных изображений
import product1Img from "../assets/images/product1.jpg";
import product2Img from "../assets/images/product2.jpg";
import product3Img from "../assets/images/product3.jpg";
import product4Img from "../assets/images/product4.jpg";
import product5Img from "../assets/images/product5.jpg";

// Список товаров
export const productsDB = [
  { 
    id: 1, 
    name: "Подвеска", 
    price: 1000, 
    image: product1Img, 
    description: "Серебро", 
    category: "Новинки" 
  },
  { 
    id: 2, 
    name: "Браслет", 
    price: 2000, 
    image: product2Img, 
    description: "Серебро", 
    category: "Популярное" 
  },
  { 
    id: 3, 
    name: "Подвеска", 
    price: 1500, 
    image: product3Img, 
    description: "Серебро", 
    category: "Скидки" 
  },
  { 
    id: 4, 
    name: "Кольцо", 
    price: 1200, 
    image: product4Img, 
    description: "Серебро", 
    category: "Новинки" 
  },
  { 
    id: 5, 
    name: "Серьги", 
    price: 3000, 
    image: product5Img, 
    description: "Серебро", 
    category: "Популярное" 
  }
];

// Функция асинхронной загрузки товаров по категории
export const fetchProducts = (category) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsDB.filter(p => p.category === category));
    }, 500);
  });
};