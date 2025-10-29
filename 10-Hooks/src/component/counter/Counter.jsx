import React, { useState } from 'react'
import styles from './counter.module.css'

const Counter = () => {
    const [number,setNum] = useState(0)
    function increasing(){
        console.log("increasing");
        setNum(number+1)
    }
    function decreasing(){
       setNum(number-1)
    }
  return (
    <div className={styles.parent}>
      <h1>{number}</h1>
     <div className={styles.button}>
         <button onClick={increasing}>increase</button>
      <button onClick={decreasing}>decrease</button>
     </div>
    </div>
  )
}

export default Counter
