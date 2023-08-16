import React, { useState } from "react";

const Test = () => {

  const[num, setNum] = useState(0)
  const[tracker, setTracker] = useState(false)

  const numChanger = () => {
    setNum(num + 1)
  }

  return(
    <div>

      {num} <br/>
      <button onClick={() => {numChanger(); setTracker(!tracker)} }>Change Num</button>
      <br/>

      {!tracker && `${num} is an even number`}
      {tracker && `${num} is an odd number`}

    </div>
  )
}

export default Test