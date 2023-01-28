import React, { Component } from 'react'
import Buttons from './Buttons.js'
import Quote from './Quote.js'

let colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
]

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: 'This is a quote given by me dfdsf fgfsgsdfg gsdfg dfgsdfgdsfgsdfg sd dsfdfdsfsdfewfsd.',
      writer: 'Dhyanesh Panchal'
    }
    this.handleNewQuote = this.handleNewQuote.bind(this);
  }
  handleNewQuote() {
    console.log("New Quote requested");
    this.setState({
      quote: "This my NEW Quote"
    })
    // $("body").css("background-color", colors[4]);
  }
  render() {
    return (
      <div className='quote-box' id='quote-box'>
        <Quote quote={this.state.quote} writer={this.state.writer} />
        <Buttons handleNewQuote={this.handleNewQuote} state={this.state} />
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

export default App;
