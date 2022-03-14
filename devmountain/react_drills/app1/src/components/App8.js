import React, { useEffect, useState } from 'react'

import axios from "axios"

function App8() {

const [character,setCaracter]=useState("")
const [input,setInput]=useState("")

    useEffect(()=>{

        axios.get(`https://swapi.dev/api/people/${input}`)
        .then((res)=>{
            setCaracter(res.data)
            console.log(res.data)
        })
        .catch((err)=>console.log(err))

        console.log("RRRaaappp")
    },[input])

  return (
    <div>
        <input
        value={input}
        placeholder="character's number:"
        onChange={e=>setInput(e.target.value)}
        ></input>
        <h1>Name: {character.name}</h1>
        <h1>Mass: {character.mass}</h1>
        <h1>Eye color: {character.eye_color}</h1>
        <h1>Skin color: {character.skin_color}</h1>
    </div>
  )
}

export default App8