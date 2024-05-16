import { ProductCardWrapper, CardInfo } from '../main/product-card-wrapper';


const SectionSecondInfoItem = () => {

    const items = [
        {
            subtitle: "輕鬆啟用",
            title: "容易用，容易愛上。",
            cardStyle: {color: "white"},
            src: "https://www.apple.com/v/mac/home/by/images/overview/consider/mac_ease__bvgkz2zdltxy_medium.jpg",
        },
        {
            subtitle: "效能表現與電池續航",
            title: "速度快，持續耐久",
            cardStyle: {color: "white"},
            src: "https://www.apple.com/v/mac/home/by/images/overview/consider/mac_performance__dh5hyac1zf8m_medium.jpg",
        },
        {
            subtitle: "Mac 與 iPhone",
            title: "夢幻組合",
            src: "https://www.apple.com/tw/mac/home/images/overview/consider/mac_iphone__gh1tblkt6bqm_medium.jpg",
        },
        {
            subtitle: "相容性",
            title: (
                <>
                    Mac 可執行<br />
                    你常用的 App。
                </>
            ),
            src: "https://www.apple.com/tw/mac/home/images/overview/consider/mac_compatibility__cu59oukz81ci_medium.jpg",
        },
        {
            subtitle: "隱私權與安全保護",
            title: (
                <>
                    你的私事，<br />
                    誰都無權知道。
                </>
            ),
            cardStyle: {color: "white"},
            src: "https://www.apple.com/v/mac/home/by/images/overview/consider/mac_security__gfwda10khdym_xlarge.jpg",
        },
        {
            subtitle: "經久耐用",
            title: (
                <>
                    精心打造<br />
                    經得起時間考驗。
                </>
            ),
            src: "https://www.apple.com/v/mac/home/by/images/overview/consider/mac_durability__epiwcuk7zkeq_xlarge.jpg",
        },
        {
            subtitle: "Apple 價值理念",
            title: (
                <>
                    我們做的每件事<br />
                    都體現我們的價值理念。
                </>
            ),
            src: "https://www.apple.com/v/mac/home/by/images/overview/consider/mac_values__c9gck9qi4kia_xlarge.jpg",
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