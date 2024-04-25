import DafaultLayout from "../components/dafault-layout/dafault-layout";
import IndexBackgroundImages from "../components/index/index-background-images";

const HomePages = () => {

    const IndexLargeSectionItem = ([
        {title: "iPhone 15 Pro", subtitle:"鈦金屬，超堅固、超輕、超 Pro。",color: "white",backgroundImage: "/images/iphone15pro___large.jpg"},
        {title: "iPhone 15", subtitle:"新相機，新設計，新的愛，狂比心" },
    ])
    const IndexShortSectionItem = ([
        {title: "MacBook Air", subtitle:"輕裝，重擊，M3 出招" , width: "58%"},
        {title: "iPhone 15", subtitle:"新相機，新設計，新的愛，狂比心" , width: "58%"},
    ])

    return (
        <DafaultLayout>
            <div className="index-section">
                <div className="first-section">
                    {IndexLargeSectionItem.map((item,index) =>{
                        return(
                            <IndexBackgroundImages
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                color={item.color}
                                width={item.width}
                                backgroundImage= {item.backgroundImage}
                            />
                        )
                    })}
                </div>
                <div className="second-section">
                {IndexShortSectionItem.map((item,index) =>{
                        return(
                            <IndexBackgroundImages
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                color={item.color}
                                width={item.width}
                                backgroundImage= {item.backgroundImage}
                            />
                        )
                    })}
                </div>
            </div>
        </DafaultLayout>
    )
}

export default HomePages;