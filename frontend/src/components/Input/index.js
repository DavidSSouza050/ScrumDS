import './style.css'




export default function Input(props) {

    return(
        <div className='containerInput'>
            <label className="labelInput" for={props.nome}>{props.nome}</label>
            <div className='containerTextInput'>
                <input className="InputText" type={props.type} placeholder={props.placeholder} name={props.nome} id={props.nome}/>
            </div>
        </div>
    );
}


export function InputGray(props) {

    return(
        <div className='containerInputGray'>
            <label className="labelInputGray" for={props.nome}>{props.nome}</label>
            <div className='containerTextInputGray'>
                <input className="InputTextGray" type={props.type} placeholder={props.placeholder} name={props.nome} id={props.nome}/>
            </div>
        </div>
    );
}