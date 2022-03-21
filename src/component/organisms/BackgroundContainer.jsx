import React from "react";
import '../../resource/css/style.scss';

const BackgroundContainer = (props) => {
    const { className } = props;

    return (
        <div className={className} >
            <ul className="circles">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div >
    )
}

export default BackgroundContainer;