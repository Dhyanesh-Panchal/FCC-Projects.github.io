import React from 'react'

const Buttons = (props) => {
    return (
        <div className='buttons'>
            <a className='twitter-button button' href={`http://twitter.com/intent/tweet?text=${props.state.quote}`}><h3><i className="bi bi-twitter"></i></h3></a>
            <button className='new-quote-button button' onClick={props.handleNewQuote} >New Quote</button>
        </div>
    )
}

export default Buttons