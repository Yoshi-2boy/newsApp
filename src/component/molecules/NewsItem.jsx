import React, { useState } from "react";
import { Image } from 'react-native';
import '../../resource/css/style.scss';
import noImage from '../../resource/img/news.svg';
import Label from "../atoms/Label";

const NewsItem = (props) => {
    const { key, className, src, label, labelClassName, onClick, url, areaClassName, labelAreaClassName } = props;

    const [errFlg, setErrFlg] = useState(false);

    const onErrorImg = () => {
        setErrFlg(true);
    }

    return (
        <div className={areaClassName}>
            <a href={url} target="_blank" key={key}>
                <div className={className} onClick={onClick}>
                    <Image
                        source={errFlg ? { uri: noImage } : { uri: src }}
                        onError={onErrorImg}
                        style={{ height: 250 }}
                    />
                    <Label
                        wrapClassName={labelAreaClassName}
                        label={label}
                        className={labelClassName}
                    />
                </div>
            </a>
        </div>
    )
}

export default NewsItem;