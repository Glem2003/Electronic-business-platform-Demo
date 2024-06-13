import React, { useState } from 'react';
import { shop } from '../../Content/index.js';

// import components
import Slider from 'react-slick';
import HeaderBanner from './headerBanner.js';
import Search from '../Common/search.js';
import MenuList from './menuList.js';
import { renderTitle, renderContent, renderMenuItems, renderMoreListItems } from './shopRender.js';
import { ArrowIcon, NextArrow, PrevArrow } from '../Common/Button/arrowButton.js';
import { ProductCardCenter, CardInfo } from '../Common/productCard.js';
import { ClickButton, ClickedButton } from '../Common/Button/buttonItem.js';

// import styles
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Shop = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const [isOpen, setIsOpen] = useState(false);
    const [activeList, setActiveList] = useState('list1');
    const [moreOpen, setMoreOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleListClick = (list) => {
        setActiveList(list);
    };

    const toggleMoreItems = () => {
        setMoreOpen(!moreOpen);
    };

    return (
        <div className="shop">
            <div className="menu">
                <div className="title">
                    {shop && shop.map(i =>
                        i.menu && i.menu.map(b => (
                            b.header_info.map((info) => (
                                <>
                                    <h2>{info.title}</h2>
                                    <h3 onClick={toggleMenu}>
                                        {info.subtitle}
                                        <ArrowIcon isOpen={isOpen} />
                                    </h3>
                                </>
                            ))

                        ))
                    )}
                </div>
                <div className={`content ${isOpen ? 'show' : ''}`}>
                    {shop && shop.map(i =>
                        i.menu && i.menu.map(c =>
                            c.header_item && c.header_item.map((l, index) => (
                                <MenuList key={index} title={l.title} menuData={l.list} />
                            ))
                        )
                    )}
                </div>
            </div>

            <div className="section section1">
                {shop && shop.map(item =>
                    item.header && item.header.map(info => (
                        <HeaderBanner key={info.title} title={info.title} text={info.text} link={info.link} />
                    ))
                )}
            </div>

            <div className="section section2">
                {shop && shop.map(item =>
                    item.search && item.search.map(info => (
                        <Search key={info.title} title={info.title} placeholderText={info.input_text} />
                    ))
                )}
            </div>

            <div className="section section3">
                <div className='title'>
                    <ul>
                        {shop && shop.flatMap(item =>
                            item.menu && item.menu.flatMap(menuItem =>
                                menuItem.menu_info_item && menuItem.menu_info_item.flatMap((info, index) =>
                                    info.title && (
                                        <li
                                            key={`title-${index}`}
                                            className={activeList === `list${index + 1}` ? 'click' : ''}
                                            onClick={() => handleListClick(`list${index + 1}`)}
                                        >
                                            {info.title}
                                        </li>
                                    )
                                )
                            )
                        )}
                    </ul>
                </div>
                <div className="container">
                    <div className={`item item_1 ${activeList === 'list1' ? '' : 'close'}`}>
                        <div className='list'>
                            {shop && shop.map((item, idx) =>
                                renderMenuItems(item.menu.map(menuItem => menuItem.menu_info_item[0]), `item1-${idx}`)
                            )}
                        </div>
                    </div>
                    <div className={`item item_2 ${activeList === 'list2' ? '' : 'close'} ${moreOpen === true ? 'open' : ''}`}>
                        <div className='list'>
                            {shop && shop.map((item, idx) =>
                                renderMenuItems(item.menu.map(menuItem => menuItem.menu_info_item[1]), `item2-${idx}`)
                            )}
                        </div>
                        <div className='more'>
                            <button onClick={toggleMoreItems}>
                                {shop && shop.map((item) => (
                                    item.menu.map((item) => (
                                        item.button_text.map((text, index) => {
                                            return (
                                                moreOpen ? (
                                                    <ClickedButton text={text.text} key={index}/>
                                                ) : (
                                                    <ClickButton text={text.text} key={index}/>
                                                )
                                            )
                                        })
                                    ))
                                ))}
                            </button>
                            {shop && shop.map((item, idx) =>
                                renderMoreListItems(item.menu.map(menuItem => menuItem.menu_info_item[1].moreList), `item2-more-${idx}`)
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <div className="section section4">
                <div className='section-item' id='ipad'>
                    <div className="title">
                        {shop && renderTitle(shop, 'ipad_item')}
                    </div>
                    <div className="content">
                        <Slider {...settings}>
                            {shop && renderContent(shop, 'ipad_item')}
                        </Slider>
                    </div>
                </div>
                <div className='section-item' id='iphone'>
                    <div className="title">
                        {shop && renderTitle(shop, 'iphone_item')}
                    </div>
                    <div className="content">
                        <Slider {...settings}>
                            {shop && renderContent(shop, 'iphone_item')}
                        </Slider>
                    </div>
                </div>
                <div className='section-item' id='watch'>
                    <div className="title">
                        {shop && renderTitle(shop, 'apple_watch_item')}
                    </div>
                    <div className="content">
                        <Slider {...settings}>
                            {shop && renderContent(shop, 'apple_watch_item')}
                        </Slider>
                    </div>
                </div>
                <div className='section-item' id='earphone'>
                    <div className="title">
                        {shop && renderTitle(shop, 'earphone_item')}
                    </div>
                    <div className="content">
                        <Slider {...settings}>
                            {shop && renderContent(shop, 'earphone_item')}
                        </Slider>
                    </div>
                </div>
                <div className='section-item' id='mac'>
                    <div className="title">
                        {shop && renderTitle(shop, 'mac_item')}
                    </div>
                    <div className="content">
                        <Slider {...settings}>
                            {shop && renderContent(shop, 'mac_item')}
                        </Slider>
                    </div>
                </div>
                <div className='section-item' id='airtag'>
                    <div className="title">
                        {shop && renderTitle(shop, 'airtag_item')}
                    </div>
                    <div className="content">
                        <Slider {...settings}>
                            {shop && renderContent(shop, 'airtag_item')}
                        </Slider>
                    </div>
                </div>
            </div>

            <div className='section section5'>
                {shop && shop.map((item) => {
                    return item.info_item && item.info_item.map((info, index) => (
                        <ProductCardCenter key={index}>
                            <CardInfo
                                title={info.title}
                                subtitle={info.text}
                                text={info.link}
                            />
                        </ProductCardCenter>
                    ));
                })}
            </div>
        </div>
    );
}

export default Shop;