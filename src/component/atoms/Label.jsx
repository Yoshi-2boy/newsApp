import '../../resource/css/style.scss';

const Label = (props) => {
    const { wrapClassName, className, onClick, label } = props;

    return (
        <div className={wrapClassName}>
            <label
                className={className}
                onClick={onClick}
            >
                {label}
            </label>
        </div>
    );
}

export default Label;