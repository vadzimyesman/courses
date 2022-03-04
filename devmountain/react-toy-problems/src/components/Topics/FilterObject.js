import React, { useState } from 'react'

function FilterObject() {

  const [userInput, setUserInput]=useState("")
  const [filteredArray, setFilteredArray]=useState([])
  const unFilteredArray=[{name:"Billy",title:"clerk",age:26},
                         {name:"Rose",nickname:"Snake",age:21},
                         {nickname:"Dexter", title:"manager", hobby:"Tennis"}]


  const handleClick = () =>{
    let filteredArr = unFilteredArray.filter(item=>{
      if (item[userInput]){
        return item
      }
    })
      setFilteredArray(filteredArr)
      console.log(filteredArr)
  }                       

  return (
    <div className='puzzleBox filterObjectPB'>
    <h4>Filter Object</h4>
    <span className='puzzleText'>Unfiltered : {JSON.stringify(unFilteredArray)} </span>
    <input className='inputLine'
    onChange={e=>{
      setUserInput(e.target.value)
    }}  
    ></input>
    <button className='confirmationButton'
    onClick={handleClick}
    >Filter</button>
    <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(filteredArray)} </span>
  </div>
  )
}

export default FilterObject


/*
import React, { Component } from 'react'

export class FilterObject extends Component {

constructor(props) {
  super(props)

  this.state = {
    unFilteredArray:[{name:"Billy",title:"clerk",age:26},
                     {name:"Rose",nickname:"Snake",age:21},
                     {nickname:"Dexter", title:"manager", hobby:"Tennis"}],
    userInput:"",
    filteredArray:[]
  }
}

handleClick=()=>{
  
  let filteredArr = this.state.unFilteredArray.filter(item=>{
    if (item[this.state.userInput]){
      return item
    }
  })
    this.setState({filteredArray:filteredArr})
    console.log(filteredArr)
}

  render() {
    
    return (
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input className='inputLine'
        onChange={e=>{
          this.setState({userInput:e.target.value})
        }}  
        ></input>
        <button className='confirmationButton'
        onClick={this.handleClick}
        >Filter</button>
        <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterObject
*/