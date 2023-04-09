import './style.css'

export default function Checkbox() {
    return(
        <label className="labelChecbox">
            <input type="checkbox" isChecked className="InputCheckbox"  />
            Lembre-se de mim
        </label>
    )
}