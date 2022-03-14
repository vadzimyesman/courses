import React, { useState } from 'react'

function App72newTask(props) {

    const [input,setInput]=useState("")

    const handleInputChange=(param)=>{
        setInput(param)
    }

    const handleAdd=()=>{
        props.add(input)
        setInput("")
    }


  return (
    <div>
        <input
        value={input}
        placeholder="Enter new task:"
        onChange={e=>handleInputChange(e.target.value)}
        >
        </input>
        <button
        onClick={handleAdd}
        >Add</button>
    </div>
  )
}

export default App72newTask