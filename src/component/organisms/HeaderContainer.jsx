import React from "react";
import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { Const } from "../../common/const";
import '../../resource/css/style.scss';

const HeaderContainer = (props) => {
    const { newsList,
        setNewsList } = props;

    const navigate = useNavigate();

    const onClickHome = () => {
        navigate("/home");
    }

    const onClickAbout = () => {
        navigate("/about");
    }

    const onClickNews = () => {
        const fetchData = async () => {
            //ニュース一覧取得API
            const url = Const.NEW_API_URL;
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
        <header className="header">
            <h1 className="headerItems">
                <a className="headerTilte1">ポートフォリオ</a>
                <a className="headerTilte2">portfolio</a>
            </h1>
            <nav className="headerNav">
                <ul className="navList">
                    <li className="navItem"><a onClick={onClickHome}>HOME</a></li>
                    <li className="navItem"><a onClick={onClickAbout}>ABOUT</a></li>
                    <li className="navItem"><a onClick={onClickNews}>NEWS</a></li>
                </ul>
            </nav>
        </header >
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);