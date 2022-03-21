import React from "react";
import '../../resource/css/style.scss';
import BackgroundContainer from "../organisms/BackgroundContainer";
import HeaderContainer from "../organisms/HeaderContainer";
import NewsContainer from "../organisms/NewsContainer";

export default class NewsTemplate extends React.Component {

    render() {
        return (
            <div>
                <HeaderContainer />
                <NewsContainer />
                <BackgroundContainer className="newsArea" />
            </div>
        )
    }
}