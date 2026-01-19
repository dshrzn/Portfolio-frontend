import React, { useState } from "react";
import Modal from "./Modal";

const ProductCard = ({ product }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price} ₽</p>
        <button onClick={() => setShowModal(true)}>Подробнее</button>
      </div>

      {showModal && (
        <Modal product={product} onClose={() => setShowModal(false)} />
      )}
    </>
  );
};

export default ProductCard;