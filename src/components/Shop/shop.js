import { shopContent } from '../../Content/content.js';

//import component
import Slider from 'react-slick';
import HeaderBanner from './headerBanner.js';
import Search from '../Common/search.js';
import MenuList from './menuList.js';

//import sass
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Shop = () => {
    const settings = {
        dots : true,
        speed: 500,
        slidesToShow : 3,
        slidesToScroll: 3,
        infinite: false
    }

    return (
        <div className="shop">
            <div className="menu">
                <div className="title">
                    {shopContent && shopContent.map((i) => {
                        return i.menu && i.menu.map((b) => {
                            return (
                                <>
                                    <h2>{b.title}</h2>
                                    <h3>{b.subtitle}</h3>
                                </>
                            )
                        })
                    })}
                </div>
                <div className="content">
                    {shopContent && shopContent.map((i) => {
                        return i.menu && i.menu.map((c) => {
                            return c.menu_item && c.menu_item.map((l, index) => {
                                return (
                                    <MenuList
                                        key={index}
                                        title={l.title}
                                        menuData={l.list}
                                    />
                                )
                            })
                        })
                    })}
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

            <div className="section section4">
                <div className="title">
                    <h1>title</h1>
                    <h5>link</h5>
                </div>
                <div className="content">
                    <Slider {...settings}>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                        <div>6</div>
                        <div>7</div>
                        <div>8</div>
                        <div>9</div>
                        <div>10</div>
                        <div></div>
                        <div></div>
                    </Slider>
                </div>
            </div>

        </div>

    )
}

export default Shop;