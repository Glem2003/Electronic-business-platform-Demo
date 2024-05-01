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