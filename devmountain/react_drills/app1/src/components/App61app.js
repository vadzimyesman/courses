import React, { useState } from 'react'
import App62toDo from './App62toDo'

function App61app() {

    const [userInput,setUserInput]=useState("")
    const [taskList,setTaskList]=useState(["stuff", "more stuff"])

    const handleClick=()=>{

        setTaskList([...taskList,userInput])
        setUserInput("")

    }

    let list=taskList.map((item,index)=>{
        return <App62toDo key={index} task={item}/>
    })

  return (
    <>
        <h1>My to do list:</h1>
        <div>
            <input 
            value={userInput}
            placeholder='Enter new task here:'
            onChange={e=>setUserInput(e.target.value)}
            ></input>
            <button
            onClick={handleClick}
            >Add</button>
        </div>
        {list}
    </>
  )
}

export default App61app