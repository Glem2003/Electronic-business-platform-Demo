import React, { useEffect, useState } from "react";
import { iPhoneProductData } from "../../Api";
import { iphoneContent } from '../../Content/content.js';

//import component
import ProductItem from "../Common/productItem";
import SectionTitle from '../Common/sectionTitle.js';
import ProductInfoItem from "../Common/productInfoItem";
import ScrollBar from '../Common/scrollBar.js';
import LinkButton from '../Common/linkButton.js';
import { ProductCardWrapper, CardInfo } from '../Common/productCard.js';

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
                {data && data.map((item) => {
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

            {iphoneContent && iphoneContent.map((item) => {
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
                {iphoneContent && iphoneContent.map((item) => {
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
                {iphoneContent && iphoneContent && iphoneContent.map((item) => {
                    return item.section_info && item.section_info.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                        />
                    ));
                })}
                <ScrollBar>
                    <div className="section-items">
                        {iphoneContent && iphoneContent.map((item) => {
                            return item.section_info.map((items) => {
                                return items.info_item.map((info, index) => {
                                    return (
                                        <ProductCardWrapper
                                            key={index}
                                            src={info.src}
                                        >
                                            <CardInfo
                                                title={info.title}
                                                subtitle={info.subtitle}
                                            />
                                            <LinkButton />
                                        </ProductCardWrapper>
                                    )
                                })
                            })
                        })}
                    </div>
                </ScrollBar>
            </div>
        </div>
    )
}

export default Iphone;