import '../../resource/css/style.scss';

const Link = (props) => {
    const { wrapClassName, className, uri, label, target } = props;

    return (
        <div className={wrapClassName}>
            <a
                className={className}
                href={uri}
                target={target}
            >
                {label}
            </a>
        </div>
    );
}

export default Link;