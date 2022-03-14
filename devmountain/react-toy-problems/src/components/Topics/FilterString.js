import React, { useState } from 'react'

function FilterString() {

    const [userInput, setUserInput]=useState("")
    const [filteredArray, setFilteredArray]=useState([])
    const unfilteredArray = (["Vadzim", "Naira", "Adam", "Alexandra", "Alexey"])

    const   handleClick=()=>{
      let newArr = unfilteredArray.filter(item=>{
        if (item.toLowerCase().includes(userInput.toLowerCase())){
          return item
        }
      })
      setFilteredArray(newArr)
    }

  return (
    <div className='puzzleBox filterStringPB'>
    <h4>Filter String</h4>
    <span className='puzzleText'>Unfiltered: {JSON.stringify(unfilteredArray)}</span>
    <input className='inputLine'
    onChange={e=>{
      setUserInput(e.target.value)
      console.log(userInput)
    }}
    
    ></input>
    <button className='confirmationButton'
    onClick={handleClick}
    >Filter</button>
    <span className='resultsBox filterStringRB'>Filtered:{JSON.stringify(filteredArray)}</span>
  </div>
  )
}

export default FilterString


/*
import React, { Component } from 'react'

export class FilterString extends Component {
  
  constructor(props) {
   
    super(props)
  
    this.state = {
     unFilteredArray:["Vadzim", "Naira", "Adam", "Alexandra", "Alexey"],
     userInput:"",
     filteredArray:[]
    }
  }

  handleClick=()=>{
    let newArr = this.state.unFilteredArray.filter(item=>{
      if (item.toLowerCase().includes(this.state.userInput.toLowerCase())){
        return item
      }
    })
    this.setState({filteredArray:newArr})
  }
  
  render() {

    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Filter String</h4>
        <span className='puzzleText'>Unfiltered: {JSON.stringify(this.state.unFilteredArray)}</span>
        <input className='inputLine'
        onChange={e=>{
          this.setState({userInput:e.target.value})
          console.log(this.state.userInput)
        }}
        
        ></input>
        <button className='confirmationButton'
        onClick={this.handleClick}
        >Filter</button>
        <span className='resultsBox filterStringRB'>Filtered: {JSON.stringify(this.state.filteredArray)}</span>
      </div>
    )
  }
}

export default FilterString
*/