import React from "react";
import "./style.css";

function HeroCard(props) {
  return (
    <div className="card grow" onClick={() => props.clickCheck(props.id)}>
      <img src={props.image} alt={props.name} />
    </div>
  )
}

export default HeroCard;