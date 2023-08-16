import React, { useReducer } from "react";

  const reducer = (states, action) => {
    switch(action.type){
      case "count":
        return({count:states.count + 1, identifier: states.identifier})
      case "identifier":
        return({count: states.count, identifier: !states.identifier})
      default:
        return({states})
    }
  }

const UseReducer = () => {

  const[states, dispatch] = useReducer(reducer, {count:0, identifier:true})
  return(
    <>
    {states.count}
    <button onClick={() =>{
        dispatch({type: "count"})
        dispatch({type: "identifier"})
    }}>Count&Identifier</button>

    {states.identifier && `this is an even number`}
    {!states.identifier && `this is an odd number`}

    </>
  )

}
 export default UseReducer