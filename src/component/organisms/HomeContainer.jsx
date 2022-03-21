import React from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Const } from "../../common/const";
import '../../resource/css/style.scss';
import Box from "../atoms/Box";
import Label from "../atoms/Label";

const HomeContainer = (props) => {
    const { newsList,
        setNewsList } = props;

    const navigate = useNavigate();

    const onClickAbout = () => {
        navigate("/about");
    }

    const onClickNews = () => {
        const fetchData = async () => {
            //ニュース一覧取得API
            const url = Const.NEWS_API_URL;
            try {
                const result = await fetch(url);
                if (result.status == "200") {
                    const json = await result.json();
                    setNewsList({
                        articles: json.articles,
                        refreshing: false,
                    });
                }
            }
            catch (e) {
                console.log(e);
            }

        };
        fetchData();
        navigate("/news");
    }

    return (
        <div className="home">
            <div className="greetings">
                <h1><Label label="当サイトをご覧いただき、ありがとうございます" /></h1>
                <h2><Label label="このサイトはNewsAPIを使用した疑似ニュースサイトになります" /></h2>
            </div>
            <div className="menuList">
                <Box
                    className="box"
                    labelClassName="boxLabel"
                    label="About"
                    onClick={onClickAbout}
                />
                <Box
                    className="box"
                    labelClassName="boxLabel"
                    label="News"
                    onClick={onClickNews}
                />
                <Box
                    className="box"
                    labelClassName="boxLabel"
                    label="Coming Soon..."
                />
                <Box
                    className="box"
                    labelClassName="boxLabel"
                    label="Coming Soon..."
                />
            </div>
        </div >
    )
}

const mapStateToProps = state => {
    return {
        newsList: state.newsList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNewsList: (newsList) => dispatch({ type: "SET_NEWSLIST", newsList: newsList }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);