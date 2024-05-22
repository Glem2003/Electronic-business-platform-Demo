import React, { useEffect, useState } from "react";
import { productData, productTextData } from "../../Api";
import { mainContent } from '../../Content/content';

import ContantTitle from "./contantTitle";
import ScrollBar from "../Common/scrollBar";
import ProductItem from "../Common/productItem";
import Section2ProductItem from "./section2ProductItem";
import Section3ProductItem from "./section3ProductItem";
import { CardInfo, ProductCardWrapper } from "../Common/productCard";

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

                        {isProductTextData.map((product, index) => (
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
                    <Section2ProductItem />
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
                    <Section3ProductItem />
                </ScrollBar>

            </div>


        </div>
    )
}

export default Main;