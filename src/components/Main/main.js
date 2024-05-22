import React, { useEffect, useState } from "react";
import { productData, productTextData } from "../../Api";
import { mainContent } from '../../Content/content';

import ContantTitle from "./contantTitle";
import ScrollBar from "../Common/scrollBar";
import ProductItem from "../Common/productItem";
import ColorBox from "./colorBox";
import { CardInfo, ProductCardWrapper, ProductCardCenter } from "../Common/productCard";

const Main = () => {
    const [isProductData, setProductData] = useState(null);
    const [isProductTextData, setProductTextData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const products = await productData();
            setProductData(products);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const products = await productTextData();
            setProductTextData(products);
        };
        fetchData();
    }, []);

    if (isProductData === null) {
        return <div></div>;
    }

    if (isProductTextData === null) {
        return <div></div>;
    }

    return (
        <div className="main">

            <div className="section-title">
                {mainContent && mainContent.map((item) => {
                    return item.header.map((text, index) => {
                        return (
                            <ContantTitle
                                key={index}
                                title={text.title}
                                subtitle={text.subtitle}
                            />
                        )
                    })
                })}

                <div className="product-item">
                    {isProductData && isProductData.map((item) => (
                        <ProductItem
                            key={item.id}
                            text={item.name}
                            alt={item.name}
                            src={item.src}
                        />
                    ))}
                </div>
            </div>


            <div className="section section1">
                {mainContent && mainContent.map((item) => {
                    return item.section_1.map((text, index) => {
                        return (
                            <ContantTitle
                                key={index}
                                title={text.title}
                                subtitle={text.subtitle}
                            />
                        )
                    })
                })}

                <ScrollBar>
                    <div className="section-items">

                        {isProductTextData && isProductTextData.map((product, index) => (
                            <div className="item-col">
                                <ProductCardWrapper
                                    key={index}
                                    src={product.src}
                                    alt={product.subtitle}
                                >
                                    <CardInfo
                                        title={product.name}
                                        subtitle={product.title}
                                        text={product.price}
                                    />
                                </ProductCardWrapper>
                            </div>
                        ))}
                    </div>
                </ScrollBar>

            </div>

            <div className="section section2">
                {mainContent && mainContent.map((item) => {
                    return item.section_2.map((text, index) => {
                        return (
                            <ContantTitle
                                key={index}
                                title={text.title}
                                subtitle={text.subtitle}
                            />
                        )
                    })
                })}

                <ScrollBar>
                    <div className="section-items">
                        {mainContent && mainContent.map((item) => {
                            return item.section_2_info.map((info, index) => {
                                const titleInfo = info.title;
                                return (
                                    <div className="item-col">
                                        <ProductCardWrapper
                                            key={index}
                                            src={titleInfo.src}
                                            alt={titleInfo.alt}
                                        >
                                            <CardInfo
                                                title={titleInfo.title}
                                                subtitle={titleInfo.subtitle}
                                            />
                                        </ProductCardWrapper>
                                    </div>
                                )
                            })
                        })}

                        {mainContent && mainContent.map((item) => {
                            return item.section_2_info.map((info) => {
                                return info.content.map((item, index) => {
                                    return (
                                        <div className="item-col">
                                            <ProductCardCenter
                                                key={index}
                                                src={item.src}
                                                alt={item.alt}
                                            >
                                                <div className="color-box">
                                                    {Array.isArray(item.color) && item.color.map((item, index) => {
                                                        return (
                                                            <ColorBox
                                                                key={index}
                                                                color={item}
                                                            />
                                                        )
                                                    })}
                                                </div>
                                                <CardInfo
                                                    title={item.subtitle}
                                                    subtitle={item.title}
                                                    text={item.price}
                                                />
                                            </ProductCardCenter>
                                        </div>
                                    )
                                })
                            })
                        })}

                        {mainContent && mainContent.map((item) => {
                            return item.section_2_info.map((info, index) => {
                                const lastInfo = info.more
                                return (
                                    <div className="item-col">
                                        <ProductCardWrapper
                                            key={index}
                                            src={lastInfo.src}
                                            alt={lastInfo.alt}
                                        >
                                            <CardInfo
                                                title={lastInfo.subtitle}
                                                subtitle={lastInfo.title}
                                                text={lastInfo.price}
                                            />
                                        </ProductCardWrapper>
                                    </div>
                                )
                            })
                        })}
                    </div>
                </ScrollBar>

            </div>

            <div className="section section3">
                {mainContent && mainContent.map((item) => {
                    return item.section_3.map((text, index) => {
                        return (
                            <ContantTitle
                                key={index}
                                title={text.title}
                                subtitle={text.subtitle}
                            />
                        )
                    })
                })}

                <ScrollBar>
                    <div className="section-items">
                        {mainContent && mainContent.map((item) => {
                            return item.section_3_info.map((info, index) => {
                                const titleInfo = info.title
                                return (
                                    <div className="item-col">
                                        <ProductCardWrapper
                                            key={index}
                                            src={titleInfo.src}
                                            alt={titleInfo.alt}
                                        >
                                            <CardInfo
                                                title={titleInfo.subtitle}
                                                subtitle={titleInfo.title}
                                                text={titleInfo.price}
                                            />
                                        </ProductCardWrapper>
                                    </div>
                                )
                            })
                        })}

                        {mainContent && mainContent.map((item) => {
                            return item.section_3_info.map((info) => {
                                return info.content.map((text, index) => {
                                    return (
                                        <div className="item-col">
                                            <ProductCardCenter
                                                key={index}
                                                src={text.src}
                                                alt={text.alt}
                                            >
                                                <CardInfo
                                                    title={text.subtitle}
                                                    subtitle={text.title}
                                                    text={text.price}
                                                />
                                            </ProductCardCenter>
                                        </div>
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

export default Main;