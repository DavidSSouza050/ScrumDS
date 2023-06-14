import './style.css'

export default function TextArea(props) {
    return (
        <div>
            <label id="labelDescricao" for="textarea">{props.title}</label>
            <textarea
                id="textarea"
                disabled={props.disabled}
                value={props.value}
                onChange={props.event}
            />
        </div>
    )
}