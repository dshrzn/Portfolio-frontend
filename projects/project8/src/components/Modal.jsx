import React from "react";
import "../index.css";

const Modal = ({ product, onClose }) => {
  if (!product) return null;

  // Закрытие при клике на фон
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <p>Цена: {product.price} ₽</p>
        <button onClick={onClose}>Закрыть</button>
      </div>
    </div>
  );
};

export default Modal;