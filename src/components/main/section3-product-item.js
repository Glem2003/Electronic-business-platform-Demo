import ColorBox from "./color-box";
import { ProductCardCenter, CardInfo } from "./product-card-center";
import { ProductCardWrapper } from "./product-card-wrapper";

const Section3ProductItem = () => {

    const productTitle = [
        {
            title: "免費試用 Apple Music 6 個月。",
            price: "隱附於 iphone、HomePad、AirPods 或特定 Beats 產品。",
            src: "/images/applemusic.jpg",
            alt: "accessories"
        }
    ]

    const products = [
        {
            subtitle: "免額外付費鐫刻服務",
            title: "AirPods Pro (第2代) 搭配 MagSafe 充電盒 (USB-C)",
            price: "NT$7,490",
            src: "/images/MTJV3.jpg",
            alt: "MTJV3",
            colorItems:[
                { className: "yellow", style: "yellow" },
                { className: "red", style: "red" },
            ]
        },
        {
            title: "HomePod - 午夜色",
            price: "NT$9,300",
            src: "/images/homepod-select-midnight-202210.jpg",
            alt: "homepod-midnight",
            colorItems:[
                { className: "yellow", style: "yellow" },
                { className: "red", style: "red" },
            ]
        },
        {
            title: "HomePod mini - 黃色",
            price: "NT$3,000",
            src: "/images/homepod-mini-select-yellow-202110.jpg",
            alt: "homepod-mini",
            colorItems:[
                { className: "yellow", style: "yellow" },
                { className: "red", style: "red" },
            ]
        },
        {
            subtitle: "免額外付費鐫刻服務",
            title: "AirPods Max - 銀色",
            price: "NT$17,990",
            src: "/images/airpods-max-select-silver-202011.jpg",
            alt: "airpods-max-silver",
            colorItems:[
                { className: "yellow", style: "yellow" },
                { className: "red", style: "red" },
            ]
        },
        {
            subtitle: "免額外付費鐫刻服務",
            title: "AirPods (第 3 代) 搭配 Lightning 充電盒",
            price: "NT$5,590",
            src: "/images/MME73.jpg",
            alt: "MME73",
            colorItems:[
                { className: "yellow", style: "yellow" },
                { className: "red", style: "red" },
            ]
        },
        {
            title: "Beats Studio Buds + 真無線降噪耳塞式耳機 — 透明",
            price: "NT$5,990",
            src: "/images/MQLK3.jpg",
            alt: "MQLK3",
            colorItems:[
                { className: "yellow", style: "yellow" },
                { className: "red", style: "red" },
            ]
        }
    ]

    return (

        <div className="section-items">

            {productTitle.map((item, index) => (
                <div className="item-col">
                    <ProductCardWrapper key={index} src={item.src} alt={item.alt}>
                        <CardInfo title={item.title} price={item.price} subtitle={item.subtitle} />
                    </ProductCardWrapper>
                </div>
            ))}


            {products.map((product, index) => (
                <div className="item-col">
                    <ProductCardCenter key={index} src={product.src} alt={product.alt}>
                        <ColorBox colorItems={product.colorItems} />
                        <CardInfo style={{ color: product.style }} title={product.title} price={product.price} subtitle={product.subtitle} />
                    </ProductCardCenter>
                </div>
            ))}

        </div>
    )
}

export default Section3ProductItem;