import './style.css'


import { HeaderBack } from '../../components/hearder'
import back from '../../assets/svg/back.svg'
import { InputGray } from '../../components/Input'
import Button, { ButtonGray } from '../../components/button'
import image from  '../../assets/svg/image.svg'
import uploadImage from '../../assets/svg/uploadImage.svg'


export default function Perfil(){
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

                <div id="formPerfil">

                    <InputGray
                        nome="Nome Completo"
                        placeholder="João Antionio Santos Augusto"
                        type="text"
                    />


                    <div id='containerFormGroup'>   
                        
                        <div className='formGroup'>
                            <InputGray
                                nome="Cargo"
                                placeholder="Desenvolvedor"
                                type="text"
                            />
                            <InputGray
                                nome="CPF"
                                placeholder="509.XXX.XXX-7"
                                type="text"
                            />
                        </div>

                        <div className='formGroup'>
                            <InputGray
                                nome="Squad"
                                placeholder="Squad X"
                                type="text"
                            />
                            <InputGray
                                nome="Data de Nascimento"
                                placeholder="15/09/2000"
                                type="text"
                            />
                        </div>
                        
                    </div>

                    
                    <div id="containerChangePassword">
                        <div id="titleChangePassword">
                            Alterar Senha
                        </div>
                        
                        <InputGray
                            nome="Senha"
                            placeholder="************"
                            type="text"
                        />
                        
                        <InputGray
                            nome="Confirmar Senha"
                            placeholder="***********"
                            type="text"
                        />

                        <div id="containerButtonPerfil">
                            <div className='itemButton'>
                                <Button
                                    nome="Salvar"
                                />
                            </div>
                            <div className='itemButton'>
                                <ButtonGray
                                    nome="Cancelar"
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
        
    )
}

