
import React, { Component } from 'react'
import { Buttons } from './Buttons'

const buttonsNames = {
  'Q': 'Heater-1',
  'W': 'Heater-2',
  'E': 'Heater-3',
  'A': 'Heater-4',
  'S': 'Heater-6',
  'D': 'Cev_H2',
  'Z': 'Dsc_Oh',
  'X': 'Kick_n_Hat',
  'C': 'RP4_KICK_1'
}

class Drumbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      power: 'On',
      displayText: '',
      volume: 50
    }
    this.togglePower = this.togglePower.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }


  togglePower() {
    if (this.state.power == 'On') {
      this.setState({ power: 'Off' })
      let buttonObjs = document.getElementsByClassName('drum-pad');
      for (let i = 0; i < buttonObjs.length; i++) {
        buttonObjs[i].disabled = 'true'
      }
    }
    else {
      this.setState({ power: 'On' })
      let buttonObjs = document.getElementsByClassName('drum-pad');
      for (let i = 0; i < buttonObjs.length; i++) {
        buttonObjs[i].disabled = false
      }
    }
  }

  updateVolume(event) {
    this.setState({ volume: Number(event.target.value) });
  }

  // We need to add Event Listerner to window for listening keyboard
  componentDidMount() {
    window.addEventListener('keypress', (event) => {
      if (buttonsNames[event.key.toUpperCase()] && this.state.power === 'On') {
        // console.log("Yes yes sahi hay");
        this.setState({
          displayText: buttonsNames[event.key.toUpperCase()]
        })
        console.log(this.state.displayText);
        console.log(document.getElementById(event.key.toUpperCase()));
        document.getElementById(event.key.toUpperCase()).volume = this.state.volume / 100;
        document.getElementById(event.key.toUpperCase()).play();
      }
    })
  }

  handleButton(event) {
    //  console.log(event.target.value);


    // let beat = new Audio(`../Audio/${buttonsNames[event.target.value]}.mp3`);
    // beat.volume = this.state.volume / 100;
    // beat.play();
    document.getElementById(event.target.value).volume = this.state.volume / 100;
    document.getElementById(event.target.value).play();
    this.setState({
      displayText: buttonsNames[event.target.value]
    })
  }
  render() {
    return (
      <div className='drum-box' id='drum-machine' >
        <Buttons handleButton={this.handleButton} volume={this.state.volume} />
        <div className="controls">
          <div className="power">
            <p className="label-text">Power:</p>
            <button className="power-button" onClick={this.togglePower}>{this.state.power}</button>
          </div>
          <div className="display" id='display' >
            <p className="display-text">{this.state.displayText}</p>
          </div>
          <div className="volume">
            <p className="label-text">Volume: {this.state.volume}%</p>
            <br />
            <input type="range" min="0" max="100" className="volume-slider" value={this.state.volume} onChange={this.updateVolume} />
          </div>
        </div>
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <Drumbox />
    </div>
  )
}

export default App
