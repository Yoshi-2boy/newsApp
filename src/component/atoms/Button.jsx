import '../../resource/css/style.scss';

const Button = (props) => {
    const { className, onClick, label } = props;

    return (
        <button
            className={className}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default Button;