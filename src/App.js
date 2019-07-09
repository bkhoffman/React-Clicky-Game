import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Wrapper from "./Components/Wrapper";
import Header from "./Components/Header";
import HeroCard from "./Components/HeroCard";
import heroes from "./heroes.json";

class App extends Component {

  state = {
    heroes,
    score: 0,
    highscore: 0,
    message: ""
  }

  scoreReset = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function () {
        console.log(this.state.highscore);
      });
    }
    this.state.heroes.forEach(hero => {
      hero.clicked = false;
    });
    this.setState({ score: 0 });
    return true;
  }

  clickCheck = id => {
    const heroClicked = this.state.heroes.filter(card => card.id === id);
    if (!heroClicked[0].clicked) {
      heroClicked[0].clicked = true;
      this.setState({ 
        score: this.state.score + 1, 
        message: "Correct!"}, function () {
        console.log(this.state.score);
      });
      this.state.heroes.sort(() => Math.random() - 0.5)
      return true;
    } else {
      this.setState({
        message: "Incorrect"
      })
      this.scoreReset();
    }
  }

  // Map over this.state.heroes and render a herohero component for each hero object
  render() {
    return (
      //maybe move header out of wrapper
      <Wrapper> 
        <Header  message={this.state.message} score={this.state.score} highscore={this.state.highscore}>Marvel Clicky Game</Header>
        {this.state.heroes.map(hero => (
          <HeroCard
          id={hero.id}
          key={hero.id}
          image={hero.image}
          clickCheck={this.clickCheck}
          />
        ))}
      </Wrapper>
    );
  }

}

export default App;
