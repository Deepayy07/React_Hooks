// import React, { useEffect, useState } from "react";
// import axios from "axios"; // a library to call API

// const UseEffect = () => {

//     const[data, setData] = useState("")

//     useEffect(()=>{
//         axios.get("https://jsonplaceholder.typicode.com/comments")
//         .then((response)=> {setData(response.data[0].email)})

//     })

//     return(
//         <>
//     {data}
//         </>

//     )
// }

// export default UseEffect








import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffect = () => {

    const[data, setData] = useState("")
    const[count, setCount] = useState(0)

    const doCount = () => {setCount(count+1)}

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response)=> {setData(response.data[0].email)})
        console.log("How many Times ?")
    },[data]) // data is passed, that means useEffect will take place only if state "data" is changed.

  return (
    <div>
        
    {data}
    <br/>
    {count}

    <button onClick={doCount}>Try</button>

    </div>
  )
}

export default UseEffect
