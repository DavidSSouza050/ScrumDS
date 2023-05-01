

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
import HeaderTable, { HeaderTableApproval } from '../../components/headerTable';
import BodyTable, { BodyTableApproval } from '../../components/bodyTable';
import Modal from '../../components/modal';
import UserViewerComponent from '../../components/userViewerComponent';
import ProjectViwerComponent from '../../components/projectViewerComponent';



export default function Project() {
    const [toggleState, setToggleState] = useState(1);
    const [openModalUserView, setOpenModalUserView] = useState(false)
    const [openModalProjectView, setOpenModalProjectView] = useState(false)

    const toggleTab = (index) => {
        setToggleState(index);
    };


    const dataProject = [
        {
            "nome": "Padaria",
            "status": "Em andamento",
        },
        {
            "nome": "Mercearia",
            "status": "Cancelado",
        }
    ];

    const dataUsuarios = [
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

    return (

        <div classname='container'>

            <Header
                title="Projetos"
                icon={IconPerfil}
            />

            <div id="containerTable" className='center'>

                <div id="containerTabs">

                    <button
                        className={toggleState === 1 ? "tabs activeTabs" : "tabs"}
                        onClick={() => toggleTab(1)}
                    >
                        Projetos
                    </button>

                    <button
                        className={toggleState === 2 ? "tabs activeTabs" : "tabs"}
                        onClick={() => toggleTab(2)}
                    >
                        Usuarios
                    </button>

                    <button
                        className={toggleState === 3 ? "tabs pendingUsersActive" : "tabPendingUsers"}
                        onClick={() => toggleTab(3)}
                    >
                        Usuarios Pendentes
                    </button>
                </div>


                {/*Lista de projetos*/}

                <div
                    className={toggleState === 1 ? "content  activeContent" : "content"}
                >

                    <HeaderTable
                        title1="Nome"
                        title2="Status"
                    />

                    {dataProject.map((projeto) =>

                        <BodyTable
                            nome={projeto.nome}
                            status={projeto.status}
                            information={information}
                            event={() => setOpenModalProjectView(true)}
                        />

                    )}

                </div>


                {/*Lista de Lista de usuarios*/}

                <div
                    className={toggleState === 2 ? "content  activeContent" : "content"}
                >

                    <HeaderTable
                        title1="Nome"
                        title2="Cargo"
                    />

                    {dataUsuarios.map((usuario) =>

                        <BodyTable
                            nome={usuario.nome}
                            status={usuario.cargo}
                            information={information}
                            event={() => setOpenModalUserView(true)}
                        />

                    )}

                </div>


                {/*Lista de Lista de usuarios para aprovação*/}

                <div
                    className={toggleState === 3 ? "content  activeContent" : "content"}
                >

                    <HeaderTableApproval
                        title1="Nome"
                        title2="Cargo"
                        title3="Aprovação"
                    />

                    {dataUsuarios.map((usuario) =>

                        <BodyTableApproval
                            nome={usuario.nome}
                            cargo={usuario.cargo}
                            accept={accept}
                            cancel={cancel}
                            information={information}
                            event={() => setOpenModalUserView(true)}
                        />

                    )}

                </div>
            </div>



            <Modal 
                isOpen={openModalUserView} 
                setModalOpen={() => setOpenModalUserView(!openModalUserView)}
            >
                <UserViewerComponent/>
            </Modal>

            <Modal 
                isOpen={openModalProjectView} 
                setModalOpen={() => setOpenModalProjectView(!openModalProjectView)}
            >
                <ProjectViwerComponent/>
            </Modal>

            
            
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