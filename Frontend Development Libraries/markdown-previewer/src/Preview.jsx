import React from 'react'



const Preview = (props) => {
    // console.log(typeof props.text)
    let myTexts = props.text.split(/\n/);
    console.log(myTexts);
    return (
        <div>
            <h2 style={{ display: 'block' }}>Preview</h2>
            <div className='preview-box'>
                <ul>
                    {
                        myTexts.map((key, indx) => {
                            if (key)
                                return (<li id={indx}>{key}</li>)
                        })
                    }
                </ul>
            </div>
        </div>

    )
}

export default Preview