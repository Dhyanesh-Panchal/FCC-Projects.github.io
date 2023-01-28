import React from 'react'

const Quote = (props) => {
    return (
        <>
            <div className='quote'>
                <h1 style={{ display: "inline" }}><i class="bi bi-quote"></i></h1>
                {props.quote}

            </div>
            <div className='writer-name'>{props.writer}</div>
        </>

    )
}

export default Quote