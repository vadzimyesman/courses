import React from 'react'

function App5(props) {


    console.log(props.url)

  return (
    <>
    <img src={props.url} style={{height:"300px"}}></img>
    
    </>
  )
}

export default App5