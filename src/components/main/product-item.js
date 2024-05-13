import React from "react";
import ProductItem from "../common/product-item";
import { productData } from "../../api";


function ProductItems() {
    productData().then((productData) => {
        console.log(productData)
    })

    return (
        <div className="product-item">
            
            

            <ProductItem
                src="/images/mac.png"
                alt="Mac"
                text="Mac"
            />

            <ProductItem
                src="/images/iphone.png"
                alt="iPhone"
                text="iPhone"
            />

            <ProductItem
                src="/images/ipad.png"
                alt="iPad"
                text="iPad"
            />

            <ProductItem
                src="/images/Applewatch.png"
                alt="Apple Watch"
                text="Apple Watch"
            />

            <ProductItem
                src="/images/airpods.png"
                alt="Airpods"
                text="Airpods"
            />

            <ProductItem
                src="/images/airtags.png"
                alt="AirTag"
                text="AirTag"
            />

            <ProductItem
                src="/images/appletv.png"
                alt="Apple TV 4K"
                text="Apple TV 4K"
            />

            <ProductItem
                src="/images/homepod.png"
                alt="HomePod"
                text="HomePod"
            />

            <ProductItem
                src="/images/accessories.png"
                alt="配件"
                text="配件"
            />

            <ProductItem
                src="/images/giftcards.png"
                alt="Apple Store 禮品卡"
                text="Apple Store 禮品卡"
            />

        </div>
    )
}

export default ProductItems;