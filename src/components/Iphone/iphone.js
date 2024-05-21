import React, { useEffect, useState } from "react";
import { iPhoneProductData } from "../../Api";
import ProductItem from "../Common/productItem";

import SectionTitle from '../Common/sectionTitle.js';
import ProductInfoItem from "../Common/productInfoItem";
import { iphoneContent } from '../../Content/content.js';

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

            {iphoneContent.map((item) => {
                return item.ads_text.map((ads, index) => {
                    return (
                        <ProductInfoItem
                            key={index}
                            text={ads.text}
                            linkText={ads.link}
                        />
                    )
                })
            })}
            <div className="section section1">
                {iphoneContent.map((item) => {
                    return item.header.map((header, index) => {
                        return (
                            <SectionTitle
                                key={index}
                                title={header.title}
                                subtitle={header.subtitle}
                            />
                        )
                    })
                })}
            </div>

            <div className="section section2">
            
            </div>
        </div>
    )
}

export default Iphone;