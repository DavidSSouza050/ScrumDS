import React from 'react'

import cancel from '../../assets/svg/cancel.svg'
import './style.css'

export default function Modal({isOpen, setModalOpen, children}) {
 
    if(isOpen){
        return (
            
            <div className='containerModal'>
                <div className='Modal'>
                    <div id='titleModal'>
                        <img src={cancel} id="close"  onClick={setModalOpen} alt="Fechar"/>
                    </div>
                    <div id='contentModal'>
                        {children}
                    </div>
                </div>
            </div>

        )
    }
}
