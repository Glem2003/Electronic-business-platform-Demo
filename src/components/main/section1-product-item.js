import { ProductCardWrapper, CardInfo } from "./product-card-wrapper";

const SectionProductItem = () => {

    const products = [
        {
            subtitle: "MACBOOK AIR",
            title: "為行動而設計。",
            price: "NT$32,900 起",
            src: "/images/macbook.jpg",
            alt: "MACBOOK AIR",
            subtitleStyle: { color: "gray"},
            priceStyle: {color: "gray"}

        },
        {
            subtitle: "IPHONE 15 PRO",
            title: "鈦金屬",
            price: "NT$36,900 起",
            src: "/images/iphone-15-pro.jpg",
            alt: "IPHONE 15 PRO",
            cardStyle: { color: "white"}
        },
        {
            subtitle: "APPLE WATCH SERIES 9",
            title: "智慧升級，亮度、實力再晉級。",
            price: "NT$13,500 起",
            src: "/images/watch-s9.jpg",
            alt: "APPLE WATCH SERIES 9",
            cardStyle: { color: "white"}
        },
        {
            subtitle: "IPAD",
            title: "可愛、可畫，可圈可點。",
            price: "NT$14,900 起",
            src: "/images/ipad.jpg",
            alt: "IPAD",
            subtitleStyle: { color: "gray"},
            priceStyle: {color: "gray"}
        },
        {
            subtitle: "IPHONE 15",
            title: "新的愛，狂比心。",
            price: "NT$29,900 起",
            src: "/images/iphone-15.jpg",
            alt: "IPHONE 15",
            subtitleStyle: { color: "gray"},
            priceStyle: {color: "gray"}
        },
        {
            subtitle: "MACBOOK PRO",
            title: "炫技，炫目。",
            price: "NT$54,900 起",
            src: "/images/macbook-pro.jpg",
            alt: "MACBOOK PRO",
            subtitleStyle: { color: "gray"},
            priceStyle: {color: "gray"}
        },
        {
            subtitle: "APPLE WATCH ULTRA 2",
            title: "征途，再超越。",
            price: "NT$27,900 起",
            src: "/images/watch-ultra.jpg",
            alt: "APPLE WATCH ULTRA 2",
            subtitleStyle: { color: "gray"},
            priceStyle: {color: "gray"}
        },
        {
            subtitle: "IPAD PRO",
            title: "來自 M2 的超強驅動。",
            price: "NT$27,900 起",
            src: "/images/ipad-pro.jpg",
            alt: "IPAD PRO",
            cardStyle: { color: "white"}
        },
        {
            subtitle: "APPLE WATCH SE",
            title: "超有才，輕鬆愛",
            price: "NT$27,900 起",
            src: "/images/watch-se.jpg",
            alt: "APPLE WATCH SE",
            subtitleStyle: { color: "gray"},
            priceStyle: {color: "gray"}
        },
        {
            subtitle: "全新",
            title: "吸睛新色，腕上放閃。",
            price: "選購最新款式與顏色的錶帶",
            src: "/images/watch-bands.jpg",
            alt: "APPLE WATCH SE",
            subtitleStyle: { color: "gray"},
            priceStyle: {color: "gray"}
        },
    ];

    return (
        <div className="sec-item">

            {products.map((product, index) => (
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