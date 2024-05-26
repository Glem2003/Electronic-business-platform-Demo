import React, { useEffect, useState } from "react";
import { airpodProductData } from "../../Api/index.js";
import { airpodsContent } from '../../Content/content.js';

// import component
import ProductItem from "../Common/productItem.js";
import ProductInfoItem from "../Common/productInfoItem";
import WrapperCard from '../Common/wrapperCard.js';
import ButtonItem from '../Common/buttonItem.js';

const Airpods = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const products = await airpodProductData();
            setData(products);
        };
        fetchData();
    }, []);

    if (data === null) {
        return <div></div>;
    }

    return (
        <div className="airpods">

            <div className="Product-items">
                {data && data.map((item) => {
                    return (
                        <ProductItem
                            key={item.id}
                            text={item.text}
                            alt={item.text}
                            src={item.src}
                        />
                    )
                })}
            </div>

            {airpodsContent && airpodsContent.map((item) => {
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
                {airpodsContent && airpodsContent.map((item) => {
                    return item.banner_item && item.banner_item.map((item, index) => {
                        return (
                            <WrapperCard
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                className={`card-item`}
                            >
                                <div className="wrapper-item">
                                    <div></div>
                                    <div></div>
                                </div>

                                <ButtonItem
                                    props={item.link}
                                />
                            </WrapperCard>  
                        )
                    })
                })}
            </div>


        </div>
    )
}

export default Airpods;