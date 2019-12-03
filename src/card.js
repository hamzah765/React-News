import React from 'react'
const Card =(props) => {
  return (
      <div className="card">
      <p>{props.text}</p>
      <img src={props.pic} alt= "img"/>
      
      </div>
  )
  
}
export default Card