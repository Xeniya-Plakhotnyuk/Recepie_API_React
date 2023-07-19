import React, { useState } from "react";

function MyRecepieComponent({
  label,
  image,
  calories,
  ingredients,
  time,
  id,
  link,
}) {
  const [visible, setVisible] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const toggleVisibility = () => {
    setVisible(!visible);
    setShowButton(false);
  };

  return (
    <div key={id} className="container">
      <div className="tasty">
        <img className="food_pic" src={image} />
      </div>

      <div className="card_inside">
        <h2>{label}</h2>
      </div>

      <div>
        {showButton && (
          <button className="button_show" onClick={toggleVisibility}>
            SHOW INGRIDIENTS
          </button>
        )}
        {visible && (
          <ul>
            {ingredients.map((item, index) => (
              <li key={index}>⭐️ {item}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="button-32">
        <a href={link} target="_blank" rel="noreferrer">
          WATCH RECEPIE
        </a>
      </div>

      <div>
        <h3>{calories.toFixed()} calories</h3>
      </div>
    </div>
  );
}

export default MyRecepieComponent;
