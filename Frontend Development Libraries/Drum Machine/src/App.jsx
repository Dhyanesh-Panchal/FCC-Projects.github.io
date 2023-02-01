
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
      volume: 0
    }
    this.togglePower = this.togglePower.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }


  togglePower() {
    if (this.state.power == 'On')
      this.setState({ power: 'Off' })
    else
      this.setState({ power: 'On' })
  }

  updateVolume(event) {
    this.setState({ volume: event.target.value });
  }

  handleButton(event) {
    console.log(event.target.value);
    this.setState({
      displayText: buttonsNames[event.target.value]
    })
  }
  render() {
    return (
      <div className='drum-box'>
        <Buttons handleButton={this.handleButton} />
        <div className="controls">
          <div className="power">
            <p className="label-text">Power:</p>
            <button className="power-button" onClick={this.togglePower}>{this.state.power}</button>
          </div>
          <div className="display">
            <p className="display-text">{this.state.displayText}</p>
          </div>
          <div className="volume">
            <p className="label-text">Volume:</p>
            <br />
            <input type="range" min="0" max="100" class="volume-slider" value={this.state.volume} onChange={this.updateVolume} />
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
