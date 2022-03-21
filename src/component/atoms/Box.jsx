import '../../resource/css/style.scss';

const Box = (props) => {
    const { className, onClick, label, labelClassName, key } = props;

    return (
        <div
            className={className}
            onClick={onClick}
        >
            <p className={labelClassName}>{label}</p>
        </div>
    );
}

export default Box;