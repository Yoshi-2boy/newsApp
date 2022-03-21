import React from "react";
import AboutTemplate from "../component/templates/AboutTemplate";
import '../resource/css/style.scss';

export default class About extends React.Component {
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
                <AboutTemplate />
            </div>
        )
    }
}