import './style.css'

export default function Input(props) {

    return(
        <div className='containerInput'>
            <label className="labelInput" for={props.title}>{props.title}</label>
            <div className='containerTextInput'>
                <input className="InputText" 
                    disabled={props.disabled}  
                    type={props.type}
                    placeholder={props.placeholder} 
                    maxLength={props.maxLength}
                    name={props.name} 
                    id={props.title}
                    value={props.value}
                    onChange={props.event}/>
            </div>
        </div>
    );
}


export function InputGray(props) {

    return(
        <div className='containerInputGray'>
            <label className="labelInputGray" for={props.title}>{props.title}</label>
            <div className='containerTextInputGray'>
                <input className="InputTextGray" 
                    disabled={props.disabled} 
                    type={props.type} 
                    maxLength={props.maxLength}
                    placeholder={props.placeholder} 
                    name={props.name} 
                    id={props.title}
                    value={props.value}
                    onChange={props.event}/>
            </div>
        </div>
    );
}