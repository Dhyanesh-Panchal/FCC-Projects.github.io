import React from 'react'


const Input = (props) => {

    return (
        <div className='Input-box'>
            <h2>Editor</h2>
            <textarea className='textarea' value={props.text} onChange={props.handleChange} id='editor' />
        </div>
    )
}

export default Input