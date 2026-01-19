import React from "react";

const promotions = [
  { id:1, title:"Скидка 50%", description:"На все товары до конца месяца!" },
  { id:2, title:"Купи 2 - получи 1", description:"Выбери товары из акции и получи бонус!" },
  { id:3, title:"Бесплатная доставка", description:"При заказе от 3000 ₽" },
];

const Promotions = () => {
  return (
    <div className="promotions">
      {promotions.map(promo => (
        <div key={promo.id} className="promo-card">
          <h3>{promo.title}</h3>
          <p>{promo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Promotions;