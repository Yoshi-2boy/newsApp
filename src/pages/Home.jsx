import React from "react";
import HomeTemplate from "../component/templates/HomeTemplate";
import '../resource/css/style.scss';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popupFlg: false,
        }
    }

    render() {
        const closePopup = () => {
            this.setState({ popupFlg: false });
        }

        return (
            <div>
                <HomeTemplate />
            </div>
        )
    }
}