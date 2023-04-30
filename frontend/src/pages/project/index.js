

import './style.css';

import IconPerfil from "../../assets/svg/Iconperfil.svg";
import information from "../../assets/svg/information.svg";
import Header from '../../components/hearder';
import Button from '../../components/button'
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

            <Header
                title= "Projetos"
                icon= {IconPerfil}
           />


            <div id="containerTable" className='center'>
                <div id='headerTable'>
                    <div className='headerTitle' id='left'>
                        Nome
                    </div>
                    <div className='headerTitle'>
                        Status
                    </div>
                    <div className='headerTitle' id='right'>
                        
                    </div>
                </div>


                {data.map((projeto)=>
                

                    <div id="bodyTable">
                        <div className='bodyItem' id='left'>
                            {projeto.nome}
                        </div>
                        <div className='bodyItem'>
                            <spam className="colorStatus"/>
                            {projeto.status}
                        </div>
                        <div className='bodyItem' id='right'>
                            <img src={information} alt='Informação' className='information'/>
                        </div>
                    </div>

                )}

               

            </div>

            <div id="containerButtonProject">
                
                <div id="buttonNewProject">
                    <Link to="/projectCreate">
                        <Button
                            nome="Novo Projeto"
                        />
                    </Link>
                </div>
            </div>

        </div>
    )
}