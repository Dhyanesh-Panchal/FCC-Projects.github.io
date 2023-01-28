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



let getQuotes = async () => {
  let responce = await fetch('https://type.fit/api/quotes');
  let Quotes = await responce.json();
  return Quotes;
}

class Container extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: '',
      writer: ''
    }
    this.handleNewQuote = this.handleNewQuote.bind(this);

  }

  componentDidMount() {
    getQuotes().then(res => {
      let randomIndx = Math.floor(Math.random() * res.length);
      // console.log(res[randomIndx]);
      this.setState({
        quote: res[randomIndx].text,
        writer: res[randomIndx].author
      })
    });
  }
  handleNewQuote() {
    // console.log("New Quote requested");
    //Changing the color
    let bodyObject = document.getElementById('body');
    let colorindx = Math.floor(Math.random() * (colors.length - 2));
    console.log(colorindx)
    bodyObject.style.setProperty('--current-color', colors[colorindx]);

    // Update Quote
    getQuotes().then(res => {
      let randomIndx = Math.floor(Math.random() * res.length);
      // console.log(res[randomIndx]);
      this.setState({
        quote: res[randomIndx].text,
        writer: res[randomIndx].author
      })
    });
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
