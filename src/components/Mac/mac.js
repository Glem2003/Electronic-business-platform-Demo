import React, { useEffect, useState } from "react";
import { macProductData } from "../../Api/index.js";
import { navBarMacList, macContent } from '../../Content/content.js';

//import component
import ProductItem from "../Common/productItem.js";
import SectionTitle from '../Common/sectionTitle.js';
import ScrollBar from '../Common/scrollBar.js';
import ProductInfoItem from "../Common/productInfoItem.js";
import { NavBarLargeList, NavBarSmallList } from "../Common/navbarList.js";
import { ProductCardWrapper, CardInfo } from '../Common/productCard.js';
import LinkButton from '../Common/linkButton.js';
import MacInfoBox from "./macInfoBox.js";

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
            {macContent && macContent.map((item) => {
                return item.ads_text && item.ads_text.map((ads, index) => {
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
                {macContent && macContent.map((item) => {
                    return item.header && item.header.map((header, index) => (
                        <SectionTitle
                            key={index}
                            title={header.title}
                            subtitle={header.subtitle}
                        />
                    ));
                })}
            </div>

            <div className="section section2">
                {macContent && macContent.map((item) => {
                    return item.section_info && item.section_info.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                        />
                    ));
                })}
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
                                            <LinkButton />
                                        </ProductCardWrapper>
                                    )
                                })
                            })
                        })}
                    </div>
                </ScrollBar>
            </div>

            <div className="section section3">
                {macContent && macContent.map((items) => {
                    return items.section_banner && items.section_banner.map((text, index) => {
                        return (
                            <SectionTitle
                                key={index}
                                title={text.title}
                            />
                        )
                    })
                })}

                {macContent && macContent.map((items) => {
                    return items.section_banner && items.section_banner.map((item) => {
                        return item.banner_info && item.banner_info.map((info) => {
                            return info.text && info.text.map((text, index) => {
                                return (
                                    <MacInfoBox
                                        key={index}
                                        title={info.title}
                                        text={text.des}
                                        linkText_1={text.linkText_1}
                                        linkText_2={text.linkText_2}
                                    />
                                )
                            })
                        })
                    })
                })}
            </div>

            <div className="section last">
                <h2 className="title">Mac</h2>
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
                    {otherData && otherData.map((data, index) => (
                        <NavBarSmallList key={index} title={data.title} items={data.listItem} />
                    ))}
                </div>
            </div>
            
        </div>
    )
}

export default Mac;