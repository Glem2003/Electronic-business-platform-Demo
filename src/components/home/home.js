import HomeBackgroundImages from "./home-background-images";
import { homeLargeBanner, homeSmallBanner } from '../../content/content.js';

const Home = () => {
    return (
        <div className="home">
            <div className="first-section">
                {homeLargeBanner.map((item, index) => {
                    return (
                        <HomeBackgroundImages
                            key={index}
                            className={`index-images item-${index + 1}`}
                            title={item.title}
                            subtitle={item.subtitle}
                        />
                    )
                })}

            </div>
            <div className="second-section">
                {homeSmallBanner.map((item, index) => {
                    return (
                        <div className="section-col-6">
                            <HomeBackgroundImages
                                key={index}
                                className={`index-images item-${index + 1}`}
                                title={item.title}
                                subtitle={item.subtitle}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;