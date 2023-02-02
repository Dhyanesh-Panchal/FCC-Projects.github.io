import React from 'react'
import audioQ from './Public/Heater-1.mp3';
import audioW from './Public/Heater-2.mp3';
import audioE from './Public/Heater-3.mp3';
import audioA from './Public/Heater-4.mp3';
import audioS from './Public/Heater-6.mp3';
import audioD from './Public/Cev_H2.mp3';
import audioZ from './Public/Dsc_Oh.mp3';
import audioX from './Public/Kick_n_Hat.mp3';
import audioC from './Public/RP4_KICK_1.mp3';

export const Buttons = (props) => {
    return (
        <div className="buttons">
            <button className="drum-pad" onClick={props.handleButton} value="Q" id='Heater-1' >Q <audio src={audioQ} id='Q' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="W" id='Heater-2' >W <audio src={audioW} id='W' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="E" id='Heater-3' >E <audio src={audioE} id='E' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="A" id='Heater-4' >A <audio src={audioA} id='A' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="S" id='Heater-6' >S <audio src={audioS} id='S' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="D" id='Cev_H2' >D <audio src={audioD} id='D' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="Z" id='Dsc_Oh' >Z <audio src={audioZ} id='Z' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="X" id='Kick_n_Hat' >X <audio src={audioX} id='X' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="C" id='RP4_KICK_1' >C <audio src={audioC} id='C' className='clip' volume={props.volume / 100} /></button>
        </div>
    )
}
