import React, { useRef } from 'react';
import { shopContent } from '../../Content/content.js';

//import component
import Slider from 'react-slick';
import HeaderBanner from './headerBanner.js';
import Search from '../Common/search.js';
import MenuList from './menuList.js';
import { renderTitle, renderContent } from './shopRender.js';
import { NextArrow, PrevArrow } from '../Common/arrowButton.js';
import { ProductCardCenter, CardInfo } from '../Common/productCard.js';
import { GoChevronDown } from "react-icons/go";

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
    const arrowRef = useRef(null);

    const handleClick = () => {
        if (contentRef.current) {
            contentRef.current.classList.toggle('show');
        } else {
            console.error('Content element not found');
        }

        if (arrowRef.current) {
            arrowRef.current.classList.toggle('open');
        } else {
            console.error('Arrow element not found');
        }
    };

    return (
        <div className="shop">

            <div className="menu">
                <div className="title">
                    {shopContent && shopContent.map((i) => {
                        return i.menu && i.menu.map((b) => {
                            return (
                                <>
                                    <h2>{b.title}</h2>
                                    <h3 onClick={handleClick}>{b.subtitle}<span ref={arrowRef}><GoChevronDown /></span></h3>
                                </>
                            )
                        })
                    })}
                </div>
                <div className="content" ref={contentRef}>
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
                <div className='section-item' id='ipad'>
                    <div className="title">
                        {shopContent && renderTitle(shopContent, 'ipad_item')}
                    </div>
                    <div className="content">
                        <Slider {...settings}>
                            {shopContent && renderContent(shopContent, 'ipad_item')}
                        </Slider>
                    </div>
                </div>
                <div className='section-item' id='iphone'>
                    <div className="title">
                        {shopContent && renderTitle(shopContent, 'iphone_item')}
                    </div>
                    <div className="content">
                        <Slider {...settings}>
                            {shopContent && renderContent(shopContent, 'iphone_item')}
                        </Slider>
                    </div>
                </div>
                <div className='section-item' id='watch'>
                    <div className="title">
                        {shopContent && renderTitle(shopContent, 'apple_watch_item')}
                    </div>
                    <div className="content">
                        <Slider {...settings}>
                            {shopContent && renderContent(shopContent, 'apple_watch_item')}
                        </Slider>
                    </div>
                </div>
                <div className='section-item' id='earphone'>
                    <div className="title">
                        {shopContent && renderTitle(shopContent, 'earphone_item')}
                    </div>
                    <div className="content">
                        <Slider {...settings}>
                            {shopContent && renderContent(shopContent, 'earphone_item')}
                        </Slider>
                    </div>
                </div>
                <div className='section-item' id='mac'>
                    <div className="title">
                        {shopContent && renderTitle(shopContent, 'mac_item')}
                    </div>
                    <div className="content">
                        <Slider {...settings}>
                            {shopContent && renderContent(shopContent, 'mac_item')}
                        </Slider>
                    </div>
                </div>
                <div className='section-item' id='airtag'>
                    <div className="title">
                        {shopContent && renderTitle(shopContent, 'airtag_item')}
                    </div>
                    <div className="content">
                        <Slider {...settings}>
                            {shopContent && renderContent(shopContent, 'airtag_item')}
                        </Slider>
                    </div>
                </div>
            </div>

            <div className='section section5'>
                {shopContent && shopContent.map((item) => {
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