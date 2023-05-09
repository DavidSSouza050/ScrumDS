import React from 'react'

import './style.css'
import { InputGray } from '../Input'

export default function UserViewerComponent() {
    return (

        <div id="containerUserViewComponent">

            <InputGray
                nome="Nome do Usuario"
                placeholder="Nome do usuario"
                type="text"
                disabled={true} 
            />

            <div id='containerFormGroupUserViewComponent'>

                <div className='formGroupUserViewComponent'>

                    <InputGray
                        nome="Cargo"
                        placeholder="Desenvolvedor"
                        type="text"
                        disabled={true}
                    />
                </div>
                <div className='formGroupUserViewComponent'>
                    <InputGray
                        nome="Squad"
                        placeholder="Squad X"
                        type="text"
                        disabled={true}
                    />
                </div>

            </div>
        </div>
    )
}
