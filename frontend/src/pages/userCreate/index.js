

import './style.css';

import Icon from "../../assets/svg/icon2.svg";
import { Input } from '../../components/Input';
import SendButton from '../../components/buttonSend';
import { Link } from 'react-router-dom';

export default function UserCreate(){
    return(
        <div id="container">
            <div id="containerLogo">
                <img src={Icon} alt='Logo'/>
            </div>

            <div id="containerForm" className='center'>
                <Input
                    placeholder="EX.: João Antionio Santos Augusto"
                    nome="Nome Completo"
                    type="text"
                />
                <Input
                    nome="E-mail"
                    placeholder="exemplo@hotmail.com"
                    type="E-mail"
                />

                <div id='containerFormGroup'>   
                    
                    <div className='formGroup'>
                        <Input
                            placeholder="___.___.___-__"
                            nome="CPF"
                            type="text"
                        />
                        <Input
                            nome="Senha"
                            placeholder="********"
                            type="password"
                        />
                    </div>
                    <div className='formGroup'>
                        <Input
                            placeholder="__/__/__"
                            nome="Data de Nascimento"
                            type="text"
                        />
                        <Input
                            nome="Confirmar senha"
                            placeholder="***********"
                            type="password"
                        />
                    </div>

                </div>

                <div id="containerButton">

                    <div id="alinButton">
                        <SendButton
                            nome="Cadastrar"
                        />
                    </div>
                    
                    <Link to='/'>
                        <span className='span'>Já possui uma conta?</span>
                    </Link>
                    

                </div>

            </div>

        </div>
    )
}