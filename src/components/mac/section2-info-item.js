import { ProductCardWrapper, CardInfo } from '../main/product-card-wrapper';


const SectionSecondInfoItem = () => {

    const items = [
        {
            subtitle: "輕鬆啟用",
            title: "容易用，容易愛上。",
            src: "/images/MWND3.jpg",
            alt: "MWND3",
        },
        {
            subtitle: "效能表現與電池續航",
            title: "速度快，持續耐久",
            src: "/images/MWND3.jpg",
            alt: "MWND3",
        },
        {
            subtitle: "Mac 與 iPhone",
            title: "夢幻組合",
            src: "/images/MWND3.jpg",
            alt: "MWND3",
        },
        {
            subtitle: "相容性",
            title: (
                <>
                    Mac 可執行<br />
                    你常用的 App。
                </>
            ),
            src: "/images/MWND3.jpg",
            alt: "MWND3",
        },
        {
            subtitle: "先進的相機",
            title: (
                <>
                    玩自拍、<br />
                    玩拍片、<br />
                    玩出新格局。
                </>
            ),
            src: "/images/MWND3.jpg",
            alt: "MWND3",
        },
        {
            subtitle: "先進的相機",
            title: (
                <>
                    速度快，<br />
                    超有感。
                </>
            ),
            src: "/images/MWND3.jpg",
            alt: "MWND3",
        },
        {
            subtitle: "先進的相機",
            title: (
                <>
                    玩自拍、<br />
                    玩拍片、<br />
                    玩出新格局。
                </>
            ),
            src: "/images/MWND3.jpg",
            alt: "MWND3",
        },
        {
            subtitle: "先進的相機",
            title: (
                <>
                    速度快，<br />
                    超有感。
                </>
            ),
            src: "/images/MWND3.jpg",
            alt: "MWND3",
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