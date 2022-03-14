import React, { useState } from 'react'

function Palindrome() {

const [userInput, setUserInput] = useState("")
const [palindrome, setPalindrome] = useState("")

const handleClick = () =>{
  let oldString=userInput.toLocaleLowerCase().split(" ").join("")
  let newString=userInput.toLocaleLowerCase().split(" ").join("").split("").reverse().join("")

  if (oldString===newString){
    setPalindrome(`${userInput} is palindrome!`)
  } else {
    setPalindrome("Typed text is not a palindrome!")
  }
}

  return (
    <div className='puzzleBox filterStringPB'>
    <h4>Palindrome</h4>
    <input className='inputLine'
      onChange={e=>{
        setUserInput(e.target.value)
        console.log(userInput)
      }}
    
    ></input>
    <button className='confirmationButton'
    onClick={handleClick}
    >Filter</button>
    <span className='resultsBox'>Answer: {palindrome} </span>
  </div>
  )
}

export default Palindrome

/*
import React, { Component } from 'react'

export class Palindrome extends Component {

constructor(props) {
  super(props)

  this.state = {
     userInput:"",
     palindrome:""
  }
}

handleClick=()=>{
  let newString = this.state.userInput.toLocaleLowerCase().split(" ").join("").split("").reverse().join("")
  let oldString = this.state.userInput.toLocaleLowerCase().split(" ").join("")
  if (newString===oldString){
    this.setState({palindrome:`${this.state.userInput} is palindrome!`})
  } else {
    this.setState({palindrome:"Typed string is not a palindrome!"})
  }
}

  render() {
    return (
      <div className='puzzleBox filterStringPB'>
        <h4>Palindrome</h4>
        <input className='inputLine'
          onChange={e=>{
            this.setState({userInput:e.target.value})
            console.log(this.state.userInput)
          }}
        
        ></input>
        <button className='confirmationButton'
        onClick={this.handleClick}
        >Filter</button>
        <span className='resultsBox'>Palindrome: {this.state.palindrome} </span>
      </div>
    )
  }
}

export default Palindrome
*/