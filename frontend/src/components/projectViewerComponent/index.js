import React from 'react'
import './style.css'
import { InputGray } from '../Input'

export default function ProjectViwerComponent() {
  return (
    <div id="containerProjectViwerComponent" className='center'>

      <InputGray
        nome="Nome do Projeto"
        placeholder="Projeto X"
        type="text"
        disabled={true} 
      />

      <InputGray
        nome="Dono do Produto"
        placeholder="João Silva"
        type="text"
        disabled={true} 
      />

      <div id='containerFormGroupProjectViwerComponent'>

        <div className='formGroupProjectViwerComponent'>

          <InputGray
            nome="Cliente"
            placeholder="Amazon"
            type="text"
            disabled={true} 
          />
          <InputGray
            nome="Time responsável pelo Desenvolvimento"
            placeholder="Squad X"
            type="text"
            disabled={true} 
          />
        </div>

        <div className='formGroup'>
          <InputGray
            nome="Segmento"
            placeholder="Técnologia"
            type="text"
            disabled={true} 
          />
          <InputGray
            nome="Objetivo do Projeto"
            placeholder=""
            type="textArea"
            disabled={true} 
          />
        </div>

      </div>
    </div>
  )
}
