import React, { useEffect, useState } from "react";
import { iPadProductData } from "../../api";
import ProductItem from "../common/product-item";

import '../../sass/component/product-item.sass';

const IPad = () =>{
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
    return(
        <div className="iPad">
            <div className="Product-items">
                {data.map((item)=>{
                    return(
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
        </div>
    )
}

export default IPad;