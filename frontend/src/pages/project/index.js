
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
    const [dataProjetos, setDataProjetos] = useState([])
    const [openModalUserView, setOpenModalUserView] = useState(false)
    const [openModalProjectView, setOpenModalProjectView] = useState(false)

    const toggleTab = (index) => {
        setToggleState(index);
    };

  //*Pegando o token do usuario */
  const token = localStorage.getItem('token');
  console.log(token)
  
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

    //fazendo a requisição dos projetos que o usuário participa
    useEffect(() => {
        const getProject = async () => {
          try {
                const response = await axios.get(`http://localhost:8080/sistemas-solucoes-digitais/usuarios/token/${token}`);
                console.log('caiu aqui');
                listarProjetos();
                
            } catch (error) {
                console.error(error);
            }
        };
        
        getProject();
        
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

    const listarProjetos = () => {
        axios.get(`http://localhost:8080/sistemas-solucoes-digitais/projeto/por-vinculo/${token}`, {})
        .then(function (response) {
            setDataProjetos(response.data);
        })
        .catch(function (error) {
            console.log(error)
        })
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

    //Abrindo Modal com os dados do projeto
    const projectSelected = (id) =>{
        setId(id)
        setOpenModalProjectView(true)
    }

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

                    {dataProjetos.map((projeto) =>

                        <BodyTable
                            nome={projeto.nome}
                            status={projeto.status}
                            information={information}
                            event={() => projectSelected(projeto.id)}
                        />

                    )}
                    { 
                        perfil !== 'DEVELOPER' ?
                        <div id="containerButtonProject">
                            <div id="buttonNewProject">
                                <Link to="/projectCreate">
                                    <Button
                                        nome="Novo Projeto"
                                    />
                                </Link>
                            </div>
                        </div>
                        : null
                    }
            
  
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
                            information={information}
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
                <ProjectViwerComponent
                    id={id}
                />
            </Modal>
        </div>
    )
}
