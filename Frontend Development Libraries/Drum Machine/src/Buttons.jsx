import React from 'react'

export const Buttons = (props) => {
    return (
        <div className="buttons">
            <button className="drum-pad" onClick={props.handleButton} value="Q" id='Heater-1' >Q <audio src='./src/Public/Heater-1.mp3' id='Q' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="W" id='Heater-2' >W <audio src='./src/Public/Heater-2.mp3' id='W' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="E" id='Heater-3' >E <audio src='./src/Public/Heater-3.mp3' id='E' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="A" id='Heater-4' >A <audio src='./src/Public/Heater-4.mp3' id='A' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="S" id='Heater-6' >S <audio src='./src/Public/Heater-6.mp3' id='S' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="D" id='Cev_H2' >D <audio src='./src/Public/Cev_H2.mp3' id='D' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="Z" id='Dsc_Oh' >Z <audio src='./src/Public/Dsc_Oh.mp3' id='Z' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="X" id='Kick_n_Hat' >X <audio src='./src/Public/Kick_n_Hat.mp3' id='X' className='clip' volume={props.volume / 100} /></button>
            <button className="drum-pad" onClick={props.handleButton} value="C" id='RP4_KICK_1' >C <audio src='./src/Public/RP4_KICK_1.mp3' id='C' className='clip' volume={props.volume / 100} /></button>
        </div>
    )
}
