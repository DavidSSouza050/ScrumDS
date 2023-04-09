import './style.css'




export default function InputIcon(prosp) {

    return(
        <div className='containerInput'>
            <label for={prosp.nome}>{prosp.nome}</label>
            <div className='containerInputIcon'>
                <span>
                    <img src={prosp.img} alt="Coloca o email"/>
                </span>
                <input type={prosp.type} placeholder={prosp.placeholder} name={prosp.nome} id={prosp.nome}/>
            </div>
        </div>
    );
}