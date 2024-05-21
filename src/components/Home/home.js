import HomeBackgroundImages from "./homeBackgroundImages";
import { homeLargeBanner, homeSmallBanner } from '../../Content/content.js';
import ButtonItem from "../Common/buttonItem.js";

const Home = () => {
    return (
        <div className="home">
            <div className="first-section">
                {homeLargeBanner && homeLargeBanner.map((item, index) => {
                    return (
                        <HomeBackgroundImages
                            key={index}
                            className={`index-images item-${index + 1}`}
                            title={item.title}
                            subtitle={item.subtitle}
                        >
                            <ButtonItem
                                props={item.btn_text}
                            />
                        </HomeBackgroundImages>
                    )
                })}

            </div>
            <div className="second-section">
                {homeSmallBanner && homeSmallBanner.map((item, index) => {
                    return (
                        <div className="section-col-6">
                            <HomeBackgroundImages
                                key={index}
                                className={`index-images item-${index + 1}`}
                                title={item.title}
                                subtitle={item.subtitle}
                            >
                                <ButtonItem
                                    props={item.btn_text}
                                />
                            </HomeBackgroundImages>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;