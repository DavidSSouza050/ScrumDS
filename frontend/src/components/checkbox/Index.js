import './style.css'
import {useState} from 'react';



export default function Checkbox(props) {

    const [checked, setChecked] = useState(false);

    function toggle(){
        setChecked(!checked);
    }

    const checkedClass = checked ? 'checked' : '';
    const containerClass = `checkbox ${checkedClass}`.trim();

    return(
        <label className="labelChecbox">
            <input type="checkbox"  className={containerClass} onClick={toggle} onChange={props.event}/>    
          {props.texto}
        </label>
    )
}