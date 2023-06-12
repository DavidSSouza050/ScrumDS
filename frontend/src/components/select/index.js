import React, { useEffect, useState } from 'react'
import './style.css'
import axios from 'axios';

export default function Select(props) {
  
    return (
    <div className='containerInput'>
        <label className="labelInput" for={props.title}>{props.title}</label>
        <div className='containerTextInput'>
            <select id="SelectOffice" value={props.value} onChange={props.event} name={props.name} disabled={props.disabled}>
                <option className='optionsSelectOffice' value="" selected>Selecione um Cargo</option>
                <option className='optionsSelectOffice' value="PRODUCT_OWNER" >Dono do Projeto</option>
                <option className='optionsSelectOffice' value="SCRUM_MASTER" >Srum Master</option>
                <option className='optionsSelectOffice' value="DEVELOPER" >Desenvolvedor</option>
            </select>
        </div>
    </div>
  )
}

export function SelectSegmento(props) {
  
    return (
    <div className='containerInputGray'>
        <label className="labelInputGray" for={props.title}>{props.title}</label>
        <div className='containerTextInputGray'>
            <select id="SelectOfficeGray" value={props.value} onChange={props.event} name={props.name} disabled={props.disabled}>
                <option className='optionsSelectOfficeGray' value="" selected>Selecione um Cargo</option>
                <option className='optionsSelectOfficeGray' value="INDUSTRIA" >Industria</option>
                <option className='optionsSelectOfficeGray' value="COMERCIO" >Comercio</option>
                <option className='optionsSelectOfficeGray' value="SERVICOS" >Serviços</option>
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
            <select id="SelectOfficeGray" value={props.value} onChange={props.event} name={props.name} disabled={props.disabled}>
                <option className='optionsSelectOfficeGray' value="" selected>Selecione um Cargo</option>
                <option className='optionsSelectOfficeGray' value="PRODUCT_OWNER" >Dono do Projeto</option>
                <option className='optionsSelectOfficeGray' value="SCRUM_MASTER" >Srum Master</option>
                <option className='optionsSelectOfficeGray' value="DEVELOPER" >Desenvolvedor</option>
            </select>
        </div>
    </div>
  )
}

export function SelectDono(props) {

    const token = localStorage.getItem('token');
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUser = async () => {
          try {
                const response = await axios.get(`http://localhost:8080/sistemas-solucoes-digitais/usuarios/listar/${token}`);
                console.log(response.data)
                setUsers(response.data);
                
            } catch (error) {
                console.error(error);
            }
        };
        
        getUser();
        
    }, []);
  
    return (
    <div className='containerInputGray'>
        <label className="labelInputGray" for={props.title}>{props.title}</label>
        <div className='containerTextInputGray'>
            <select id="SelectOfficeGray" value={props.value} onChange={props.event} name={props.name} disabled={props.disabled}>
                <option className='optionsSelectOfficeGray' value="" selected>Selecione o Dono</option>
                {users.map((user) => 
                    user.perfil === 'PRODUCT_OWNER' ?
                    <option className='optionsSelectOfficeGray' value={user.id} >{user.nomeCompleto}</option>
                    : null
                )}
            </select>
        </div>
    </div>
  )
}

export function SelectScrum(props) {

    const token = localStorage.getItem('token');
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUser = async () => {
          try {
                const response = await axios.get(`http://localhost:8080/sistemas-solucoes-digitais/usuarios/listar/${token}`);
                setUsers(response.data);
                
            } catch (error) {
                console.error(error);
            }
        };
        
        getUser();
        
    }, []);
  
    return (
    <div className='containerInputGray'>
        <label className="labelInputGray" for={props.title}>{props.title}</label>
        <div className='containerTextInputGray'>
            <select id="SelectOfficeGray" value={props.value} onChange={props.event} name={props.name} disabled={props.disabled}>
                <option className='optionsSelectOfficeGray' value="" selected>Selecione o Scrum</option>
                {users.map((user) => 
                    user.perfil === 'SCRUM_MASTER' ?
                    <option className='optionsSelectOfficeGray' value={user.id} >{user.nomeCompleto}</option>
                    : null
                )}
            </select>
        </div>
    </div>

    
  )
}

export function SelectDev(props) {

    const token = localStorage.getItem('token');
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUser = async () => {
          try {
                const response = await axios.get(`http://localhost:8080/sistemas-solucoes-digitais/usuarios/listar/${token}`);
                setUsers(response.data);
                
            } catch (error) {
                console.error(error);
            }
        };
        
        getUser();
        
    }, []);

    return (
    <div className='containerInputGray'>
        <label className="labelInputGray" for={props.title}>{props.title}</label>
        <div className='containerTextInputGray'>
            <select id="SelectOfficeGray" value={props.value} name={props.name} onChange={props.event} disabled={props.disabled}>
                <option className='optionsSelectOfficeGray' value="" selected>Selecione o Desenvolvedor</option>
                {
                users.map((user) => 
                    
                    user.perfil === 'DEVELOPER' ?
                    <option className='optionsSelectOfficeGray' value={[user.id, user.nomeCompleto, user.perfil]}>{user.nomeCompleto}</option>
                    : null
                )}
            </select>
        </div>
    </div>

    
  )
}
