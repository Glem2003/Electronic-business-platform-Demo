import React, { useEffect, useState } from "react";
import ProductItem from "../common/productItem";
import { productData } from "../../api";


function ProductItems() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const products = await productData();
            setData(products);
        };
        fetchData();
    }, []);

    if (data === null) {
        return <div></div>;
    }

    return (
        <div className="product-item">
            {data.map((item) => (
                <ProductItem 
                    key={item.id}
                    text={item.name}
                    alt={item.name}
                    src={item.src}
                />
            ))}
        </div>
    );
}

export default ProductItems;