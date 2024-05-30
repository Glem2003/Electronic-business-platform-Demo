import { shopContent } from '../../Content/content.js';

//import component
import HeaderBanner from './headerBanner.js';

const Shop = () => {
    return (
        <div className="shop">
            <div className="menu">
                <div className="title">
                    <h2>text</h2>
                    <h3>more</h3>
                </div>
                <div className="content">content</div>
            </div>

            <div className="section section1">
                {shopContent && shopContent.map((item) => {
                    return item.header && item.header.map((info) => {
                        return (
                            <HeaderBanner
                                title={info.title}
                                text={info.text}
                                link={info.link}
                            />
                        )
                    })
                })}

            </div>

            <div className="section section2">
                <h2>title</h2>
                <form>
                    <div>icon</div>
                    <input type="search" placeholder="search product" />
                </form>
            </div>

            <div className="section section3"></div>

            <div className="section section4"></div>

        </div>

    )
}

export default Shop;