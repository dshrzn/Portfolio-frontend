import React from "react";
import ProductCard from "./ProductCard";

const ProductCarousel = ({ products }) => {
  return (
    <div className="product-carousel">
      {products.map(prod => <ProductCard key={prod.id} product={prod} />)}
    </div>
  );
};

export default ProductCarousel;
