

import './style.css';

import IconPerfil from "../../assets/svg/Iconperfil.svg";
import information from "../../assets/svg/information.svg";
import Header from '../../components/hearder';
import Button from '../../components/button'

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

            <div id="containerButton">
                <div id="buttonNewProject">
                    <Button
                        nome="Novo Projeto"
                    />
                </div>
            </div>

        </div>
    )
}