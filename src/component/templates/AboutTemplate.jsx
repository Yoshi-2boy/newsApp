import React from "react";
import '../../resource/css/style.scss';
import AboutContainer from "../organisms/AboutContainer";
import BackgroundContainer from "../organisms/BackgroundContainer";
import HeaderContainer from "../organisms/HeaderContainer";

export default class AboutTemplate extends React.Component {

    render() {
        return (
            <div>
                <HeaderContainer />
                <AboutContainer />
                <BackgroundContainer className="aboutArea" />
            </div>
        )
    }
}