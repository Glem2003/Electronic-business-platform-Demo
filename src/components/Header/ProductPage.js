import React from "react";
import ProItem from "../Common/ProItem";

function ProductPage() {
    return (
        <div className="product-item">

            <ProItem
                src="/images/mac.png"
                alt="Mac"
                text="Mac"
            />

            <ProItem
                src="/images/iPhone.png"
                alt="iPhone"
                text="iPhone"
            />

            <ProItem
                src="/images/iPad.png"
                alt="iPad"
                text="iPad"
            />

            <ProItem
                src="/images/Applewatch.png"
                alt="Apple Watch"
                text="Apple Watch"
            />

            <ProItem
                src="/images/airpods.png"
                alt="Airpods"
                text="Airpods"
            />

            <ProItem
                src="/images/airTags.png"
                alt="AirTag"
                text="AirTag"
            />

            <ProItem
                src="/images/appletv.png"
                alt="Apple TV 4K"
                text="Apple TV 4K"
            />

            <ProItem
                src="/images/homePod.png"
                alt="HomePod"
                text="HomePod"
            />

            <ProItem
                src="/images/accessories.png"
                alt="配件"
                text="配件"
            />

            <ProItem
                src="/images/giftcards.png"
                alt="Apple Store 禮品卡"
                text="Apple Store 禮品卡"
            />

        </div>
    )
}

export default ProductPage;