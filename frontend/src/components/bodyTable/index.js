import React from 'react'
import './style.css'

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
            <img src={props.information} alt='Informação' onClick={props.event} className='information'/>
        </div>
    </div>
  )
}

export  function BodyTableApproval(props) {
    return (
        <div className="bodyTable">
            <div className='bodyItem left'>
                {props.nome}
            </div>
            <div className='bodyItem'>
                <spam className="colorStatus"/>
                {props.cargo}
            </div>

            <div className='bodyItem'>
                <img src={props.accept} className='approval' alt="Aprovar"/>
                <img src={props.cancel} className='approval' alt="Cancelar"/>
            </div>

            <div className='bodyItem right'>
                <img src={props.information} alt='Informação' onClick={props.event} className='information'/>
            </div>
        </div>
    )
  }