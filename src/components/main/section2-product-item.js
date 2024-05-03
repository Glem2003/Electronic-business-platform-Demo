import ColorBox from "./color-box";
import { ProductCardCenter, CardInfo } from "./product-card-center";
import { ProductCardWrapper } from "./product-card-wrapper";

const Section2ProductItem = () => {

    const productTitle = [
        {
            title: "跟緊潮流新色。",
            price: "看看你最愛的配件新色彩",
            src: "/images/accessories.jpg",
            alt: "accessories",
            priceStyle: { color: "gray" }
        }
    ]

    const productMore = [
        {
            title: "探索所有配件。",
            src: "/images/accessories-explore.jpg",
            alt: "accessories-explore"
        }
    ]

    const products = [
        {
            subtitle: "全新",
            title: "iPhone 15 MagSafe 矽膠保護殼 - 淡藍色",
            price: "NT$1,590",
            src: "/images/MWND3.jpg",
            alt: "MWND3",
            colorItems: [
                { className: "yellow", style: "yellow" },
                { className: "red", style: "red" },
            ]
        },
        {
            title: "Tech21 FlexQuartz，適用於iPhone 15 (MegSafe 相容) - ...",
            price: "NT$1,490",
            src: "/images/HRDT2.jpg",
            alt: "HRDT2",
            colorItems: [
                { className: "yellow", style: "yellow" },
                { className: "red", style: "red" },
            ],
        },
        {
            title: "Tech21 EvoPink，適用於AirTag (2件裝)",
            price: "NT$990",
            src: "/images/HRDZ2.jpg",
            alt: "HRDZ2",
            colorItems: [
                { className: "yellow", style: "yellow" },
                { className: "red", style: "red" },
            ],
        },
        {
            subtitle: "全新",
            title: "45 公釐淡薄荷色運動型錶環",
            price: "NT$1,600",
            src: "/images/MW4Q3.jpg",
            alt: "MW4Q3",
            colorItems: [
                { className: "yellow", style: "yellow" },
                { className: "red", style: "red" },
            ]
        },
        {
            subtitle: "全新",
            title: "45 公釐日照色運動型錶帶 - M/L",
            price: "NT$1,600",
            src: "/images/MWMW3ref.jpg",
            alt: "MWMW3ref",
            colorItems: [
                { className: "yellow", style: "yellow" },
                { className: "red", style: "red" },
            ]
        },
        {
            title: "iPhone MagSafe 精細織紋卡套",
            price: "NT$1,890",
            src: "/images/MT263.jpg",
            alt: "MT263",
            colorItems: [
                { className: "yellow", style: "yellow" },
                { className: "red", style: "red" },
            ],
        },
        {
            title: "iPhone 15 Pro MagSafe 精細織紋保護套 - 萬年青色",
            price: "NT$1,890",
            src: "/images/MT4U3.jpg",
            alt: "MT4U3",
            colorItems: [
                { className: "yellow", style: "yellow" },
                { className: "red", style: "red" },
            ],
        },
        {
            title: "AirTag 精細織紋鑰匙圈 - 珊瑚色",
            price: "NT$1,290",
            src: "/images/MT2M3.jpg",
            alt: "MT2M3",
            colorItems: [],
        }
    ]

    return (

        <div className="section-items">

            {productTitle.map((item, index) => (
                <div className="item-col">
                    <ProductCardWrapper key={index} src={item.src} alt={item.alt}>
                        <CardInfo priceStyle={item.priceStyle} title={item.title} price={item.price} subtitle={item.subtitle} />
                    </ProductCardWrapper>
                </div>
            ))}


            {products.map((product, index) => (
                <div className="item-col" key={index} >
                    <ProductCardCenter src={product.src} alt={product.alt}>
                        <ColorBox colorItems={product.colorItems} />
                        <CardInfo
                            subtitleStyle={product.subtitleStyle}
                            priceStyle={product.priceStyle}
                            title={product.title}
                            price={product.price}
                            subtitle={product.subtitle}
                        />
                    </ProductCardCenter>
                </div>
            ))}


            {productMore.map((item, index) => (
                <div className="item-col">
                    <ProductCardWrapper key={index} src={item.src} alt={item.alt}>
                        <CardInfo title={item.title} price={item.price} subtitle={item.subtitle} />
                    </ProductCardWrapper>
                </div>
            ))}

        </div>
    )
}

export default Section2ProductItem;