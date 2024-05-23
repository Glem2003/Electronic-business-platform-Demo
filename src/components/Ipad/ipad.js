import React, { useEffect, useState } from "react";
import { iPadProductData } from "../../Api/index.js";
import { ipadContent } from '../../Content/content.js';

// import component
import ProductItem from "../Common/productItem.js";
import SectionTitle from '../Common/sectionTitle.js';
import LinkButton from '../Common/linkButton.js';
import ScrollBar from '../Common/scrollBar.js';
import { ProductCardWrapper, CardInfo } from '../Common/productCard.js';
import ProductInformationCard from "../Common/productInformationCard.js";

const IPad = () => {
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
                    return item.section_3.map((info, index) => {
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
                            return item.product_info_item.map((info, index) => {
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
                        })}
                    </div>
                </ScrollBar>

            </div>

        </div>
    )
}

export default IPad;