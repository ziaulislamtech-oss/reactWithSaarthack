import { useState } from "react";

// import React, { useState } from 'react'
// let a = 20;
const UseState = () => {
    const [value,setValue] = useState()
    const [name, setName]=useState("ziakhan")
    function changeA(){
        setValue(+1)
        setName("mubashir")
    }
  return (
    <div>
      <h1>value of a is {value}</h1>
      <h2>User : {name}</h2>
      <button onClick={changeA}>click</button>
      {/* <button >Name changer</button> */}

    </div>
  )
}

export default UseState
