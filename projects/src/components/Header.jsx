import React, { useState } from "react";
import BurgerMenu from "./BurgerMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="logo">JewelryShop</div>
      <nav className="desktop-nav">
        <a href="#home">Главная</a>
        <a href="#products">Товары</a>
        <a href="#contact">Контакты</a>
      </nav>
      <button className="burger" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      {menuOpen && <BurgerMenu onClose={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Header;