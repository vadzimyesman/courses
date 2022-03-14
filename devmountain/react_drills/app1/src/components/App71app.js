import React, { useState } from 'react'
import App72newTask from './App72newTask'
import App73list from './App73list'


function App71app() {

    const [list,setList]=useState(["stuff", "more stuff"])

    const handleAddTask=(task)=>{
        setList([...list, task])
    }




  return (
    <div>
        <h1>My to-do list:</h1>
        <App72newTask add={handleAddTask} />
        <App73list tasks={list} />
    </div>
  )
}

export default App71app