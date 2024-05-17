import React, { useState } from 'react';
import NavBarLink from './nav-bar-link';

import '../../../sass/component/nav-bar.sass';
import { FaApple, FaShoppingCart } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { NavBarLargeList, NavBarSmallList } from '../../common/navbar-list.js';
import {
    navBarStoreList,
    navBarMacList,
    navBarIpadList,
    navBarIphoneList,
    navBarWatchList,
    navBarAirpodsList,
    navBarTvFamilyList,
    navBarFunnyList,
    navBarShopList,
    navBarSupportList
} from '../../../content/content.js';

function NavBar() {
    const svgStyle = { width: "1.5em", height: "1.5em" };

    const selectedNavBarStoreData = navBarStoreList[0]
    const otherNavBarStoreData = navBarStoreList.slice(1)

    const selectedNavBarMacData = navBarMacList[0]
    const otherNavBarMacData = navBarMacList.slice(1)

    const selectedNavBarIpadData = navBarIpadList[0]
    const otherNavBarIpadData = navBarIpadList.slice(1)

    const selectedNavBarIphoneData = navBarIphoneList[0]
    const otherNavBarIphoneData = navBarIphoneList.slice(1)

    const selectedNavBarWatchData = navBarWatchList[0]
    const otherNavBarWatchData = navBarWatchList.slice(1)

    const selectedNavBarAirpodsData = navBarAirpodsList[0]
    const otherNavBarAirpodsData = navBarAirpodsList.slice(1)

    const selectedNavBarTvFamilyData = navBarTvFamilyList[0]
    const otherNavBarTvFamilyData = navBarTvFamilyList.slice(1)

    const selectedNavBarFunnyData = navBarFunnyList[0]
    const otherNavBarFunnyData = navBarFunnyList.slice(1)

    const selectedNavBarShopData = navBarShopList[0]
    const otherNavBarShopData = navBarShopList.slice(1)

    const selectedNavBarSupportData = navBarSupportList[0]
    const otherNavBarSupportData = navBarSupportList.slice(1)

    const [flyoutContent, setFlyoutContent] = useState({
        store: false,
        mac: false,
        ipad: false,
        iphone: false,
        watch: false,
        airpods: false,
        tvAndFamily: false,
        funny: false,
        shop: false,
        search: false,
        cart: false
    });

    const handleMouseLeave = () => {
        setFlyoutContent({
            store: false,
            mac: false,
            ipad: false,
            iphone: false,
            watch: false,
            airpods: false,
            tvAndFamily: false,
            funny: false,
            shop: false,
            search: false,
            cart: false
        });
    };

    const handleMouseOver = (content) => {
        const newFlyoutContent = {
            store: false,
            mac: false,
            ipad: false,
            iphone: false,
            watch: false,
            airpods: false,
            tvAndFamily: false,
            funny: false,
            shop: false,
            search: false,
            cart: false
        };
        newFlyoutContent[content] = true;
        setFlyoutContent(newFlyoutContent);
    };

    const navItems = [
        {
            to: "/", icon: <FaApple style={svgStyle} />, text: "首頁",
            onMouseOver: () => {
                handleMouseOver('');
                setFlyoutContent(false);
            }
        },
        { to: "/store", text: "商店", onMouseOver: () => handleMouseOver('store') },
        { to: "/mac", text: "Mac", onMouseOver: () => handleMouseOver('mac') },
        { to: "/iPad", text: "iPad", onMouseOver: () => handleMouseOver('ipad') },
        { to: "/iPhone", text: "iPhone", onMouseOver: () => handleMouseOver('iphone') },
        { to: "/watch", text: "Watch", onMouseOver: () => handleMouseOver('watch') },
        { to: "/airPods", text: "AirPods", onMouseOver: () => handleMouseOver('airpods') },
        { to: "/tv-and-family", text: "TV 和家庭", onMouseOver: () => handleMouseOver('tvAndFamily') },
        { to: "/funny", text: "娛樂", onMouseOver: () => handleMouseOver('funny') },
        { to: "/shop", text: "配件", onMouseOver: () => handleMouseOver('shop') },
        { to: "/support", text: "支援服務", onMouseOver: () => handleMouseOver('support') },

        {
            icon: <CiSearch style={svgStyle} />,
            onMouseOver: () => {
                handleMouseOver('search');
            }
        },
        {
            icon: <FaShoppingCart style={svgStyle} />,
            onMouseOver: () => {
                handleMouseOver('cart');
                setFlyoutContent(false);
            }
        }
    ];

    return (
        <nav>
            <div className='content'>
                <ul className='content-list'>
                    {navItems.map((item, index) => (
                        <NavBarLink
                            key={index}
                            to={item.to}
                            onMouseOver={item.onMouseOver}
                            className={item.text ? item.text.toLowerCase() : ""}
                        >
                            {item.icon ? item.icon : <p>{item.text}</p>}
                        </NavBarLink>
                    ))}
                </ul>
            </div>

            <div className={`flyout-content ${Object.values(flyoutContent).some((value) => value) ? 'show' : ''}`}>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.store ? 'show' : ''}`} id="store">
                    <div className="content-group">
                        <NavBarLargeList
                            title={selectedNavBarStoreData.title}
                            items={selectedNavBarStoreData.listItem}
                        />

                        {otherNavBarStoreData.map((data, index) => (
                            <NavBarSmallList
                                key={index}
                                title={data.title}
                                items={data.listItem}
                            />
                        ))}
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.mac ? 'show' : ''}`} id="mac">
                    <div className="content-group">
                        <NavBarLargeList
                            title={selectedNavBarMacData.title}
                            items={selectedNavBarMacData.listItem}
                        >
                            <br />
                            <h4>比較 Mac 模型</h4>
                            <h4>Mac 辦得到</h4>
                        </NavBarLargeList>
                        {otherNavBarMacData.map((data, index) => (
                            <NavBarSmallList
                                key={index}
                                title={data.title}
                                items={data.listItem}
                            />
                        ))}
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.ipad ? 'show' : ''}`} id="ipad">
                    <div className="content-group">
                        <NavBarLargeList
                            title={selectedNavBarIpadData.title}
                            items={selectedNavBarIpadData.listItem}
                        >
                            <br />
                            <h4>比較 iPad 機型</h4>
                            <h4>選 iPad 理由</h4>
                        </NavBarLargeList>
                        {otherNavBarIpadData.map((data, index) => (
                            <NavBarSmallList
                                key={index}
                                title={data.title}
                                items={data.listItem}
                            />
                        ))}
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.iphone ? 'show' : ''}`} id="iphone">
                    <div className="content-group">
                        <NavBarLargeList
                            title={selectedNavBarIphoneData.title}
                            items={selectedNavBarIphoneData.listItem}
                        >
                            <br />
                            <h4>比較 iPhone 機型</h4>
                            <h4>從 Android 轉用</h4>
                        </NavBarLargeList>
                        {otherNavBarIphoneData.map((data, index) => (
                            <NavBarSmallList
                                key={index}
                                title={data.title}
                                items={data.listItem}
                            />
                        ))}
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.watch ? 'show' : ''}`} id="watch">
                    <div className="content-group">
                        <NavBarLargeList
                            title={selectedNavBarWatchData.title}
                            items={selectedNavBarWatchData.listItem}
                        >
                            <br />
                            <h4>比較 Watch 錶款</h4>
                            <h4>Apple Watch 的好處</h4>
                        </NavBarLargeList>
                        {otherNavBarWatchData.map((data, index) => (
                            <NavBarSmallList
                                key={index}
                                title={data.title}
                                items={data.listItem}
                            />
                        ))}
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.airpods ? 'show' : ''}`} id="airpods">
                    <div className="content-group">
                        <NavBarLargeList
                            title={selectedNavBarAirpodsData.title}
                            items={selectedNavBarAirpodsData.listItem}
                        >
                            <br />
                            <h4>比較 AirPods 機型</h4>
                        </NavBarLargeList>
                        {otherNavBarAirpodsData.map((data, index) => (
                            <NavBarSmallList
                                key={index}
                                title={data.title}
                                items={data.listItem}
                            />
                        ))}
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.tvAndFamily ? 'show' : ''}`} id="tv-and-family">
                    <div className="content-group">
                        <NavBarLargeList
                            title={selectedNavBarTvFamilyData.title}
                            items={selectedNavBarTvFamilyData.listItem}
                        />
                        {otherNavBarTvFamilyData.map((data, index) => (
                            <NavBarSmallList
                                key={index}
                                title={data.title}
                                items={data.listItem}
                            />
                        ))}
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.funny ? 'show' : ''}`} id="funny">
                    <div className="content-group">
                        <NavBarLargeList
                            title={selectedNavBarFunnyData.title}
                            items={selectedNavBarFunnyData.listItem}
                        />
                        {otherNavBarFunnyData.map((data, index) => (
                            <NavBarSmallList
                                key={index}
                                title={data.title}
                                items={data.listItem}
                            />
                        ))}
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.shop ? 'show' : ''}`} id="shop">
                    <div className="content-group">
                        <NavBarLargeList
                            title={selectedNavBarShopData.title}
                            items={selectedNavBarShopData.listItem}
                        />
                        {otherNavBarShopData.map((data, index) => (
                            <NavBarSmallList
                                key={index}
                                title={data.title}
                                items={data.listItem}
                            />
                        ))}
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.support ? 'show' : ''}`} id="support">
                    <div className="content-group">
                        <NavBarLargeList
                            title={selectedNavBarSupportData.title}
                            items={selectedNavBarSupportData.listItem}
                        >
                            <br />
                            <h4>探索支援服務</h4>
                        </NavBarLargeList>
                        {otherNavBarSupportData.map((data, index) => (
                            <NavBarSmallList
                                key={index}
                                title={data.title}
                                items={data.listItem}
                            />
                        ))}
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.search ? 'show' : ''}`} id="search">
                    <div className="content-group">
                        <form>
                            <CiSearch style={svgStyle} />
                            <input type='search' placeholder='搜尋 apple.com' />
                        </form>
                        <ul>
                            <h6>快速連結</h6>
                            <h4>→ 尋找直營店</h4>
                            <h4>→ 配件</h4>
                            <h4>→ AirPods</h4>
                            <h4>→ AirTag</h4>
                            <h4>→ Apple Trade In 換購方案</h4>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;