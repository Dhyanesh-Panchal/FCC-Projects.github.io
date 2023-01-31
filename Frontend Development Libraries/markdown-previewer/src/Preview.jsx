import React from 'react'
import { marked } from 'marked'
// import ReactMarkdown from 'react-markdown'

// let LineParcer = (props) => {
//     // return (<ReactMarkdown>{props.Lines}</ReactMarkdown>);
//     let JSX = marked.parse(props.Lines);
//     console.log(typeof JSX)

//     return <h1>Hello</h1>

//     // return (
//     // props.Lines.map((key) => {
//     //     // console.log('The key is:', key)
//     //     // if (key.slice(0, 2) === '# ') {
//     //     //     console.log("h1")
//     //     //     key = key.slice(2);
//     //     //     return <h1><LineParcer Lines={[key]} /></h1>
//     //     // }
//     //     // else if (key.slice(0, 3) === '## ') {
//     //     //     console.log("h2")
//     //     //     key = key.slice(3);
//     //     //     return <h2><LineParcer Lines={[key]} /></h2>
//     //     // }
//     //     // else if (key.slice(0, 4) === '### ') {
//     //     //     console.log("h3")
//     //     //     key = key.slice(4);
//     //     //     return <h3><LineParcer Lines={[key]} /></h3>
//     //     // }
//     //     // else if (key.slice(0, 2) === '- ') {
//     //     //     console.log("list")
//     //     //     key = key.slice(2);
//     //     //     console.log(key)
//     //     //     return (<ul><li><LineParcer Lines={[key]} /></li></ul>)
//     //     // }
//     //     // else {
//     //     //     console.log("last else, and key is:", key);
//     //     //     return <p>{key}</p>
//     //     // }
//     //     return marked.parse(key)
//     // }
//     // ))
// }

const Preview = (props) => {
    // console.log(typeof props.text)
    // let Lines = props.text.split(/\n/);
    // console.log(Lines);
    return (
        <div >
            <h2 style={{ display: 'block' }}>Preview</h2>
            <div className='preview-box' id='preview' dangerouslySetInnerHTML={{ __html: marked.parse(props.text) }}>
                {/* <LineParcer Lines={props.text} /> */}
            </div>
        </div>

    )
}

export default Preview