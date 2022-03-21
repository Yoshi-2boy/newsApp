import '../../resource/css/style.scss';

const InputText = (props) => {
    const { className, onChange, label, id, placeholder } = props;

    return (
        <input
            type="text"
            id={id}
            className={className}
            onChange={onChange}
            placeholder={placeholder}
        >
            {label}
        </input>
    );
}

export default InputText;