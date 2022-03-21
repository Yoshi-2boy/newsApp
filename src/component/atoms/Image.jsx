import '../../resource/css/style.scss';
import logo from '../../resource/img/nightsky.svg';

const Image = (props) => {
    const { className, src, alt, width, height, border } = props;

    return (
        <img
            className={className}
            src={logo}
            alt={alt}
            width={width}
            height={height}
            border={border}
        />
    );
}

export default Image;