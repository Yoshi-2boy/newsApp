import React from "react";
import NewsTemplate from "../component/templates/NewsTemplate";
import '../resource/css/style.scss';

export default class News extends React.Component {
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
                <NewsTemplate />
            </div>
        )
    }
}