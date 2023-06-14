import './style.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

import { HeaderBack } from '../../components/hearder'
import back from '../../assets/svg/back.svg'
import { InputGray } from '../../components/Input'
import Button, { ButtonGray } from '../../components/button'
import image from  '../../assets/svg/image.svg'
import uploadImage from '../../assets/svg/uploadImage.svg'
import { useNavigate } from 'react-router-dom'
import { SelectGray } from '../../components/select'
import { insertMaskInCpf } from '../../utils/masks/cpf'



export default function Perfil(){
    //variaveis
    const [id, setId] = useState('')
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [perfil, setPerfil] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');

    //*Pegando o token do usuario */
    const token = localStorage.getItem('token');
    
    //* */
    const location = useNavigate();

    //fazendo a requisição do usuario ao abrir a pagina
    useEffect(() => {
        const getUser = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/sistemas-solucoes-digitais/usuarios/token/${token}`);
                console.log(response.data);
                
                setId(response.data.id);
                setNome(response.data.nomeCompleto);
                setEmail(response.data.email);
                setCpf(response.data.cpf);
                setPerfil(response.data.perfil);
                setDataNascimento(response.data.dataNascimento);    
                setSenha(response.data.senha);
                setConfirmSenha(response.data.senhaConfirmada);
            } catch (error) {
                console.error(error);
            }
        };
    
        getUser();
    }, []);

    //enviando uma requisição para a API
    const updateUser = (event) => {
        event.preventDefault(); // Evita o comportamento padrão do formulário
        
        if(senha === confirmSenha){
            // Enviando dados para API
            axios.put('http://localhost:8080/sistemas-solucoes-digitais/usuarios', {
                id: id,
                nomeCompleto: nome,
                email: email,
                dataNascimento: dataNascimento,
                senha: senha,
                senhaConfirmada: confirmSenha,
                perfil: perfil
            })
            .then(function (response) {
                console.log(response);
                /*atualizando a pagina */
                alert('Dados Atualizados com sucesso!')
                location('/perfil', { replace: true });
            })
            .catch(function (error) {
                console.log(error);
                alert('Ocorreu um erro, tente novamente!')
            })
        }else{
            alert("As senhas preicsão ser iguais");
        }
    };



    return(

        <div className='containerPerfil'>
            
            <HeaderBack
                title="Perfil do Usuário"
                icon={back}
            />


            <div id="containerPerfil" className="center">

                <div id="imagePerfil">
                    <div id="image">
                        <img src={image} className='full' alt='Imagem de perfil'/>
                    </div>
                    
                    <div id="uploadImage">
                        <label id="labelIamge" for="file">
                            <img src={uploadImage} className='full' alt='Imagem de perfil'/>
                        </label>
                        <input type="file" id="file" />
                    </div>

                </div>

                <form  onSubmit={updateUser}>
                    <div id="formPerfil">

                        <InputGray
                            title="Nome Completo"
                            type="text"
                            value={nome}
                            event={(event) => setNome(event.target.value)}
                        />
                        <InputGray
                            title="Email"
                            type="text"
                            value={email}
                            event={(event) => setEmail(event.target.value)}
                        />
                        <InputGray
                            title="CPF"
                            disabled={true}
                            type="text"
                            value={insertMaskInCpf(cpf)}
                            event={(event) => setCpf(event.target.value)}
                        />

                        <div id='containerFormGroup'>   
                            
                            <div className='formGroup'>
                                
                                <SelectGray
                                    title="Cargo"
                                    name="perfil"
                                    value={perfil}
                                    disabled={true}
                                    event={(event) => setPerfil(event.target.value)}
                                />
                            </div>

                            <div className='formGroup'>
                                <InputGray
                                    title="Data de Nascimento"
                                    type="date"
                                    value={dataNascimento}
                                    event={(event) => setDataNascimento(event.target.value)}
                                />
                            </div>
                            
                        </div>

                        <div id="containerButtonPerfil">
                            <div className='itemButton'>
                                <Button
                                    nome="Salvar"
                                    type="submit"
                                />
                            </div>
                            <div className='itemButton'>
                                <ButtonGray
                                    nome="Cancelar"
                                />
                            </div>
                        </div>
                    </div>
                
                </form>

            </div>

        </div>
        
    )
}

