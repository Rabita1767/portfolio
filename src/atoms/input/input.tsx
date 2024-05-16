import "./input.scss";
interface IInput {
    type: string,
    value: string;
    isRequired?: boolean,
    onChange: (value: string) => void;
}
const Input: React.FC<IInput> = ({ type, value, isRequired, onChange }) => {
    const componentClassName = "o-input"
    return (
        <div>
            <input className={componentClassName}
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                required={isRequired}
            />
        </div>
    )
}

export default Input