import React, { useEffect, useState } from "react";
import { ProductCardWrapper, CardInfo } from "./product-card-wrapper";
import { productTextData } from "../../api";


const SectionProductItem = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const products = await productTextData();
            setData(products);
        };
        fetchData();
    }, []);

    if (data === null) {
        return <div></div>;
    }

    return (
        <div className="section-items">

            {data.map((product, index) => (
                <div className="item-col">
                    <ProductCardWrapper key={index} src={product.src} alt={product.alt}>
                        <CardInfo 
                            cardInfoStyle={product.cardStyle} 
                            subtitleStyle={product.subtitleStyle}
                            priceStyle={product.priceStyle}
                            title={product.title} 
                            price={product.price} 
                            subtitle={product.subtitle} 
                        />
                    </ProductCardWrapper>
                </div>
            ))}
        </div>
    );
}

export default SectionProductItem;