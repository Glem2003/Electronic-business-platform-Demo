import { home } from '../../Content/index.js';

// import component
import WrapperCard from "../Common/wrapperCard.js";
import ButtonItem from "../Common/buttonItem.js";

const Home = () => {
    return (
        <div className="home">
            <div className="first-section">
                {home.homeLargeBanner && home.homeLargeBanner.map((item, index) => {
                    return (
                        <WrapperCard
                            key={index}
                            className={`index-images item-${index + 1}`}
                            title={item.title}
                            subtitle={item.subtitle}
                        >
                            <ButtonItem
                                props={item.btn_text}
                            />
                        </WrapperCard>
                    )
                })}

            </div>
            <div className="second-section">
                {home.homeSmallBanner && home.homeSmallBanner.map((item, index) => {
                    return (
                        <div className="section-col-6">
                            <WrapperCard
                                key={index}
                                className={`index-images item-${index + 1}`}
                                title={item.title}
                                subtitle={item.subtitle}
                            >
                                <ButtonItem
                                    props={item.btn_text}
                                />
                            </WrapperCard>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;