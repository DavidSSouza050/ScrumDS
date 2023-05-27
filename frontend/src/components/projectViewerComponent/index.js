import React from 'react'
import './style.css'
import { InputGray } from '../Input'
import BodyTable from '../bodyTable'
import information from "../../assets/svg/information.svg";
import Button, { ButtonGray } from '../button';
import { Link } from 'react-router-dom';

export default function ProjectViwerComponent() {
  return (
    <div id="containerProjectViwerComponent" className='center'>

      <InputGray
        title="title do Projeto"
        placeholder="Projeto X"
        type="text"
        disabled={true} 
      />

      <InputGray
        title="Dono do Produto"
        placeholder="João Silva"
        type="text"
        disabled={true} 
      />

      <div id='containerFormGroupProjectViwerComponent'>

        <div className='formGroupProjectViwerComponent'>

          <InputGray
            title="Cliente"
            placeholder="Amazon"
            type="text"
            disabled={true} 
          />
        </div>

        <div className='formGroupProjectViwerComponent'>
          <InputGray
            title="Segmento"
            placeholder="Técnologia"
            type="text"
            disabled={true} 
          />
        </div>

      </div>
      

      <label id="labelDescricao" for="textarea">Descrição</label>
      <textarea 
        disabled
        id="textarea"
      />


        <div id="listParticipants">
          <BodyTable 
            nome="teste"
            status="Status"
            information={null}
          />
        <div/>

      </div>
      
      <div id="containerButtonViewProject">
        <div className='itemButtonViewProject'>
           <Link to="/projectCreate">
              <Button
                  nome="Editar"
              />
            </Link>
        </div>
        <div className='itemButtonViewProject'>
          <Link to="/project/kanban">
            <ButtonGray
                nome="Kanban"
            />
          </Link>
        </div>
      </div>

    </div>
  )
}
