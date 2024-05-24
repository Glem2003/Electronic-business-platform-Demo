import React, { useEffect, useState } from "react";
import { watchProductData } from "../../Api/index.js";
import { watchContent } from '../../Content/content.js';

//import component
import ProductItem from "../Common/productItem.js";
import SectionTitle from '../Common/sectionTitle.js';

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

        </div>

    )
}

export default Watch;