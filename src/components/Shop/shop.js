import { shopContent } from '../../Content/content.js';

//import component
import Slider from 'react-slick';
import HeaderBanner from './headerBanner.js';
import Search from '../Common/search.js';
import MenuList from './menuList.js';
import ShopItemCard from './shopItemCard.js';

//import sass
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Shop = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
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
                    {shopContent.map((item) => {
                        return item.ipad_item.map((info) => {
                            return (
                                <>
                                    <h1>{info.title}</h1>
                                    <h4>{info.subtitle}</h4>
                                </>
                            )
                        })
                    })}

                </div>
                <div className="content">
                    <Slider {...settings}>
                        {shopContent && shopContent.map((item) => {
                            return item.ipad_item.map((info) => {
                                return info.product_item.map((item, index) => {
                                    return (
                                        <ShopItemCard
                                            key={index}
                                            src={item.src}
                                            colors={item.color}
                                            ps={item.postscript}
                                            title={item.title}
                                            price={item.price}
                                        />
                                    )
                                })
                            })
                        })}
                    </Slider>
                </div>
            </div>

        </div>

    )
}

export default Shop;