
import React, { useState } from 'react'

function Sum() {

  const [number1,setNumber1]=useState(0)
  const [number2, setNumber2]=useState(0)
  const [sum, setSum]=useState(null)

  const handleClick=()=>{
    setSum(+number1+ +number2)
  }

  return (
    <div className='puzzleBox sumPB'>
    <h4>Sum</h4>
    <input className='inputLine'
    onChange={e=>{
      setNumber1(e.target.value)
      console.log(number1)
    }}
    ></input>
    <input className='inputLine'
    onChange={e=>{
      setNumber2(e.target.value)
      console.log(number2)
    }}
    ></input>
    <button className='confirmationButton'
    onClick={handleClick}
    ></button>
    <span className=''>Sum is: {sum}</span>
  </div>
  )
}

export default Sum

/*
import React, { Component } from 'react'

export class Sum extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       number1:0,
       number2:0,
       sum: null
    }
  }

handleClick=()=>{
  this.setState({sum: (+this.state.number1+ +this.state.number2)})
}

  render() {
    return (
      <div className='puzzleBox sumPB'>
        <h4>Sum</h4>
        <input className='inputLine'
        onChange={e=>{
          this.setState({number1:e.target.value})
          console.log(this.state.number1)
        }}
        ></input>
        <input className='inputLine'
        onChange={e=>{
          this.setState({number2:e.target.value})
          console.log(this.state.number2)
        }}
        ></input>
        <button className='confirmationButton'
        onClick={this.handleClick}
        ></button>
        <span className=''>Sum is: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum
*/