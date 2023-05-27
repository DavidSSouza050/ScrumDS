import React from 'react'
import './style.css'

import information from "../../assets/svg/information.svg";

export default function BodyTable(props) {
  return (
    <div className="bodyTable">
        <div className='bodyItem left'>
            {props.nome}
        </div>
        <div className='bodyItem'>
            <spam className="colorStatus"/>
            {props.status}
        </div>
        <div className='bodyItem right'>
            <img src={information} alt='Informação' onClick={props.event} className='information'/>
        </div>
    </div>
  )
}