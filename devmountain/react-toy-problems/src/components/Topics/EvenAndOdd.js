
import React, {useState} from 'react'

function EvenAndOdd() {

  const [userInput, setUserInput] = useState("");
  const [oddArray, setOddArray] = useState([]);
  const [evenArray, setEvenArray] = useState([]);

  const  handleClick = (text) =>{
    console.log(text)
    let oddArr=[]
    let evenArr=[]
    text.split("").forEach((element)=>{
      if(+element%2===0){
        evenArr.push(+element)
      } else {
        oddArr.push(+element)
      }
    }
      )
      console.log(oddArr,evenArr)
      setEvenArray(evenArr)
      setOddArray(oddArr)

    
  }

  return (
    <div className="puzzleBox evenAndOddPB">
    <h4>Evens and Odds</h4>
    <input
    className='inputLine'
    onChange={e=> {
      setUserInput(e.target.value)
      console.log(userInput)
    }}
    />
    <button
    className='confirmationButton'
    onClick={()=>handleClick(userInput)}
    >
    Submit
    </button>
    <span className='resultsBox'>Even :{JSON.stringify(evenArray)} </span>
    <span className='resultsBox'>Odd : {JSON.stringify(oddArray)} </span>
</div>
  )
}

export default EvenAndOdd

/*
import React, { Component } from 'react'

export class EvenAndOdd extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         evenArray:[],
         oddArray:[],
         userInput:""
      }
    }

handleClick = () =>{
    console.log(this.state.userInput)
    let array = this.state.userInput
    let evenArr=[]
    let oddArr=[]
    array = array.split(",")
    console.log(array)
    array.forEach(element => {
        if (+element%2===0){
            if (evenArr.length>0){
                evenArr.push(","+ +element)
            } else {
                evenArr.push(+element)
            }
            
        } else {
            if (oddArr.length>0){
                oddArr.push(","+ +element)
            } else {
                oddArr.push(+element)
            }
        }
    });
    console.log(evenArr,oddArr)
    this.setState({evenArray:evenArr})
    this.setState({oddArray:oddArr})
}


  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
          <h4>Evens and Odds</h4>
          <input
          className='inputLine'
          onChange={e=>{
            this.setState({userInput:e.target.value})
            console.log(this.state.userInput)
          }}
          />
          <button
          className='confirmationButton'
          onClick={this.handleClick}
          >
          Submit
          </button>
          <span className='resultsBox'>Even : {this.state.evenArray}</span>
          <span className='resultsBox'>Odd : {this.state.oddArray}</span>
      </div>
    )
  }
}

export default EvenAndOdd
*/