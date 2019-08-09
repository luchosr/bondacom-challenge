import React from "react";
import "../App.css";

const Card = ({ tag, title, partner, expDate, category, imgUrl }) => {
  return (
    <div className="card-container">
      <div className="card-container-description">
        <h2>0%</h2>
        <h5>Card Title | dos lineas como máximo</h5>
        <div className="partner-text">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOh9BacywpRba8Dz8-dUjyABTIAwNkd8lRajAPZiAMSj4tdd2Hbw"
            alt=""
            className="partner-image"
          />
          <h6> Nombre partner</h6>

          <h6>fecha vencimiento y aca iría el reminder</h6>
        </div>
      </div>
      <div className="card-container-image">
        <img
          src="https://picsum.photos/id/870/100/100?grayscale&blur=2"
          alt=""
        />
      </div>
    </div>
  );
};
export default Card;
