import axios from  'axios';

import './style.css';

import Icon from "../../assets/svg/icon2.svg";
import Input from '../../components/Input';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button';
import Select from '../../components/select';

import { useState } from 'react';
import { insertMaskInCpf } from '../../utils/masks/cpf';

export default function UserCreate(){
    //variaveis
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [perfil, setPerfil] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');
    
    //voltar a pagina
    const location = useNavigate();



    //enviando uma requisição para a API
    const  handleSubmit = (event) => {
        event.preventDefault(); // Evita o comportamento padrão do formulário
    
        
        if(senha === confirmSenha){
            // Enviando dados para API
            axios.post('http://localhost:8080/sistemas-solucoes-digitais/usuarios', {
                nomeCompleto: nome,
                email: email,
                cpf: cpf,
                dataNascimento: dataNascimento,
                senha: senha,
                senhaConfirmada: confirmSenha,
                perfil: perfil
            })
            .then(function (response) {
                console.log(response);
                //limpando as caixas e redirecionando para a pagina login
                setNome('');
                setEmail('');
                setCpf('');
                setDataNascimento('');
                setPerfil('');
                setSenha('');
                setConfirmSenha('');
                location('/');
            })
            .catch(function (error) {
                console.log(error);
            })
        }else{
            alert("As senhas preicsão ser iguais");
        }
    };


    return(

        <div id="containerCreate">
            <div id="containerLogo">
                <img src={Icon} alt='Logo'/>
            </div>

            <form onSubmit={handleSubmit}>
                <div id="containerForm" className='center'>
                    <Input
                        placeholder="EX.: João Antionio Santos Augusto"
                        title="Nome Completo"
                        name="nomeCompleto"
                        type="text"
                        value={nome}
                        event={(event) => setNome(event.target.value)}
                    />

                    <Input
                        title="E-mail"
                        name="email"
                        placeholder="exemplo@hotmail.com"
                        type="E-mail"
                        value={email}
                        event={(event) => setEmail(event.target.value)}
                    />

                    <div id='containerFormGroup'>   
                        
                        <div className='formGroup'>
                            <Input
                                placeholder="___.___.___-__"
                                title="CPF"
                                name="cpf"
                                type="text"
                                maxLength="14"
                                value={insertMaskInCpf(cpf)}
                                event={(event) => setCpf(event.target.value)}
                            />
                            <Input
                                title="Senha"
                                name="senha"
                                placeholder="********"
                                type="password"
                                value={senha}
                                event={(event) => setSenha(event.target.value)}
                            />


                            <Select 
                                title="Cargo"
                                name="perfil"
                                value={perfil}
                                event={(event) => setPerfil(event.target.value)}
                            />
        
                        </div>

                        <div className='formGroup'>
                            <Input
                                placeholder="__/__/__"
                                title="Data de Nascimento"
                                name="dataNascimento"
                                type="date"
                                value={dataNascimento}
                                event={(event) => setDataNascimento(event.target.value)}
                            />
                            <Input
                                title="Confirmar senha"
                                name="senhaConfirmada"
                                placeholder="***********"
                                type="password"
                                value={confirmSenha}
                                event={(event) => setConfirmSenha(event.target.value)}
                            />
                        </div>
                    </div>

                </div>
                

                <div id="containerButtonCreateUser">

                    <div id="alinButton">
                        <Button
                            nome="Cadastrar"
                            type="submit"
                        />
                    </div>

                    <Link to='/'>
                        <span className='span'>Já possui uma conta?</span>
                    </Link>
                    
                </div>
            </form>

        </div>
    )
}