import React from 'react'
import Properties from "../../assets/svg/properties.svg";
import './style.css'


export default function Card(props) {
  

  return (
    <div className="bodyTable">
        <div
            className='card'
            ref={props.ref}
        >
            {props.content}
            <img src={Properties} alt='Propriedades' className='properties'/>
        </div>
    </div>
  )
}