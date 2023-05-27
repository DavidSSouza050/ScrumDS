import React, { useEffect, useState } from 'react'

import './style.css'
import { InputGray } from '../Input'
import axios from 'axios';

export default function UserViewerComponent(props) {
    //variaveis
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [perfil, setPerfil] = useState('');

    //consulta para apresentação na pagina
    useEffect(() => {
        axios.get(`http://localhost:8080/sistemas-solucoes-digitais/usuarios/${props.id}`)
        .then(function (response) {
            console.log(response.data)
            setNome(response.data.nomeCompleto)
            setEmail(response.data.email)
            setPerfil(response.data.perfil)
        })
        .catch(function (error) {
            console.log(error);
        })
    },[])
    

    // formatando perfil do usuario
    const cargoUsuario = (perfil) => {

        if(perfil === "PRODUCT_OWNER"){
            return 'Dono de Produto'
        }else if(perfil === "SCRUM_MASTER"){
            return 'Scrum Master'            
        }else{
            return 'Desenvolvedor'            
        }

    }

    return (

        <div id="containerUserViewComponent">

            <InputGray
                title="Nome do Usuario"
                placeholder="Nome do usuario"
                type="text"
                value={nome}
                disabled={true} 
            />

            <div id='containerFormGroupUserViewComponent'>

                <div className='formGroupUserViewComponent'>

                    <InputGray
                        title="E-mail"
                        type="text"
                        value={email}
                        disabled={true}
                    />
                </div>
                <div className='formGroupUserViewComponent'>
                    <InputGray
                        title="Perfil"
                        type="text"
                        value={cargoUsuario(perfil)}
                        disabled={true}
                    />
                </div>

            </div>
        </div>
    )
}
