import './style.css'

export default function Button(props){
    return(
        <button className='Button'>{props.nome}</button>
    )
}

export function ButtonGray(props){
    return(
        <button className='ButtonGray'>{props.nome}</button>
    )
}