import { shopContent } from '../../Content/content.js';

//import component
import HeaderBanner from './headerBanner.js';
import Search from '../Common/search.js';
import MeunList from './menuList.js';

const Shop = () => {
    return (
        <div className="shop">
            <div className="menu">
                <div className="title">
                    <h2>text</h2>
                    <h3>more</h3>
                </div>
                <div className="content">
                    <ul>
                        <h4>A</h4>
                        <div className="item">
                            <div className="list">
                                <li>text</li>
                                <li>text</li>
                                <li>text</li>
                                <li>text</li>
                                <li>text</li>
                                <li>text</li>
                            </div>
                        </div>
                        
                    </ul>
                    <MeunList/>
                </div>
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
                {shopContent && shopContent.map((item) => {
                    return item.search && item.search.map((info) => {
                        return (
                            <Search
                                title={info.title}
                                placeholderText={info.input_text}
                            />
                        )
                    })
                })}
            </div>

            <div className="section section3">
                <div className='title'>
                    <ul>
                        <li>text</li>
                        <li>text</li>
                    </ul>
                </div>
                <div className="container">
                    <div className="boxItem">
                        <div className="box"></div>
                        <h4>1</h4>
                    </div>
                    <div className="boxItem">
                        <div className="box"></div>
                        <h4>2</h4>
                    </div>
                    <div className="boxItem">
                        <div className="box"></div>
                        <h4>3</h4>
                    </div>
                    <div className="boxItem">
                        <div className="box"></div>
                        <h4>4</h4>
                    </div>
                    <div className="boxItem">
                        <div className="box"></div>
                        <h4>5</h4>
                    </div>
                </div>
            </div>

            <div className="section section4"></div>

        </div>

    )
}

export default Shop;