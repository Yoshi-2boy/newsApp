import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import '../../resource/css/style.scss';
import Button from "../atoms/Button";
import InputText from "../atoms/InputText";
import Label from "../atoms/Label";
import NewsItem from "../molecules/NewsItem";

const NewsContainer = (props) => {
    const { newsList } = props;

    const [articles, setArticles] = useState([]);
    const [searchFlg, setSearchFlg] = useState(false);

    useEffect(() => {
        if (!searchFlg && newsList) {
            setArticles(newsList.articles);
        }
    });

    // 検索ボタン押下後処理
    const onClickSearch = () => {
        let keyword = document.getElementById("keyword").value;
        let result = [];
        if (newsList) {
            result = newsList.articles.filter(value => {
                return value.title.indexOf(keyword) != -1;
            });
        }
        setSearchFlg(true);
        if (keyword != "") {
            setArticles(result);
        } else {
            setArticles(newsList.articles);
        }
    }

    // スクロールトップ
    const onClickTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth", });
    }

    return (
        <div className="news">
            <div className="search">
                <div className="searchForm">
                    <InputText
                        id="keyword"
                        className="searchInput"
                        placeholder="キーワードを入力してください"
                    />
                    <Button
                        className="searchButton"
                        label="検索"
                        onClick={onClickSearch}
                    />
                </div>
            </div>
            <div className="newsList">
                {articles && articles.length != 0 ? articles.map((item, index) => (
                    <NewsItem
                        key={index}
                        areaClassName="newsItemArea"
                        className="newsItem"
                        url={item.url}
                        src={item.urlToImage}
                        label={item.title}
                        labelClassName="newsTitle"
                        labelAreaClassName="newsTitleArea"
                    />
                )) : <Label
                    wrapClassName={"notFoundArea"}
                    className="notFound"
                    label="記事が見つかりませんでした"
                />}
            </div>
            <Label
                wrapClassName={articles && articles.length > 2 ? "scrollToTopArea" : "noneItem"}
                className="scrollToTop"
                label="Scroll To Top"
                onClick={onClickTop}
            />
        </div >
    )
}

const mapStateToProps = state => {
    return {
        newsList: state.newsList,
    }
}


export default connect(mapStateToProps, null)(NewsContainer);