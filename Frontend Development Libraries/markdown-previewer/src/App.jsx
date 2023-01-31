import { useState } from 'react'
import Input from './Input'
import Preview from './Preview'


function App() {
  const [Text, setText] = useState('');
  const handleChange = (event) => {
    setText(event.target.value);
    // console.log(Text);
  }
  return (
    <div className="App">
      <h1 className='page-heading'>Markdown Previewer</h1>
      <div className="wraper">
        <Input text={Text} handleChange={handleChange} />
        <Preview text={Text} />
      </div>
    </div>
  )
}

export default App
