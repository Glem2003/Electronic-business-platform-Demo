import { ProductCardWrapper, CardInfo } from '../main/product-card-wrapper';


const SectionSecondInfoItem = () => {

    const items = [
        {
            subtitle: "先進的相機",
            title: (
                <>
                    玩自拍、<br />
                    玩拍片、<br />
                    玩出新格局。
                </>
            ),
            cardStyle: {color: "white"},
            src: "https://www.apple.com/v/iphone/home/bu/images/overview/consider/camera__cerpczobiwwi_medium.jpg",
        },
        {
            subtitle: "Apple 設計的晶片",
            title: (
                <>
                    速度快，<br />
                    超有感。
                </>
            ),
            src: "https://www.apple.com/v/iphone/home/bu/images/overview/consider/chip__cpj93oio1oya_xlarge.jpg",
            cardStyle: {color: "white"}
        },
        {
            subtitle: "電池",
            title: (
                <>
                    超強續航<br />
                    動力十足。
                </>
            ),
            src: "https://www.apple.com/v/iphone/home/bu/images/overview/consider/battery__f9km4l6jlv6u_xlarge.jpg",
            cardStyle: {color: "white"}
        },
        {
            subtitle: "創新",
            title: (
                <>
                    精心設計，<br />
                    精美又耐用。
                </>
            ),
            src: "https://www.apple.com/v/iphone/home/bu/images/overview/consider/innovation__b03hhgj3xx9e_medium.jpg",
            cardStyle: {color: "white"}
        },
        {
            subtitle: "設定你的 iPhone 風格",
            title: (
                <>
                    徹徹底底<br />
                    就很你。
                </>
            ),
            src: "https://www.apple.com/tw/iphone/home/images/overview/consider/personalize__f51wh6aiosya_medium.jpg",
            cardStyle: {color: "white"}
        },
        {
            subtitle: "倍感安心",
            title: (
                <>
                    各種實用的功能，<br />
                    有備無患。
                </>
            ),
            src: "https://www.apple.com/tw/iphone/home/images/overview/consider/safety__d9zsvrorjfcm_xlarge.jpg",
            cardStyle: {color: "white"}
        },
        {
            subtitle: "隱私權",
            title: (
                <>
                    你的資料，<br />
                    保存在安全的地方。
                </>
            ),
            src: "https://www.apple.com/v/iphone/home/bu/images/overview/consider/privacy__cum61s425o6e_medium.jpg",
            cardStyle: {color: "white"}
        },
        {
            subtitle: "環境",
            title: "再回收、再利用、再循環。",
            src: "https://www.apple.com/v/iphone/home/bu/images/overview/consider/environment__d1g8uhlvrccy_xlarge.jpg",
        },
    ]

    return (
        <div className="section-items">
            {items.map((item, index) => (
                <div className="item-col">
                    <ProductCardWrapper key={index} src={item.src} alt={item.alt}>
                        <CardInfo
                            cardInfoStyle={item.cardStyle}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    </ProductCardWrapper>
                </div>
            ))}
        </div>
    )
}

export default SectionSecondInfoItem;