import React, { useState } from 'react'

function App4() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleClick = () =>{
        alert (`username:${username}, password:${password}`)
        
        
    }


  return (
    <>
        <input placeholder='password'
        onChange={(e)=>{
            setUsername(e.target.value)
            //e.target.value=""
        }
            }
        >
        </input>

        <input placeholder='username'
        onChange={(e)=>{
            setPassword(e.target.value)
            //e.target.value=""
        }
        
        }
        >
        </input>

        <button
        onClick={()=>handleClick()}
        >
            Submit
        </button>

    </>
  )
}

export default App4