import './style.css'




export default function InputIcon(props) {

    return(
        <div className='containerInput'>
            <label className="labelInputIcon" for={props.nome}>{props.nome}</label>
            <div className='containerInputIcon'>
                <span>
                    <img src={props.img} alt="Coloca o email"/>
                </span>
                <input className="InputText" type={props.type} placeholder={props.placeholder} name={props.nome} id={props.nome}/>
            </div>
        </div>
    );
}

export function Input(props) {

    return(
        <div className='containerInput'>
            <label className="labelInputIcon" for={props.nome}>{props.nome}</label>
            <div className='containerInputIcon'>
                <input className="InputText" type={props.type} placeholder={props.placeholder} name={props.nome} id={props.nome}/>
            </div>
        </div>
    );
}