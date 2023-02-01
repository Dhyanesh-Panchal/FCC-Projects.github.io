import React from 'react'

export const Buttons = (props) => {
    return (
        <div className="buttons">
            <button className="music-button" onClick={props.handleButton} value="Q" >Q</button>
            <button className="music-button" onClick={props.handleButton} value="W" >W</button>
            <button className="music-button" onClick={props.handleButton} value="E" >E</button>
            <button className="music-button" onClick={props.handleButton} value="A" >A</button>
            <button className="music-button" onClick={props.handleButton} value="S" >S</button>
            <button className="music-button" onClick={props.handleButton} value="D" >D</button>
            <button className="music-button" onClick={props.handleButton} value="Z" >Z</button>
            <button className="music-button" onClick={props.handleButton} value="X" >X</button>
            <button className="music-button" onClick={props.handleButton} value="C" >C</button>
        </div>
    )
}
