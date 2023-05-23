import axios from  'axios';

import './style.css';

import IconLogon from '../../assets/svg/IconLogon.svg'
import Checkbox from '../../components/checkbox/Index';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/button';
import { useState } from 'react';

export default function Login(){
    //variaveis
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');

    // redirecionamento
    const navigate = useNavigate();

    //enviando Login
    const  handleSubmit = (event) => {
        event.preventDefault(); //  Evita o comportamento padrão do formulário
        
        //Realizando a requisitção de login
        axios.post('http://localhost:8080/sistemas-solucoes-digitais/login', {
            cpf: cpf,
            senha: senha,
        })
        .then(function (response) {
            localStorage.setItem('token', response.data);
            setCpf('');
            setSenha('');

            navigate('/project');
        })
        .catch(function (error) {
            console.log(error);
        })

    }
    
    return(
        <div className='containerLogin' style={{backgroundColor: '#39574C'}}>

            <div id='containerLogon'>

                <img src={IconLogon} alt="Icone Scrum"/>

                <form onSubmit={handleSubmit}>
                    <Input
                        title="CPF"
                        placeholder="___.___.___-__"
                        type="text"
                        value={cpf}
                        event={(event) => setCpf(event.target.value)}
                    />
                    
                    <Input
                        title="Senha"
                        placeholder="******"
                        type="password"
                        value={senha}
                        event={(event) => setSenha(event.target.value)}
                    />

                    <Checkbox
                        texto="Lembre-se de mim"
                        event={(value)=>{console.log(value.target.checked)}} 
                    />
                    <br/>
                    <Button
                        nome="Entrar"
                        type="submit"
                    />
                </form>

                
                <Link to="/userCreate">
                    <span id="linkCreate" >Não possui conta? Crie uma agora</span>
                </Link>
                

            </div>

        </div>
    )
}