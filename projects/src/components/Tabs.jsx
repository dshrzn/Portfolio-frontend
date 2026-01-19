import React, { useState } from "react";

const categories = ["Новинки", "Популярное", "Скидки"];

const Tabs = ({ onSelect }) => {
  const [active, setActive] = useState(categories[0]);

  return (
    <div className="tabs">
      {categories.map(cat => (
        <button
          key={cat}
          className={active === cat ? "active" : ""}
          onClick={() => { setActive(cat); onSelect(cat); }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default Tabs;