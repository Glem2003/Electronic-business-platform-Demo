import React, { useEffect, useState } from "react";
import { macProductData } from "../../api";
import ProductItem from "../common/product-item";

import SectionTitle from '../common/section-title.js';
import ScrollBar from '../main/scroll-bar.js';
import ProductInfoItem from "../common/product-info-item";
import MacThirdSection from './mac-section3.js';

import { NavBarLargeList, NavBarSmallList } from "../common/navbar-list.js";
import { ProductCardWrapper, CardInfo } from '../common/product-card.js';
import LinkButton from '../common/link-button.js';
import { navBarMacList, macContent } from '../../content/content.js';

const Mac = () => {

    const selectedData = navBarMacList[0];
    const otherData = navBarMacList.slice(1);

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const products = await macProductData();
            setData(products);
        };
        fetchData();
    }, []);

    if (data === null) {
        return <div></div>;
    }

    return (
        <div className="mac">
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
            {macContent.map((item) => {
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
                {macContent.map((item) => {
                    return item.header.map((header, index) => (
                        <SectionTitle
                            key={index}
                            title={header.title}
                            subtitle={header.subtitle}
                        />
                    ));
                })}
            </div>

            <div className="section section2">

                <ScrollBar>
                    <div className="section-items">
                        {macContent.map((item) => {
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
                                            <LinkButton/>
                                        </ProductCardWrapper>
                                    )
                                })
                            })
                        })}
                    </div>
                </ScrollBar>
            </div>

            <MacThirdSection />
            <div className="section last">
                <h1 className="title">Mac</h1>
                <div className="section-last-info">

                    <NavBarLargeList
                        title={selectedData.title}
                        items={selectedData.listItem}
                    >
                        <>
                            <br />
                            <h4>比較 Mac 機型</h4>
                            <h4>Mac 辦得到</h4>
                        </>
                    </NavBarLargeList>
                    {otherData.map((data, index) => (
                        <NavBarSmallList key={index} title={data.title} items={data.listItem} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Mac;