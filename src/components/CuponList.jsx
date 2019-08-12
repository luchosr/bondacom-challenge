import React from "react";
import "../App.css";
import Card from "./Card";
import Icon from "./Icon";

const CuponList = () => {
  // iconButtonRipple.unbounded = true;
  return (
    <div className="home">
      <h1>Mi Billetera</h1>
      <div className="home-list-container">
        <ul>
          <Card />
          <Card />

          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </div>

      <div className="navigation-bottom">
        <Icon icon="home" label="Home" size="30" />
        <Icon icon="payment" label="Billetera" size="30" />
        <Icon icon="perm_identity" label="Cuenta" size="30" />
        <Icon icon="more_horiz" label="Más" size="30" />
      </div>
    </div>
  );
};
export default CuponList;
