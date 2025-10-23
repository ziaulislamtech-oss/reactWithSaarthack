import React from 'react'
import '../App.css'
import { Bookmark } from 'lucide-react'

const Card = (props) => {
    // console.log(props.company)
  return (
    <div className='parent'>
      <div className="card">
      <div className="top">
        <img src={props.logo} alt="" />
        <button>save<Bookmark size={20} /></button>
      </div>
      <div className="center">
        <h2>amazon<span>{props.date}</span></h2>
        <h2>{props.company}</h2>
        <div className="span">
          <span>{props.timing1}</span><span> {props.timing2}</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <h2>{props.salary}</h2>
          <p>{props.location}</p>

        </div>
        <div className="right"><button>Apply now</button></div>
      </div>
     </div>
    </div>
  )
}

export default Card
