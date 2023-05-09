
import './style.css';
import letter from '../../assets/svg/latter.svg';

import IconLogon from '../../assets/svg/IconLogon.svg'
import Checkbox from '../../components/checkbox/Index';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/button';

export default function Login(){
    
    return(
        <div className='containerLogin' style={{backgroundColor: '#39574C'}}>

            <div id='containerLogon'>

                <img src={IconLogon} alt="Icone Scrum"/>

                <Input
                    nome="Usuário"
                    placeholder="___.___.___-__"
                    img={letter}
                    type="text"
                />
                
                <Input
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
                    <Button
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