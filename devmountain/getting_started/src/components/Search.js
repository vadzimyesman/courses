import React, {Component} from "react"

class Search extends Component{
    //how to create state
    //how to edit state
    constructor(){
        super() 
        this.state={
            dog: "dog"
        }
    }
    //how to declare functions

    render(){
    //how to escape jsx
    //in order to write Javascript in the return statement use curly braces {}
        return(
        <div>
            <h1>
                Search component
            </h1>
            <input>

            </input>
            <p>
                {
                    this.state.dog
                }
            </p>
        </div>

        )
    }



}

export default Search