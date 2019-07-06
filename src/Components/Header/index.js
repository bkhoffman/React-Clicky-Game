import React from "react";
import "./style.css";

const Header = (props) => {
  return (
    <div className="header">
      <div className="title">Superhero Clicky Game</div>
      <div className="scores">Score: {props.score} | Highscore: {props.score}
      </div>
    </div>
  )
  };

export default Header;