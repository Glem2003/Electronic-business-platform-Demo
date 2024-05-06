import HomeBackgroundImages from "./home-background-images";

const Home = () => {

    const IndexLargeSectionItem = ([
        { title: "iPhone 15 Pro", subtitle: "鈦金屬，超堅固、超輕、超 Pro。", color: "white", backgroundImage: "/images/iphone15pro___large.jpg" },
        { title: "iPhone 15", subtitle: "新相機，新設計，新的愛，狂比心" },
    ])
    const IndexShortSectionItem = ([
        { title: "MacBook Air", subtitle: "輕裝，重擊，M3 出招" },
        { title: "iPhone 15", subtitle: "新相機，新設計，新的愛，狂比心" },
        { title: "MacBook Air", subtitle: "輕裝，重擊，M3 出招" },
        { title: "iPhone 15", subtitle: "新相機，新設計，新的愛，狂比心" },
        { title: "MacBook Air", subtitle: "輕裝，重擊，M3 出招" },
        { title: "iPhone 15", subtitle: "新相機，新設計，新的愛，狂比心" },
    ])

    return (
        <div className="home">
            <div className="first-section">
                {IndexLargeSectionItem.map((item, index) => {
                    return (
                        <HomeBackgroundImages
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            color={item.color}
                            backgroundImage={item.backgroundImage}
                        />
                    )
                })}

            </div>
            <div className="second-section">
                {IndexShortSectionItem.map((item, index) => {
                    return (
                        <HomeBackgroundImages
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            color={item.color}
                            backgroundImage={item.backgroundImage}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Home;