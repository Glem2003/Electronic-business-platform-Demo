import React, { useEffect, useState } from "react";
import { tvHomeProductData } from "../../Api";
//import { tvfamilyContent } from '../../Content/content.js';

//import component
import ProductItem from "../Common/productItem";

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
                <h1>05/28 beginner</h1>
            </div>

        </div>

    )
}

export default TvHome;