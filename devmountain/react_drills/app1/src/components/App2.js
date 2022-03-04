import React, {useState} from 'react'

function App2() {
    const [mealsList,setMealsList]=useState(["pizza","pasta","soup","ice cream", "hot dog"])


        let display = mealsList.map((element,index)=>{
            console.log(element,index)
            return <h1 key={index}> {element} </h1>
        })

        console.log(display)
    

  return (
    <div>
        {display}
    </div>
  )
}

export default App2

/*
import React, { Component } from 'react'

export class App2 extends Component {

constructor(props) {
  super(props)

  this.state = {
     meals:["pizza","pasta","soup","ice cream", "hot dog"]
  }
}

  render() {
    let mealsToDisplay = this.state.meals.map((element,index) => {
        return <h1 key={index}> {element} </h1>
    })
    return (
      <div>
          {mealsToDisplay}
     </div>
    )
  }
}

export default App2
*/