import React from "react";
import '../../resource/css/style.scss';
import BackgroundContainer from "../organisms/BackgroundContainer";
import HeaderContainer from "../organisms/HeaderContainer";
import HomeContainer from "../organisms/HomeContainer";

export default class HomeTemplate extends React.Component {

    render() {
        return (
            <div>
                <HeaderContainer />
                <HomeContainer />
                <BackgroundContainer className="homeArea" />
            </div>
        )
    }
}