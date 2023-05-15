import React from 'react'
import './style.css'

export default function Select(props) {
  
    return (
    <div className='containerInput'>
        <label className="labelInput" for={props.nome}>{props.nome}</label>
        <div className='containerTextInput'>
            <select id="SelectOffice"  name={props.nome}>
                <option className='optionsSelectOffice' value="" selected>Selecione um Cargo</option>
                <option className='optionsSelectOffice' value="PROJECT_OWNER" >Dono do Projeto</option>
                <option className='optionsSelectOffice' value="SCRUM_MASTER" >Srum Master</option>
                <option className='optionsSelectOffice' value="DEVELOPER" >Desenvolvedor</option>
            </select>
        </div>
    </div>
  )
}
