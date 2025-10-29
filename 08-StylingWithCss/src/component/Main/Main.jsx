import React from 'react'
import styles from './main.module.css'

const Main = () => {
  return (
    <div className={styles.parent}>
      <div className="item">1</div>
      <div className="item">2</div>
      <div className="item">3</div>
      <div className="item">4</div>
      <div className="item">5</div>
    </div>
  )
}

export default Main
