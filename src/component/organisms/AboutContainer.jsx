import React from "react";
import '../../resource/css/style.scss';
import Label from "../atoms/Label";
import Link from "../atoms/Link";

const AboutContainer = (props) => {
    const { } = props;

    // スクロールトップ
    const onClickTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth", });
    }

    return (
        <div className="about">
            <div className="chapter">
                <div className="chapterTitle">
                    <Label label="当サイトについて" />
                </div>
                <div>
                    <Label
                        className="contents"
                        label={"このサイトはNewsAPIを利用したニュース検索サイトです。"
                            + "\nReact等のフロントサイド技術のアウトプットとして制作しました。"}
                    />
                    <div style={{ display: "flex", margin: "10px 0px 0px 0px" }}>
                        <Label label="・NewsApi：" />
                        <Link
                            uri="https://newsapi.org/"
                            label="https://newsapi.org/"
                            target="_blank"
                        />
                    </div>
                </div>
            </div>
            <div className="chapter">
                <div className="chapterTitle2">
                    <Label label="注意点" />
                </div>
                <div>
                    <Label
                        className="contents"
                        label={"NewsAPIは無料プランで使用しているため、1日のリクエスト上限が100件までとなっております。"
                            + "\nそのため、ニュースの一覧が取得できない場合がございます。 "}
                    />
                </div>
            </div>
            <div className="chapter">
                <div className="chapterTitle2">
                    <Label label="使用ツール" />
                </div>
                <div className="sectionWrap">
                    <Label
                        className="section"
                        label={"Visual Studio Code"}
                    />
                    <Label
                        className="contents"
                        label={"　コーディングツールとして使用。"}
                    />
                </div>
                <div className="sectionWrap">
                    <Label
                        className="section"
                        label={"HTML"}
                    />
                    <Label
                        className="contents"
                        label={"　Webページ構成の構築のため。"}
                    />
                </div>
                <div className="sectionWrap">
                    <Label
                        className="section"
                        label={"JavaScript"}
                    />
                    <Label
                        className="contents"
                        label={"　フロントサイドの動的処理実装のため。"}
                    />
                </div>
                <div className="sectionWrap">
                    <Label
                        className="section"
                        label={"React"}
                    />
                    <Label
                        className="contents"
                        label={"　UI構成のためのJavaScript用ライブラリとして採用。"}
                    />
                </div>
                <div className="sectionWrap">
                    <Label
                        className="section"
                        label={"CSS"}
                    />
                    <Label
                        className="contents"
                        label={"　画面のレイアウト整形のため。"}
                    />
                </div>
                <div className="sectionWrap">
                    <Label
                        className="section"
                        label={"Redux"}
                    />
                    <Label
                        className="contents"
                        label={"　画面遷移時の値受け渡しのため。"}
                    />
                </div>
            </div>
            <Label
                wrapClassName={"scrollToTopArea"}
                className="scrollToTopBlack"
                label="Scroll To Top"
                onClick={onClickTop}
            />
        </div >
    )
}


export default AboutContainer;