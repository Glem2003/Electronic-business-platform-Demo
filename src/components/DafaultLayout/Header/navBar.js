import React, { useState } from 'react';
import NavBarLink from './navBarLink';
import { FaApple, FaShoppingCart } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';
import { NavBarLargeList, NavBarSmallList } from '../../Common/navbarList';
import {
    navBarMainList,
    navBarMacList,
    navBarIpadList,
    navBarIphoneList,
    navBarWatchList,
    navBarAirpodsList,
    navBarTvFamilyList,
    navBarShopList,
    navBarSupportList,
    navBarSearchList
} from '../../../Content/content';

//import sass
import '../../../Sass/component/navBar.sass';

const NavBar = () => {
    const svgStyle = { width: "1.5em", height: "1.5em" };

    const navData = {
        main: navBarMainList,
        mac: navBarMacList,
        ipad: navBarIpadList,
        iphone: navBarIphoneList,
        watch: navBarWatchList,
        airpods: navBarAirpodsList,
        tvAndFamily: navBarTvFamilyList,
        shop: navBarShopList,
        support: navBarSupportList,
        search: navBarSearchList
    };

    const initialFlyoutState = {
        main: false,
        mac: false,
        ipad: false,
        iphone: false,
        watch: false,
        airpods: false,
        tvAndFamily: false,
        shop: false,
        search: false,
        cart: false
    };

    const [flyoutContent, setFlyoutContent] = useState(initialFlyoutState);

    const handleMouseLeave = () => setFlyoutContent(initialFlyoutState);

    const handleMouseOver = (content) => {
        setFlyoutContent({ ...initialFlyoutState, [content]: true })
    };

    const renderFlyoutContent = (key) => {
        const selectedData = navData[key][0];
        const otherData = navData[key].slice(1);

        return (
            <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent[key] ? 'show' : ''}`} id={key}>
                <div className="content-group">
                    <NavBarLargeList
                        title={selectedData.title}
                        items={selectedData.listItem}
                    >
                        {key === 'mac' && (
                            <>
                                <br />
                                <h4>比較 Mac 模型</h4>
                                <h4>Mac 辦得到</h4>
                            </>
                        )}
                        {key === 'ipad' && (
                            <>
                                <br />
                                <h4>比較 iPad 機型</h4>
                                <h4>選 iPad 理由</h4>
                            </>
                        )}
                        {key === 'iphone' && (
                            <>
                                <br />
                                <h4>比較 iPhone 機型</h4>
                                <h4>從 Android 轉用</h4>
                            </>
                        )}
                        {key === 'watch' && (
                            <>
                                <br />
                                <h4>比較 Watch 錶款</h4>
                                <h4>Apple Watch 的好處</h4>
                            </>
                        )}
                        {key === 'airpods' && (
                            <>
                                <br />
                                <h4>比較 AirPods 機型</h4>
                            </>
                        )}
                        {key === 'support' && (
                            <>
                                <br />
                                <h4>探索支援服務</h4>
                            </>
                        )}
                        {key === 'search' && (
                            <form>
                                <CiSearch style={svgStyle} />
                                <input type='search' placeholder='搜尋 apple.com' />
                            </form>
                        )}
                    </NavBarLargeList>
                    {otherData.map((data, index) => (
                        <NavBarSmallList key={index} title={data.title} items={data.listItem} />
                    ))}
                </div>
            </div>
        );
    };

    const navItems = [
        { to: "/", icon: <FaApple style={svgStyle} />, text: "首頁", onMouseOver: () => setFlyoutContent(false) },
        { to: "/main", text: "商店", onMouseOver: () => handleMouseOver('main') },
        { to: "/mac", text: "Mac", onMouseOver: () => handleMouseOver('mac') },
        { to: "/iPad", text: "iPad", onMouseOver: () => handleMouseOver('ipad') },
        { to: "/iPhone", text: "iPhone", onMouseOver: () => handleMouseOver('iphone') },
        { to: "/watch", text: "Watch", onMouseOver: () => handleMouseOver('watch') },
        { to: "/airPods", text: "AirPods", onMouseOver: () => handleMouseOver('airpods') },
        { to: "/tv-and-family", text: "TV 和家庭", onMouseOver: () => handleMouseOver('tvAndFamily') },
        { to: "/shop", text: "配件", onMouseOver: () => handleMouseOver('shop') },
        { to: "/support", text: "支援服務", onMouseOver: () => handleMouseOver('support') },
        { icon: <CiSearch style={svgStyle} />, onMouseOver: () => handleMouseOver('search') },
        { to:"/cart",icon: <FaShoppingCart style={svgStyle} />, onMouseOver: () => setFlyoutContent(false) }
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

            <div className={`flyout-content ${Object.values(flyoutContent).some(value => value) ? 'show' : ''}`}>
                {Object.keys(navData).map(key => renderFlyoutContent(key))}
            </div>
        </nav>
    );
}

export default NavBar;