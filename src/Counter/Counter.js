import React, { useState } from 'react'

const Counter = () => {

    const[num, setNum] = useState(0)
    const[name, setName] = useState('')
    const[display, setDisplay] = useState('')
    
    const counter = () => {
        setNum(num + 1)
    }

    const changeName = (event) => {
        setName(event.target.value)
    }

    const displayName = () => {
        setDisplay(name)
    }
 
  return (
    <>
        {num}
        
        <button onClick={counter}> Start Counting ! </button >
        
        <input
        placeholder='Enter your Name here'
        value={name}
        onChange={changeName}/>

        <button onClick={displayName}> Display Name</button>
        
        {display}
    </>
  )
}

export default Counter