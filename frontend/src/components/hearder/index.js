import { Link } from 'react-router-dom'
import './style.css'

export default function Header(props){
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

                    <Link to='/'>
                        <div className='item'>
                            Logon
                        </div>
                    </Link>
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