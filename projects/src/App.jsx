import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSlider from "./components/HeroSlider";
import Tabs from "./components/Tabs";
import ProductCarousel from "./components/ProductCarousel";
import Promotions from "./components/Promotions";
import ContactForm from "./components/ContactForm";
import { fetchProducts } from "./api/products";

const App = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("Новинки");

  useEffect(() => {
    fetchProducts(category).then(setProducts);
  }, [category]);

  return (
    <div>
      <Header />
      <HeroSlider />
      <Tabs onSelect={setCategory} />
      <ProductCarousel products={products} />
      <Promotions />
      <ContactForm />
    </div>
  );
};

export default App;