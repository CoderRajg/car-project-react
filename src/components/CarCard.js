import React from "react";
import "./carCard.css";

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <div className="des-contain">
        <div className="car-name">{car.name}</div>
        <div className="tag-div">
          <div className="tag">2021</div>
        </div>
      </div>
        <div className="features">
          <div>
            <p>4 People</p>
            <p>Diesel</p>
          </div>
          <div>
            <p>6.1km/1km</p>
            <p>Automatic</p>
          </div>
        </div>
        <hr />
        <div className="bottom-card">
          <p>$440/month</p>
          <button button-bottom>rent Now</button>
        </div>
    </div>
  );
};

export default CarCard;
