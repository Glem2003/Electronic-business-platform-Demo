import React, { useEffect, useState } from "react";
import { macProductData } from "../../api";
import ProductItem from "../common/product-item";

import SectionTitle from '../common/section-title.js';
import MacSecondSection from './mac-section2.js';
import MacThirdSection from './mac-section3.js';

import '../../sass/component/product-item.sass';

const Mac = () => {
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
                <SectionTitle title="Mac" subtitle="你能想到的，Mac 就能做到。" />
            </div>
            <MacSecondSection />
            <MacThirdSection />
        </div>
    )
}

export default Mac;