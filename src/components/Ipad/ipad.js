import React, { useEffect, useState } from "react";
import { iPadProductData } from "../../Api/index.js";
import { ipadContent, navBarIpadList } from '../../Content/content.js';

// import component
import { NavBarLargeList, NavBarSmallList } from "../Common/navbarList.js";
import ProductItem from "../Common/productItem.js";
import SectionTitle from '../Common/sectionTitle.js';
import LinkButton from '../Common/linkButton.js';
import ScrollBar from '../Common/scrollBar.js';
import { ProductCardWrapper, CardInfo, ProductCardCenter } from '../Common/productCard.js';
import ProductInformationCard from "../Common/productInformationCard.js";

const IPad = () => {

    const selectedData = navBarIpadList[0];
    const otherData = navBarIpadList.slice(1);

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const products = await iPadProductData();
            setData(products);
        };
        fetchData();
    }, []);

    if (data === null) {
        return <div></div>;
    }

    return (
        <div className="iPad">
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
            <div className="section section1">
                {ipadContent && ipadContent.map((item) => {
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
                {ipadContent && ipadContent.map((item) => {
                    return item.section_info && item.section_info.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                        />
                    ));
                })}
                <ScrollBar>
                    <div className="section-items">
                        {ipadContent && ipadContent.map((item) => {
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
                {ipadContent && ipadContent.map((item) => {
                    return item.section_3 && item.section_3.map((info, index) => {
                        return (
                            <SectionTitle
                                key={index}
                                title={info.title}
                                subtitle={info.subtitle}
                            />
                        )
                    })
                })}
                <ScrollBar>
                    <div className="product-items">
                        {ipadContent && ipadContent.map((item) => {
                            return item.section_3 && item.section_3.map((item) => {
                                return item.product_info_item && item.product_info_item.map((info, index) => {
                                    return (
                                        <ProductInformationCard
                                            key={index}
                                            src={info.src}
                                            alt={info.alt}
                                            color={info.color}
                                            postscript={info.postscript}
                                            title={info.title}
                                            text={info.text}
                                            price={info.price}
                                            btn={info.btn}
                                            cardTitle={info.cardTitle}
                                            cardText={info.cardText}
                                            productInfoItem={info.productInfoItem}
                                        />
                                    )
                                })
                            })
                        })}
                    </div>
                </ScrollBar>

            </div>

            <div className="section section4">
                {ipadContent && ipadContent.map((item) => {
                    return item.section_4 && item.section_4.map((info, index) => {
                        return (
                            <SectionTitle
                                key={index}
                                title={info.title}
                            />
                        )
                    })
                })}
                <div className="product-info-item">
                    {ipadContent && ipadContent.map((item) => {
                        return item.section_4 && item.section_4.map((item) => {
                            return item.info_item && item.info_item.map((info, index) => {
                                return (
                                    <ProductCardCenter
                                        key={index}
                                        src={info.src}
                                        alt={info.alt}
                                    >
                                        <CardInfo
                                            title={info.title}
                                            text={info.text}
                                            ps={info.postscript}
                                            subtitle={info.link}
                                        />
                                    </ProductCardCenter>
                                )
                            })
                        })

                    })}
                </div>

            </div>

            <div className="section last">
                <h2 className="title">iPad</h2>
                <div className="section-last-info">

                    <NavBarLargeList
                        title={selectedData.title}
                        items={selectedData.listItem}
                    >
                        <>
                            <br />
                            <h4>比較 iPad</h4>
                            <h4>選 iPad 的理由</h4>
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

export default IPad;