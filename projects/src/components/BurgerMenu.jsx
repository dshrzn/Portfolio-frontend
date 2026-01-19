import React from "react";

const BurgerMenu = ({ onClose }) => {
  return (
    <div className="burger-menu">
      <button onClick={onClose}>×</button>
      <a href="#home" onClick={onClose}>Главная</a>
      <a href="#products" onClick={onClose}>Товары</a>
      <a href="#contact" onClick={onClose}>Контакты</a>
    </div>
  );
};

export default BurgerMenu;