
import { HeaderBack } from '../../components/hearder'
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

export default function ProjectCreate(){
    const [openModalUser, setOpenModalUser] = useState(false)

    return(

        <div id="containerCreateProjectFull">  

            <HeaderBack
                title="Cadastro de Projeto"
                icon={back}
            />

            <div id="containerCreateProject" className='center'>
                
                <InputGray
                    title="Nome do Projeto"
                    placeholder="Insira o Nome do Projeto"
                    type="text"
                />

                <InputGray
                    title="Dono do Produto"
                    placeholder="Insira o Nome do Usuário"
                    type="text"
                />

                <div id='containerFormGroupProjectViwerComponent'>

                    <div className='formGroupProjectViwerComponent'>

                        <InputGray
                            title="Cliente"
                            placeholder="Amazon"
                            type="text"
                        />
                    </div>

                    <div className='formGroupProjectViwerComponent'>
                        <InputGray
                            title="Segmento"
                            placeholder="Técnologia"
                            type="text"
                        />
                    </div>
                </div>
            
                <TextArea/>
                <HeaderTable 
                    title1="Nome"
                    title2="Cargo"
                    title3={null}
                />
                <div id="listParticipants">
                    <BodyTable 
                        nome="Endrew Cavalcante"
                        status="S.M"
                        information={null}
                    />
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
                />
            </div>

            <Modal
                isOpen={openModalUser} 
                setModalOpen={() => setOpenModalUser(!openModalUser)}
            >
                <InputGray
                    title="Coloque o CPF do Desenvolvedor"
                    type="text"
                    placeholder="___.___.___-__"
                />
                <div id='containerButtonCreateProject' style={{marginTop: "80px"}}>
                    <Button
                        nome="Salvar"
                    />
                </div>
            </Modal>
        </div>
    )
}