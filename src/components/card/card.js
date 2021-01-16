import React from 'react'

const Card = props => {

    return (
        <div className="card">
        <h3>{props.judul}</h3>
        <ul>
            {props.ciri.map(ciri => <li>{ciri}</li>)}
        </ul>
      </div>
    )
   
}
export default Card;