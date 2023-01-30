import React from 'react'

const Buttons = (props) => {
    return (
        <div className='buttons'>
            <a className='twitter-button button' href={`http://twitter.com/intent/tweet?text=${props.state.quote}`} target="_blank" id='tweet-quote' ><h3><i className="bi bi-twitter"></i></h3></a>
            <button className='new-quote-button button' onClick={props.handleNewQuote} id='new-quote'>New Quote</button>
        </div>
    )
}

export default Buttons


