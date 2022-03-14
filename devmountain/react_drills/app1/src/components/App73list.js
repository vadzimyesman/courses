import React from 'react'
import App74toDo from './App74toDo'

function App73list(props) {

    let list=props.tasks.map((element,index)=>{
        return <App74toDo key={index} task={element} />
    })

  return (
    <div>{list}</div>
  )
}

export default App73list