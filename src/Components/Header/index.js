import React from "react";
import "./style.css";

function Header(props){
  return (
    <div className="header">
      <span className="title">Superhero Clicky Game</span>
      <span className="message">{props.message}</span>
      <span className="scores">Score: {props.score} | Highscore: {props.highscore}
      </span>
    </div>
  )
  };

export default Header;