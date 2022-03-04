
import React, {useState} from 'react'

function App3() {
    const [meals, setMeals]=useState(["spaghetti", "ice cream", "sushi", "bologna", "cheese"])
    const [filter,setFilter]=useState("")

  const  handleChange = word =>{
        console.log(filter)
        setFilter(word)
        //console.log(input)
    }

    let mealsToDisplay = meals
        .filter(element=>{
            //console.log(input)
            return element.includes(filter)
        })
        .map((element,index)=>{
            console.log(element)
            return <h1 key={index}> {element} </h1>
        })

  return (
    <div>
        <input
        type="text"
        onChange={e=>handleChange(e.target.value)}
        >
        </input>
        {mealsToDisplay}
    </div>
  )
}

export default App3



/*
import React, { Component } from 'react'

export class App3 extends Component {

constructor(props) {
  super(props)

  this.state = {
     filterString:"",
     meals: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
  };
}

    handleChange = filter =>{
        this.setState({filterString: filter})
    }


  render() {
      let mealsToDisplay = this.state.meals
      .filter((element) =>{
          return element.includes(this.state.filterString)
      })
      .map((element,index)=>{
          return <h1 key={index}> {element} </h1>
      })
    return (
      <div>
          <input
          onChange={e=>this.handleChange(e.target.value)}
          type="text"
          >

          </input>
          {mealsToDisplay}
      </div>
    )
  }
}

export default App3

*/