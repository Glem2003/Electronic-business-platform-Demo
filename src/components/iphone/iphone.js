import React, { useEffect, useState } from "react";
import { iPhoneProductData } from "../../api";
import ProductItem from "../common/product-item";

import SectionTitle from '../common/section-title.js';
import ProductInfoItem from "../common/product-info-item";
import IphoneSecondSection from "./iphone-section2";

import '../../sass/component/product-item.sass';

const Iphone = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const products = await iPhoneProductData();
            setData(products);
        };
        fetchData();
    }, []);

    if (data === null) {
        return <div></div>;
    }

    return (
        <div className="iphone">
            <div className="Product-items">
                {data.map((item) => {
                    return (
                        <ProductItem
                            key={item.id}
                            text={item.text}
                            PS={item.postscript}
                            alt={item.text}
                            src={item.src}
                        />
                    )
                })}
            </div>

            <ProductInfoItem
                textInfo="以iPhone 11 或後續機型升級換購 iPhone 15 或 iPhone 15 Pro。獲享 NT$4,500 至 NT$22,900 的折抵優惠。"
            />
            <div className="section section1">
                <SectionTitle title="iPhone" subtitle="精心設計討人愛" />
            </div>
            <IphoneSecondSection />
        </div>
    )
}

export default Iphone;