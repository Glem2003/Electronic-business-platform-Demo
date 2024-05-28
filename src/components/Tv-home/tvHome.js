import React, { useEffect, useState } from "react";
import { tvHomeProductData } from "../../Api";
import { tvfamilyContent } from '../../Content/content.js';

//import component
import ProductItem from "../Common/productItem";
import SectionTitle from '../Common/sectionTitle.js';
import { ProductCardWrapper, CardInfo } from '../Common/productCard.js';
import ButtonItem from '../Common/buttonItem.js';

const TvHome = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const products = await tvHomeProductData();
            setData(products);
        };
        fetchData();
    }, []);

    if (data === null) {
        return <div></div>;
    }

    return (
        <div className="tv-home">

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
                {tvfamilyContent && tvfamilyContent.map((item) => {
                    return item.header && item.header.map((text, index) => {
                        return (
                            <SectionTitle
                                key={index}
                                title={text.title}
                                subtitle={text.text}
                            />
                        )
                    })
                })}
            </div>

            <div className="section section2">
                {tvfamilyContent && tvfamilyContent.map((item) => {
                    return item.banner_item && item.banner_item.map((info, index) => {
                        return (
                            <ProductCardWrapper
                                key={index}
                                src={info.src}
                            >
                                <CardInfo
                                    title={info.title}
                                    subtitle={info.subtitle}
                                    text={info.price}
                                />
                                <ButtonItem 
                                    props={info.link}
                                />
                            </ProductCardWrapper>
                        )
                    })
                })}
            </div>

        </div>

    )
}

export default TvHome;