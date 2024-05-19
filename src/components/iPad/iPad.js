import React, { useEffect, useState } from "react";
import { iPadProductData } from "../../api";
import ProductItem from "../common/product-item";

import SectionTitle from '../common/section-title.js';
import ScrollBar from '../main/scroll-bar.js';
import LinkButton from '../common/link-button.js';
import { ProductCardWrapper, CardInfo } from '../common/product-card.js';

import { ipadContent } from '../../content/content.js';

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
            <div className="section section1">
                {ipadContent.map((item) => {
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
                        {ipadContent.map((item) => {
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

export default IPad;