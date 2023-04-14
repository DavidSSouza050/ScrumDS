

import './style.css';

import exit from "../../assets/svg/exit.svg";
import information from "../../assets/svg/information.svg";
import { Link } from 'react-router-dom';

export default function Project(){

    const data =[
        {
            "nome": "Padaria",
            "status": "Em andamento",
        },
        {
            "nome": "Mercearia",
            "status": "Cancelado",
        }
    ];


    return(
        <div classname='container'>

            <div id="headerLogon" className='center'>
                Projetos
                
                <Link to="/">
                    <div id="logon">
                        Sair
                        <img src={exit} alt="Sair"/>
                    </div>
                </Link>
            </div>

            <div id="containerTable" className='center'>
                <div id='headerTable'>
                    <div className='headerTitle'>
                        Nome
                    </div>
                    <div className='headerTitle'>
                        Status
                    </div>
                    <div className='headerTitle'>
                        
                    </div>
                </div>


                {data.map((projeto)=>
                

                    <div id="bodyTable">
                        <div className='bodyItem'>
                            {projeto.nome}
                        </div>
                        <div className='bodyItem'>
                            <spam className="colorStatus"/>
                            {projeto.status}
                        </div>
                        <div className='bodyItem'>
                            <img src={information} alt='Informação' className='information'/>
                        </div>
                    </div>

                )}

            </div>



        </div>
    )
}