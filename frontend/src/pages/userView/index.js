
import './style.css'


import { HeaderBack } from '../../components/hearder'
import back from '../../assets/svg/back.svg'
import { InputGray } from '../../components/Input'
import Button from '../../components/button'

export default function UserView(){
    return(
        <div id="containerUserViewFull">
            <HeaderBack
                title="Informações do Usuário"
                icon={back}
            />

            <div id="containerUserView" className='center'>
               
                <InputGray
                    nome="Nome do Usuario"
                    placeholder="Nome do usuario"
                    type="text"
                />
               
                <div id='containerFormGroup'>   
                            
                    <div className='formGroup'>
                        
                        <InputGray
                            nome="Cargo"
                            placeholder="Desenvolvedor"
                            type="text"
                        />
                    </div>
                    <div className='formGroup'>
                        <InputGray
                            nome="Squad"
                            placeholder="Squad X"
                            type="text"
                        />
                    </div>
                    
                </div>

                <div id="conatinerButtonUserView">
                    <div id="buttonUserView">
                        <Button
                            nome="Salvar"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}