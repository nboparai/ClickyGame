import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from "./components/wrapper";
import CharCard from "./components/charCard";
import Header from "./components/Header";
import Chars from "./char.json"
import { Button, Modal } from 'react-bootstrap';

function shuffle(arra1) {
  let ctr = arra1.length, temp, index;

// While there are elements in the array
  while (ctr > 0) {
// Pick a random index
      index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
      ctr--;
// And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}

class App extends Component {
  // Set sate
  state = {
    Chars,
    currentScore: 0,
    topScore: 0,
    alreadyClicked: [],
    win: "",
    show: false
  }

  //when a user clicks the image follwing code is run
  handleClick = id => {
    console.log("I was clicked")
    if(!this.state.alreadyClicked.includes(id)){
      this.handleScore();
      this.setState({ alreadyClicked:[...this.state.alreadyClicked, id] })
    }
    else {
      
      this.setState({show: true})
      this.handleReset();
    }
    console.log(this.state);
  }
  handleClose = () => {
    this.setState({show: false})
  }

  handleScore = () => {

    const newScroe = this.state.currentScore + 1;
    this.setState({
      currentScore: newScroe
    });

    if(newScroe >= this.topScore) {
      this.setState({
        topScore: newScroe
      });
    }
    else if (newScroe == 12) {
      this.setState({
        win: "You got it! Let's play again"
      })
    }
    this.handleShuffle();
  }

  handleReset = () => {
    this.setState({
    currentScore: 0,
    topScore: this.state.topScore,
    alreadyClicked: [],
    win: ""

    })

    this.handleShuffle();
  }

  handleShuffle = () => {
    let shuffledChar = shuffle(Chars);
    this.setState({ Chars: shuffledChar});
  }
  render() {
    return (
      <div>
      <Header currentScore = {this.state.currentScore}  topScore = {this.state.topScore} win ={this.state.win}/>
        
    
    <Wrapper>
    

      {this.state.Chars.map(char => (
        <CharCard
          key = {char.id}
          id = {char.id}
          image = {char.image}
          handleClick = {this.handleClick}
        />
      ))
      }
    </Wrapper>
    <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Clicky Game</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <h1>You lose</h1>
           
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
    </div>
    );
  }
}

export default App;
