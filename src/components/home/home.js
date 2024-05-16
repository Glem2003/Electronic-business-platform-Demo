import HomeBackgroundImages from "./home-background-images";

const Home = () => {

    const IndexLargeSectionItem = ([
        { title: "iPhone 15 Pro", subtitle: "鈦金屬，超堅固、超輕、超 Pro。", color: "white", backgroundImage: "/images/iphone15pro___large.jpg" },
        { title: "iPhone 15", subtitle: "新相機，新設計，新的愛，狂比心", backgroundImage: "/images/hero_iphone15_announce__uuemlcwczn6u_largetall.jpg" },
    ])
    const IndexShortSectionItem = ([
        { title: "MacBook Air", subtitle: "輕裝，重擊，M3 出招" , backgroundImage: "/images/promo_macbook_air_m3__e43jegok3wuq_medium.jpg" },
        { title: "Apple WATCH", subtitle: "智慧升級，亮度、實力再晉級。" , color: "white",backgroundImage: "/images/promo_apple_watch_series_9_order__b3u85rm9zf6u_large.jpg" },
        { title: "MacBook Air", subtitle: "輕裝，重擊，M3 出招" , backgroundImage: "/images/hero_iphone15_announce__uuemlcwczn6u_largetall.jpg" },
        { title: "iPhone 15", subtitle: "新相機，新設計，新的愛，狂比心" , backgroundImage: "/images/hero_iphone15_announce__uuemlcwczn6u_largetall.jpg" },
        { title: "MacBook Air", subtitle: "輕裝，重擊，M3 出招" , backgroundImage: "/images/hero_iphone15_announce__uuemlcwczn6u_largetall.jpg" },
        { title: "iPhone 15", subtitle: "新相機，新設計，新的愛，狂比心" , backgroundImage: "/images/hero_iphone15_announce__uuemlcwczn6u_largetall.jpg" },
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
                        <div className="section-col-6">
                            <HomeBackgroundImages
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                color={item.color}
                                backgroundImage={item.backgroundImage}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;