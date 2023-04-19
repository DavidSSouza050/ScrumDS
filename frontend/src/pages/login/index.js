
import './style.css';
import letter from '../../assets/svg/latter.svg';

import IconLogon from '../../assets/svg/IconLogon.svg'
import SendButton from '../../components/buttonSend';
import Checkbox from '../../components/checkbox/Index';
import { Link } from 'react-router-dom';
import InputIcon from '../../components/Input';

export default function Login(){
    
    return(
        <div className='container' style={{backgroundColor: '#39574C'}}>

            <div id='containerLogon'>

                <img src={IconLogon} alt="Icone Scrum"/>

                <InputIcon
                    nome="Usuário"
                    placeholder="exemplo@hotmail.com"
                    img={letter}
                    type="E-mail"
                />
                
                <InputIcon
                    nome="Senha"
                    placeholder="******"
                    img={letter}
                    type="password"
                />

                <Checkbox
                    texto="Lembre-se de mim"
                    event={(value)=>{console.log(value.target.checked)}} 
                />

                <Link to="/project">
                    <SendButton
                        nome="Entrar"
                    />
                </Link>
                
                <Link to="/userCreate">
                    <span id="linkCreate" >Não possui conta? Crie uma agora</span>
                </Link>
                

            </div>

        </div>
    )
}