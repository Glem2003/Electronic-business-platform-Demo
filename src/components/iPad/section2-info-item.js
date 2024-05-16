import { ProductCardWrapper, CardInfo } from '../main/product-card-wrapper';


const SectionSecondInfoItem = () => {

    const items = [
        {
            subtitle: "生產力",
            title: (
                <>
                    任何地方，<br />
                    都是工作的好地方。
                </>
            ),
            cardStyle: { color: "white" },
            src: "https://www.apple.com/v/ipad/home/cj/images/overview/consider/fc_productivity__d55aee5so6ky_medium.jpg",
        },
        {
            subtitle: "創造力",
            title: "讓你的藝術天分馳騁",
            src: "https://www.apple.com/v/ipad/home/cj/images/overview/consider/fc_creativity__gcfv7x90x42u_medium.jpg",
            cardStyle: { color: "white" }
        },
        {
            subtitle: "學習",
            title: (
                <>
                    課堂，<br />
                    無處不在。
                </>
            ),
            src: "https://www.apple.com/v/ipad/home/cj/images/overview/consider/fc_learning__es1tt702bf6u_medium.jpg",
            cardStyle: { color: "white" }
        },
        {
            subtitle: "娛樂",
            title: (
                <>
                    休閒、玩樂、打遊戲，<br />
                    都奉陪。
                </>
            ),
            src: "https://www.apple.com/v/ipad/home/cj/images/overview/consider/fc_entertainment__dcynvyyoe7iq_medium.jpg",
            cardStyle: { color: "white" }
        },
        {
            subtitle: "Apple Pencil",
            title: (
                <>
                    隨心所想<br />
                    隨筆記下。
                </>
            ),
            src: "https://www.apple.com/tw/ipad/home/images/overview/consider/fc_pencil__coz76i7lwsuq_medium.jpg",
            cardStyle: { color: "white" }
        },
        {
            subtitle: "iPadOS + App",
            title: (
                <>
                    日常必備超能力，<br />
                    內建其中。
                </>
            ),
            src: "https://www.apple.com/tw/ipad/home/images/overview/consider/fc_ipados__urrua12bwaqy_medium.jpg",
            cardStyle: { color: "white" }
        }
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