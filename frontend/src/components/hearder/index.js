import { Link, useNavigate } from 'react-router-dom'
import './style.css'

export default function Header(props){

    // redirecionamento
    const navigate = useNavigate();

    const closeSistem = () => {
        localStorage.removeItem('token')
        navigate('/');
    }

    return(

        <div id="header" className='center'>
           {props.title}

            <div id="icon">
                <img src={props.icon} alt="Sair"/>

                <div id="menu">
                    
                    <Link to="/perfil">
                        <div className='item'>
                            Perfil
                        </div>
                    </Link>

                    <div className='item' onClick={closeSistem}>
                        Logon
                    </div>

                </div>
            </div>
         </div>

    )
}

export function HeaderBack(props){
    return(

        <div id="header" className='center'>
           {props.title}
           
           <Link to='/project'>
                <div id="iconBack">
                    <img src={props.icon} alt="Voltar"/>
                </div>
           </Link>
            
        </div>

    )
}