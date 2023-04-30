

import './style.css';

/*Icones */
import IconPerfil from "../../assets/svg/Iconperfil.svg";
import information from "../../assets/svg/information.svg";
import accept from "../../assets/svg/accept.svg"
import cancel from "../../assets/svg/cancel.svg"

/*Componentes */
import Header from '../../components/hearder';
import Button from '../../components/button'
import { Link } from 'react-router-dom';
import { useState } from 'react';



export default function Project(){
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };


    const dataProject =[
        {
            "nome": "Padaria",
            "status": "Em andamento",
        },
        {
            "nome": "Mercearia",
            "status": "Cancelado",
        }
    ];

    const dataUsuarios =[
        {
            "nome": "DAVID SILVA",
            "cargo": "P.O",
        },
        {
            "nome": "ENDREW CAVALCANTE",
            "cargo": "S.M",
        },
        {
            "nome": "JEREMIAS JOAO MANE",
            "cargo": "T.D",
        }
    ];

    return(
            
            <div classname='container'>

                <Header
                    title= "Projetos"
                    icon= {IconPerfil}
                />

                <div id="containerTable" className='center'>

                    <div id="containerTabs">
    
                        <button 
                            className={toggleState === 1 ? "tabs activeTabs" : "tabs"}
                            onClick={()=> toggleTab(1)}
                        >
                            Projetos
                        </button>

                        <button
                            className={toggleState === 2 ? "tabs activeTabs" : "tabs"}
                            onClick={()=> toggleTab(2)}
                        >
                            Usuarios
                        </button>

                        <button 
                            className={toggleState === 3 ? "tabs pendingUsersActive" : "tabPendingUsers"}
                            onClick={()=> toggleTab(3)}
                        >
                            Usuarios Pendentes
                        </button>
                    </div>


                    {/*Lista de projetos*/}

                    <div 
                        className={toggleState === 1 ? "content  activeContent" : "content"}
                    >

                        <div className='headerTable'>
                            <div className='headerTitle left'>
                                Nome
                            </div>
                            <div className='headerTitle'>
                                Status
                            </div>
                            <div className='headerTitle right'>
                                
                            </div>
                        </div>

                        {dataProject.map((projeto)=>
                        

                            <div className="bodyTable">
                                <div className='bodyItem left'>
                                    {projeto.nome}
                                </div>
                                <div className='bodyItem'>
                                    <spam className="colorStatus"/>
                                    {projeto.status}
                                </div>
                                <div className='bodyItem right'>
                                    <img src={information} alt='Informação' className='information'/>
                                </div>
                            </div>

                        )}
                        
                    </div>


                    {/*Lista de Lista de usuarios*/}
                    
                    <div 
                        className={toggleState === 2 ? "content  activeContent" : "content"}
                    >

                        <div className='headerTable'>
                            <div className='headerTitle left'>
                                Nome
                            </div>
                            <div className='headerTitle'>
                                Cargo
                            </div>
                            <div className='headerTitle right'>
                                
                            </div>
                        </div>

                        {dataUsuarios.map((usuario)=>
                        

                            <div className="bodyTable">
                                <div className='bodyItem left'>
                                    {usuario.nome}
                                </div>
                                <div className='bodyItem'>
                                    <spam className="colorStatus"/>
                                    {usuario.cargo}
                                </div>
                                <div className='bodyItem right'>
                                    <img src={information} alt='Informação' className='information'/>
                                </div>
                            </div>

                        )}
                        
                    </div>


                    {/*Lista de Lista de usuarios para aprovação*/}
                    
                    <div 
                        className={toggleState === 3 ? "content  activeContent" : "content"}
                    >

                        <div className='headerTable'>
                            <div className='headerTitle left'>
                                Nome
                            </div>
                            <div className='headerTitle'>
                                Cargo
                            </div>
                            <div className='headerTitle'>
                                Aprovação
                            </div>
                            <div className='headerTitle right'>
                                
                            </div>
                        </div>

                        {dataUsuarios.map((usuario)=>
                        

                            <div className="bodyTable">
                                <div className='bodyItem left'>
                                    {usuario.nome}
                                </div>
                                <div className='bodyItem'>
                                    <spam className="colorStatus"/>
                                    {usuario.cargo}
                                </div>

                                <div className='bodyItem'>
                                    <img src={accept} className='approval' alt="Aprovar"/>
                                    <img src={cancel} className='approval' alt="Cancelar"/>
                                </div>

                                <div className='bodyItem right'>
                                    <img src={information} alt='Informação' className='information'/>
                                </div>
                            </div>

                        )}
                        
                    </div>
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