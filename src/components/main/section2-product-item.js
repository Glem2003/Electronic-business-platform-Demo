import { ProductCardCenter, CardInfo } from "./product-card-center";
import { ProductCardWrapper } from "./product-card-wrapper";

const Section2ProductItem = () => {

    const productTitle = [
        {
            title: "跟緊潮流新色。",
            price: "看看你最愛的配件新色彩",
            src: "/images/accessories.jpg",
            alt: "accessories"
        }
    ]

    const productMore = [
        {
            title:"探索所有配件。",
            src:"/images/accessories-explore.jpg",
            alt:"accessories-explore"
        }
    ]

    const products = [
        {
            subtitle: "全新",
            title: "iPhone 15 MagSafe 矽膠保護殼 - 淡藍色",
            price: "NT$1,590",
            src: "/images/MWND3.jpg",
            alt: "MWND3"
        },
        {
            subtitle: "--",
            title: "Tech21 FlexQuartz，適用於iPhone 15 (MegSafe 相容) - ...",
            price: "NT$1,490",
            src: "/images/HRDT2.jpg",
            alt: "HRDT2"
        },
        {
            subtitle: "--",
            title: "Tech21 EvoPink，適用於AirTag (2件裝)",
            price: "NT$990",
            src: "/images/HRDZ2.jpg",
            alt: "HRDZ2"
        },
        {
            subtitle: "全新",
            title: "45 公釐淡薄荷色運動型錶環",
            price: "NT$1,600",
            src: "/images/MW4Q3.jpg",
            alt: "MW4Q3"
        },
        {
            subtitle: "全新",
            title: "45 公釐日照色運動型錶帶 - M/L",
            price: "NT$1,600",
            src: "/images/MWMW3ref.jpg",
            alt: "MWMW3ref"
        },
        {
            subtitle: "--",
            title: "iPhone MagSafe 精細織紋卡套",
            price: "NT$1,890",
            src: "/images/MT263.jpg",
            alt: "MT263"
        },
        {
            subtitle: "--",
            title: "iPhone 15 Pro MagSafe 精細織紋保護套 - 萬年青色",
            price: "NT$1,890",
            src: "/images/MT4U3.jpg",
            alt: "MT4U3"
        },
        {
            subtitle: "--",
            title: "AirTag 精細織紋鑰匙圈 - 珊瑚色",
            price: "NT$1,290",
            src: "/images/MT2M3.jpg",
            alt: "MT2M3"
        }
    ]

    return (

        <div className="sec-item">

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
                        <CardInfo style={{ color: product.style }} title={product.title} price={product.price} subtitle={product.subtitle} />
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