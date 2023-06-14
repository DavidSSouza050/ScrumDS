
import { HeaderBack } from '../../components/hearder'
import { isEqual } from 'lodash';
import back from '../../assets/svg/back.svg'
import './style.css'
import Input, { InputGray } from '../../components/Input'
import Button from '../../components/button'
import HeaderTable from '../../components/headerTable'
import BodyTable from '../../components/bodyTable'
import { ButtonFalseBorder } from '../../components/button'
import { useState } from 'react'
import Modal from '../../components/modal'
import TextArea from '../../components/textarea'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { SelectDev, SelectDono, SelectScrum, SelectSegmento } from '../../components/select'
import { insertMaskInCpf } from '../../utils/masks/cpf';

export default function ProjectCreate(){
    // Modal de pesquisa de desenvolvedores
    const [openModalUser, setOpenModalUser] = useState(false)

    //variaveis
    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [devs, setDevs] = useState('');
    const [listDev, setListDevs] = useState([]);
    const [dono, setDono] = useState('');
    const [scrum, setScrum] = useState('');

    //variáveis do cliente
    const [nomeCliente, setNomeCliente] = useState('');
    const [cpfCnpjCliente, setCpfCnpjCliente] = useState('');
    const [telefoneCliente, setTelefoneCliente] = useState('');
    const [emailCliente, setEmailCliente] = useState('');
    const [segmento, setSegmento] = useState('');
    const [time, setTime] = useState([])

    //voltar a pagina
    const location = useNavigate();

    //enviando uma requisição para a API
    const  handleSubmit = (event) => {
        event.preventDefault(); // Evita o comportamento padrão do formulário
    
        axios.post('http://localhost:8080/sistemas-solucoes-digitais/projeto/', {
            nome: nome,
            descricao: descricao,
            times: time,
            cliente: {
                nome: nomeCliente,
                cpfCnpj: cpfCnpjCliente,
                telefone: telefoneCliente,
                email: emailCliente,
                ramoAtividade: segmento
            },
             
            idProductOwner: dono,
            idUsuarioScrum: scrum,
        })
        .then(function (response) {
            //console.log(response);
            //limpando as caixas e redirecionando para a pagina login
            setNome('');
            setDescricao('');
            setDono('');
            setScrum('');

            //cliente
            setNomeCliente('');
            setCpfCnpjCliente('');
            setTelefoneCliente('');
            setEmailCliente('');
            setSegmento('');

            location('/project');
        })
        .catch(function (error) {
            console.log(error);
        })
    };

    const  handleClickSave = () => {
        if (!listDev.some(list => isEqual(list, devs))){
            setListDevs([...listDev, devs])
            setTime(oldArray => [...oldArray, {idUsuario: devs[0]}])
            setOpenModalUser(!openModalUser)
        } else {
            alert("Desenvolvedor já adicionado")    
        }
        
    }

    return(
        
        <div id="containerCreateProjectFull">  
            {console.log(time)}
            <HeaderBack
                title="Cadastro de Projeto"
                icon={back}
            />
            <form onSubmit={handleSubmit}>
                <div id="containerCreateProject" className='center'>
                    <InputGray
                        title="Nome do Projeto"
                        placeholder="Insira o Nome do Projeto"
                        type="text"
                        value={nome}
                        event={(event) => setNome(event.target.value)}
                    />
                    <TextArea
                        title="Descrição"
                        disabled={false} 
                        value={descricao}
                        event={(event) => setDescricao(event.target.value)}
                    />
                    <div id='containerFormGroupProjectViwerComponent'>
                        <div className='formGroupProjectViwerComponent'> 
                            <SelectDono
                                title="Dono do Produto"
                                placeholder="Insira o Nome do Usuário"
                                type="text"
                                value={dono}
                                event={(event) => setDono(event.target.value)}
                            />
                        </div>
                    
                        <div className='formGroupProjectViwerComponent'>
                            <SelectScrum
                                title="Scrum Master"
                                placeholder=""
                                type="text"
                                value={scrum}
                                event={(event) => setScrum(event.target.value)}
                            />
                        </div>
                    </div>

                    <div id='containerFormGroupProjectViwerComponent'>

                        <div className='formGroupProjectViwerComponent'>

                            <InputGray
                                title="Nome do Cliente"
                                placeholder="Amazon"
                                type="text"
                                value={nomeCliente}
                                event={(event) => setNomeCliente(event.target.value)}
                            />
                        </div>
                        <div className='formGroupProjectViwerComponent'>
                            <InputGray
                                title="CPF do Cliente"
                                placeholder="Técnologia"
                                type="text"
                                value={insertMaskInCpf(cpfCnpjCliente)}
                                event={(event) => setCpfCnpjCliente(event.target.value)}
                            />
                        </div>
                    </div>
                    <InputGray
                        title="E-mail do cliente"
                        placeholder="exemplo@exemplo.com"
                        type="text"
                        value={emailCliente}
                        event={(event) => setEmailCliente(event.target.value)}
                    />
                    <div id='containerFormGroupProjectViwerComponent'>     
                        <div className='formGroupProjectViwerComponent'>
                            <InputGray
                                title="Telefone"
                                placeholder="(__) _____-____"
                                type="text"
                                value={telefoneCliente}
                                event={(event) => setTelefoneCliente(event.target.value)}
                            />
                        </div> 
                        <div className='formGroupProjectViwerComponent'>
                            <SelectSegmento
                                title="Segmento"
                                placeholder=""
                                type="text"
                                value={segmento}
                                event={(event) => setSegmento(event.target.value)}
                            />
                        </div>
                    </div>  
                    <HeaderTable 
                        title1="Nome"
                        title2="Cargo"
                        title3={null}
                    />
                    <div id="listParticipants">
                        {listDev.map(dev =>
                            <BodyTable 
                                nome={dev[1]}
                                status={dev[2]}
                                information={null}
                            />
                        )}
                    <div/>
                    </div>

                    <div className='itemButtonAddParticipants'>
                            <ButtonFalseBorder 
                                nome="+ Adicione o Desenvolvedor"
                                event={() => setOpenModalUser(true)}
                            />
                    </div>
                </div>

                <div id='containerButtonCreateProject'>
                    <Button
                        nome="Salvar"
                        type="submit"
                    />
                </div>
            </form>

            <Modal
                isOpen={openModalUser} 
                setModalOpen={() => setOpenModalUser(!openModalUser)}
            >
                <SelectDev
                    title="Escolha o desenvolvedor"
                    type="text"
                    placeholder=""
                    event={(event) =>
                            [
                            //setListDevs(oldArray => [...oldArray, event.target.value.split(",")]),
                            setDevs(event.target.value.split(","))
                            //setTime(oldArray => [...oldArray, {idUsuario: event.target.value.split(",")[0]}])
                            ]
                        }
                />
                <div id='containerButtonCreateProject' style={{marginTop: "80px"}}>
                    <Button
                        nome="Salvar"
                        event={handleClickSave}
                    /> 
                </div>
            </Modal>
        </div>
    )
}