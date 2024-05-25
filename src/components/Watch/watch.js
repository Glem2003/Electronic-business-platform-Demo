import React, { useEffect, useState } from "react";
import { watchProductData } from "../../Api/index.js";
import { watchContent } from '../../Content/content.js';

//import component
import ProductItem from "../Common/productItem.js";
import SectionTitle from '../Common/sectionTitle.js';
import ScrollBar from '../Common/scrollBar.js';
import LinkButton from '../Common/linkButton.js';
import { ProductCardWrapper, CardInfo } from '../Common/productCard.js';
import ProductInformationCard from '../Common/productInformationCard.js';
import ButtonItem from "../Common/buttonItem.js";

const Watch = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const products = await watchProductData();
            setData(products);
        };
        fetchData();
    }, []);

    if (data === null) {
        return <div></div>;
    }

    return (
        <div className="watch">
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
                {watchContent && watchContent.map((item) => {
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
                {watchContent && watchContent.map((item) => {
                    return item.section_2 && item.section_2.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                        />
                    ));
                })}
                <ScrollBar>
                    <div className="section-items">
                        {watchContent && watchContent.map((item) => {
                            return item.section_2 && item.section_2.map((items) => {
                                return items.info_item && items.info_item.map((info, index) => {
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
                {watchContent && watchContent.map((item) => {
                    return item.section_3 && item.section_3.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                            subtitle={info.subtitle}
                        />
                    ));
                })}

                <ScrollBar>
                    <div className="product-items">
                        {watchContent && watchContent.map((item) => {
                            return item.section_3 && item.section_3.map((items) => {
                                return items.product_info_item && items.product_info_item.map((info, index) => {
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
                {watchContent && watchContent.map((item) => {
                    return item.section_4 && item.section_4.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                            subtitle={info.subtitle}
                        />
                    ));
                })}

                {watchContent && watchContent.map((item) => {
                    return item.section_4 && item.section_4.map((items) => {
                        return items.section_4_info.map((info) => {
                            return (
                                <ProductCardWrapper>
                                    <div className="text-info">
                                        <CardInfo
                                            title={info.title}
                                            text={info.text}
                                        />
                                        <ButtonItem
                                            props={info.link}
                                        />
                                    </div>
                                </ProductCardWrapper>
                            )
                        })
                    })
                })}
            </div>

        </div>

    )
}

export default Watch;