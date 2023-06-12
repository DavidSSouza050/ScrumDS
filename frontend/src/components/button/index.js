import './style.css'

export default function Button(props){
    return(
        <button className='Button' type={props.type} onClick={props.event}>{props.nome}</button>
    )
}

export function ButtonGray(props){
    return(
        <button className='ButtonGray' type={props.type}>{props.nome}</button>
    )
}

export function ButtonFalseBorder(props){
    return(
        <button className='ButtonFalseBorder' onClick={props.event} type={props.type}>{props.nome}</button>
    )
}