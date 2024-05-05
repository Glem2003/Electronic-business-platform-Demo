import React from 'react';
import ProductItem from "../common/product-item";

const IphoneProductItems = () => {

    React.useEffect(() => {
        fetch('/iphone-product-data')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    })

    return (
        <div className="Product-items">
            <ProductItem
                src="/images/mac.png"
                alt="比較"
                text="比較"
            />
            <ProductItem
                src="/images/mac.png"
                alt="AirPods"
                text="AirPods"
            />
            <ProductItem
                src="/images/mac.png"
                alt="AirTag"
                text="AirTag"
            />
            <ProductItem
                src="/images/mac.png"
                alt="配件"
                text="配件"
            />
            <ProductItem
                src="/images/mac.png"
                alt="IOS 17"
                text="IOS 17"
            />
            <ProductItem
                src="/images/mac.png"
                alt="選購IPhone"
                text="選購IPhone"
            />
        </div>
    )
}

export default IphoneProductItems;