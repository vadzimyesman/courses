import React, { useState } from 'react'

function App1() {
    const [defaultMessage,message] = useState("initial value");
    console.log(defaultMessage)

  return (
    <div>
        <input
            type="text"
            placeholder='type here'
            onChange={(e)=>message(e.target.value)}
        >
        
        </input>
        <p>
           {defaultMessage} 
        </p>
    </div>
  )
}

export default App1




/*
import React, { Component } from 'react'

export class app1 extends Component {
constructor(props) {
  super(props);

  this.state = {
     message:"initial value"
  };
}

handleChange (value){
    this.setState({message:value});
    console.log(value)
}

  render() {
    return (
      <div>
          <input
              onChange={e => this.handleChange(e.target.value)}
              //onChange={e => console.log(e)}
              type="text"  
          />
          <p>
              {this.state.message}
          </p>
      </div>
    )
  }
}

export default App1
*/