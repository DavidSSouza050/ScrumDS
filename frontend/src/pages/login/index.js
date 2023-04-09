
import InputIcon from '../../components/InputIcon';
import './style.css';
import letter from '../../assets/svg/latter.svg';

import IconLogon from '../../assets/svg/IconLogon.svg'

export default function Login(){
    
    return(
        <>

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
                

                
            </div>

        </>
    )
}