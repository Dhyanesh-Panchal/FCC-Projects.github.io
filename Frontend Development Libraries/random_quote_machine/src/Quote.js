import React from 'react'

const Quote = (props) => {
    return (
        <>
            <div className='quote' id='text'>
                <h1 style={{ display: "inline" }}><i className="bi bi-quote"></i></h1>
                {props.quote}

            </div>
            <div className='writer-name' id='author'>{props.writer}</div>
        </>

    )
}

export default Quote