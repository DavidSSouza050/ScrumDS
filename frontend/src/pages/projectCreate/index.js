
import { HeaderBack } from '../../components/hearder'
import back from '../../assets/svg/back.svg'
import './style.css'
import { InputGray } from '../../components/Input'
import Button from '../../components/button'

export default function ProjectCreate(){
    return(

        <div id="containerCreateProjectFull">  

            <HeaderBack
                title="Cadastro de Projeto"
                icon={back}
            />

            <div id="containerCreateProject" className='center'>
                
                <InputGray
                    nome="Nome do Projeto"
                    placeholder="Projeto X"
                    type="text"
                />

                <InputGray
                    nome="Dono do Produto"
                    placeholder="João Silva"
                    type="text"
                />
               
                <div id='containerFormGroup'>   
                            
                    <div className='formGroup'>
                        
                        <InputGray
                            nome="Cliente"
                            placeholder="Amazon"
                            type="text"
                        />
                        <InputGray
                            nome="Time responsável pelo Desenvolvimento"
                            placeholder="Squad X"
                            type="text"
                        />
                    </div>

                    <div className='formGroup'>
                        <InputGray
                            nome="Segmento"
                            placeholder="Técnologia"
                            type="text"
                        />
                        <InputGray
                            nome="Objetivo do Projeto"
                            placeholder=""
                            type="textArea"
                        />
                    </div>
                    
                </div>

                <div id="containerButtonCreateProject">
                    <div id="buttonCreateProject">
                        <Button
                            nome="Cadastrar"
                        />
                    </div>
                </div>

            </div>

        </div>

    )
}