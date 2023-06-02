
import { Link, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import './style.css';

/*Icones */
import IconPerfil from "../../assets/svg/Iconperfil.svg";
import information from "../../assets/svg/information.svg";

/*Componentes */
import Header from '../../components/hearder';
import Button from '../../components/button'
import HeaderTable from '../../components/headerTable';
import BodyTable from '../../components/bodyTable';
import Modal from '../../components/modal';
import UserViewerComponent from '../../components/userViewerComponent';
import ProjectViwerComponent from '../../components/projectViewerComponent';
import axios from 'axios';



export default function Project() {
    const [id, setId] = useState('');
    const [perfil, setPerfil] = useState('');
    const [toggleState, setToggleState] = useState(1);
    const [dataUsuarios, setDataUsuarios] = useState([])
    const [openModalUserView, setOpenModalUserView] = useState(false)
    const [openModalProjectView, setOpenModalProjectView] = useState(false)

    const toggleTab = (index) => {
        setToggleState(index);
    };

  //*Pegando o token do usuario */
  const token = localStorage.getItem('token');
  
  //fazendo a requisição do usuario ao abrir a pagina
    useEffect(() => {
        const getUser = async () => {
          try {
                const response = await axios.get(`http://localhost:8080/sistemas-solucoes-digitais/usuarios/token/${token}`);
                console.log('caiu aqui');
                setPerfil(response.data.perfil);
                listarUsuarios(perfil);
                
            } catch (error) {
                console.error(error);
            }
        };
        
        getUser();
        
    }, []);


    const listarUsuarios = (perfil) => {
        if(perfil !== 'DEVELOPER'){
            axios.get(`http://localhost:8080/sistemas-solucoes-digitais/usuarios/listar/${token}`, {})
            .then(function (response) {
                setDataUsuarios(response.data);
            })
            .catch(function (error) {
                console.log(error)
            })
        }
    }


    // formatando perfil do usuario
    const cargoUsuario = (perfil) => {

        if(perfil === "PRODUCT_OWNER"){
            return 'P.O'
        }else if(perfil === "SCRUM_MASTER"){
            return 'S.M'            
        }else{
            return 'T.D'            
        }

    }

    //Abrindo Modal com os dados do usuario
    const userSelected = (id) =>{
        setId(id)
        setOpenModalUserView(true)
    }




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

    return (

        <div classname='containerProject'>

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
                    { 
                        perfil !== 'DEVELOPER' ?
                            <button
                            className={toggleState === 2 ? "tabs activeTabs" : "tabs"}
                            onClick={() => toggleTab(2)}
                            >
                                Usuarios
                            </button> 
                        : null
                    }
                </div>


                {/*Lista de projetos*/}

                <div
                    className={toggleState === 1 ? "content  activeContent" : "content"}
                >

                    <HeaderTable
                        title1="Nome"
                        title2="Status"
                        title3=""
                    />

                    {dataProject.map((projeto) =>

                        <BodyTable
                            nome={projeto.nome}
                            status={projeto.status}
                            event={() => setOpenModalProjectView(true)}
                        />

                    )}
            
                    <div id="containerButtonProject">
                        <div id="buttonNewProject">
                            <Link to="/projectCreate">
                                <Button
                                    nome="Novo Projeto"
                                />
                            </Link>
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


                {/*Lista de Lista de usuarios*/}

                <div
                    className={toggleState === 2 ? "content  activeContent" : "content"}
                >

                    <HeaderTable
                        title1="Nome"
                        title2="Cargo"
                        title3=""
                    />

                    {dataUsuarios.map((usuario) =>
                        
                        <BodyTable
                            nome={usuario.nomeCompleto}
                            status={cargoUsuario(usuario.perfil)}
                            event={() => userSelected(usuario.id)}
                        />

                    )}

                </div>
            </div>


            <Modal 
                isOpen={openModalUserView} 
                setModalOpen={() => setOpenModalUserView(!openModalUserView)}
            >
                <UserViewerComponent
                    id={id}
                />
            </Modal>

            <Modal 
                isOpen={openModalProjectView} 
                setModalOpen={() => setOpenModalProjectView(!openModalProjectView)}
            >
                <ProjectViwerComponent/>
            </Modal>
        </div>
    )
}