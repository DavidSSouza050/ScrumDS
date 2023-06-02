import React from 'react'
import './style.css'

export default function Select(props) {
  
    return (
    <div className='containerInput'>
        <label className="labelInput" for={props.title}>{props.title}</label>
        <div className='containerTextInput'>
            <select id="SelectOffice" value={props.value} onChange={props.event} name={props.name}>
                <option className='optionsSelectOffice' value="" selected>Selecione um Cargo</option>
                <option className='optionsSelectOffice' value="PRODUCT_OWNER" >Dono do Projeto</option>
                <option className='optionsSelectOffice' value="SCRUM_MASTER" >Srum Master</option>
                <option className='optionsSelectOffice' value="DESENVOLVIDOR" >Desenvolvedor</option>
            </select>
        </div>
    </div>
  )
}


export function SelectGray(props) {
  
    return (
    <div className='containerInputGray'>
        <label className="labelInputGray" for={props.title}>{props.title}</label>
        <div className='containerTextInputGray'>
            <select id="SelectOfficeGray" value={props.value} onChange={props.event} name={props.name}>
                <option className='optionsSelectOfficeGray' value="" selected>Selecione um Cargo</option>
                <option className='optionsSelectOfficeGray' value="PRODUCT_OWNER" >Dono do Projeto</option>
                <option className='optionsSelectOfficeGray' value="SCRUM_MASTER" >Srum Master</option>
                <option className='optionsSelectOfficeGray' value="DEVELOPER" >Desenvolvedor</option>
            </select>
        </div>
    </div>
  )
}
