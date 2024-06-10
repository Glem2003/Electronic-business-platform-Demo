import React, { useRef, useState } from 'react';
import { shop } from '../../Content/index.js';

//import component
import Slider from 'react-slick';
import HeaderBanner from './headerBanner.js';
import Search from '../Common/search.js';
import MenuList from './menuList.js';
import { renderTitle, renderContent } from './shopRender.js';
import { ArrowIcon, NextArrow, PrevArrow } from '../Common/arrowButton.js';
import { ProductCardCenter, CardInfo } from '../Common/productCard.js';

//import sass
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
    }

    const contentRef = useRef(null);

    const handleClick = () => {
        if (contentRef.current) {
            contentRef.current.classList.toggle('show');
            setIsOpen(!isOpen);
        } else {
            console.error('Content element not found');
        }
    };

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="shop">

            <div className="menu">
                <div className="title">
                    {shop && shop.map((i) => {
                        return i.menu && i.menu.map((b) => {
                            return (
                                <>
                                    <h2>{b.title}</h2>
                                    <h3 onClick={handleClick}>
                                        {b.subtitle}
                                        <ArrowIcon 
                                            isOpen={isOpen}
                                        />
                                    </h3>
                                </>
                            )
                        })
                    })}
                </div>
                <div className="content" ref={contentRef}>
                    {shop && shop.map((i) => {
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
                {shop && shop.map((item) => {
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
                {shop && shop.map((item) => {
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
                        {shop && shop.flatMap(item =>
                            item.menu && item.menu.flatMap(item =>
                                item.menu_item && item.menu_item.flatMap((info, index) =>
                                    info.title && <li id={`list list${index + 1}`}>{info.title}</li>
                                )
                            )
                        )}
                    </ul>
                </div>
                <div className="container">
                    {shop && shop.map((item, idx) => (
                        item.menu.map((menuItem, menuIdx) => (
                            menuItem.menu_item[0] && menuItem.menu_item[0].list.map((listItem, listIdx) => (
                                <div className="boxItem" key={`list-item-${idx}-${menuIdx}-${listIdx}`}>
                                    <div className="box"></div>
                                    <h4>{listItem.text}</h4>
                                </div>
                            ))
                        ))
                    ))}
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
                    return item.info_item && item.info_item.map((info, index) => {
                        return (
                            <ProductCardCenter
                                key={index}
                            >
                                <CardInfo
                                    title={info.title}
                                    subtitle={info.text}
                                    text={info.link}
                                />
                            </ProductCardCenter>
                        )
                    });
                })}
            </div>

        </div>
    )
}

export default Shop;