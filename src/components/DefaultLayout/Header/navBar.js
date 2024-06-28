import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { navBar } from '../../../Content/index';
import { useLocation } from 'react-router-dom'; 

// import component
import NavBarLink from './navBarLink';
import { NavBarLargeList, NavBarSmallList } from '../../Common/navbarList';
import Badge from '@mui/material/Badge';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { blue } from '@mui/material/colors';

// import icon
import LocalMallIcon from '@mui/icons-material/LocalMall';
import SearchIcon from '@mui/icons-material/Search';
import AppleIcon from '@mui/icons-material/Apple';

// import sass
import '../../../Sass/component/navBar.sass';

const NavBar = () => {
    const value = useSelector(state => state.shop.value);

    const theme = createTheme({
        palette: {
            primary: {
                main: blue[500],
            }
        },
    });

    const navData = {
        main: navBar.navBarMainList,
        mac: navBar.navBarMacList,
        ipad: navBar.navBarIpadList,
        iphone: navBar.navBarIphoneList,
        watch: navBar.navBarWatchList,
        airpods: navBar.navBarAirpodsList,
        tvAndFamily: navBar.navBarTvFamilyList,
        shop: navBar.navBarShopList,
        support: navBar.navBarSupportList,
        search: navBar.navBarSearchList
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
        setFlyoutContent({ ...initialFlyoutState, [content]: true });
    };

    // Take current route location
    const location = useLocation();

    // Set title based on current route
    useEffect(() => {
        const pathToTitleMap = {
            '/': 'Apple (台灣)',
            '/main': 'Apple Store 線上商店 - Apple (台灣)',
            '/mac': 'Mac - Apple (台灣)',
            '/iPad': 'iPad - Apple (台灣)',
            '/iPhone': 'iPhone - Apple (台灣)',
            '/watch': 'Watch - Apple (台灣)',
            '/airPods': 'AirPods - Apple (台灣)',
            '/tv-and-family': 'TV 和家庭 - Apple (台灣)',
            '/shop': '適用於 Apple Watch、iPhone、iPad 與 Mac 的 Apple 配件 - Apple (台灣)',
            '/support': '官方的 Apple 支援',
            '/cart': '購物袋 - Apple (台灣)',
        };

        const title = pathToTitleMap[location.pathname] || 'Apple (台灣)';
        document.title = title;
    }, [location]);

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
                                {navBar.navBarOtherList && navBar.navBarOtherList.flatMap((item) => (
                                    item.mac && item.mac.map((text, index) => (
                                        <h4 key={index}>{text}</h4>
                                    ))
                                ))}
                            </>
                        )}
                        {key === 'ipad' && (
                            <>
                                <br />
                                {navBar.navBarOtherList && navBar.navBarOtherList.flatMap((item) => (
                                    item.ipad && item.ipad.map((text, index) => (
                                        <h4 key={index}>{text}</h4>
                                    ))
                                ))}
                            </>
                        )}
                        {key === 'iphone' && (
                            <>
                                <br />
                                {navBar.navBarOtherList && navBar.navBarOtherList.flatMap((item) => (
                                    item.iphone && item.iphone.map((text, index) => (
                                        <h4 key={index}>{text}</h4>
                                    ))
                                ))}
                            </>
                        )}
                        {key === 'watch' && (
                            <>
                                <br />
                                {navBar.navBarOtherList && navBar.navBarOtherList.flatMap((item) => (
                                    item.watch && item.watch.map((text, index) => (
                                        <h4 key={index}>{text}</h4>
                                    ))
                                ))}
                            </>
                        )}
                        {key === 'airpods' && (
                            <>
                                <br />
                                {navBar.navBarOtherList && navBar.navBarOtherList.flatMap((item) => (
                                    item.airpods && item.airpods.map((text, index) => (
                                        <h4 key={index}>{text}</h4>
                                    ))
                                ))}
                            </>
                        )}
                        {key === 'support' && (
                            <>
                                <br />
                                {navBar.navBarOtherList && navBar.navBarOtherList.flatMap((item) => (
                                    item.support && item.support.map((text, index) => (
                                        <h4 key={index}>{text}</h4>
                                    ))
                                ))}
                            </>
                        )}
                        {key === 'search' && (
                            <form>
                                <SearchIcon />
                                {navBar.navBarOtherList && navBar.navBarOtherList.flatMap((item) => (
                                    item.search && item.search.map((text) => (
                                        <input type='search' placeholder={text} key={text} />
                                    ))
                                ))}
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

    // Navigation bar configuration
    const navItems = [
        {
            to: "/",
            icon: <AppleIcon />,
            text: "首頁",
            onMouseOver: () => setFlyoutContent(false)
        },
        {
            to: "/main",
            text: "商店",
            onMouseOver: () => handleMouseOver('main')
        },
        {
            to: "/mac",
            text: "Mac",
            onMouseOver: () => handleMouseOver('mac')
        },
        {
            to: "/iPad",
            text: "iPad",
            onMouseOver: () => handleMouseOver('ipad')
        },
        {
            to: "/iPhone",
            text: "iPhone",
            onMouseOver: () => handleMouseOver('iphone')
        },
        {
            to: "/watch",
            text: "Watch",
            onMouseOver: () => handleMouseOver('watch')
        },
        {
            to: "/airPods",
            text: "AirPods",
            onMouseOver: () => handleMouseOver('airpods')
        },
        {
            to: "/tv-and-family",
            text: "TV 和家庭",
            onMouseOver: () => handleMouseOver('tvAndFamily')
        },
        {
            to: "/shop",
            text: "配件",
            onMouseOver: () => handleMouseOver('shop')
        },
        {
            to: "/support",
            text: "支援服務",
            onMouseOver: () => handleMouseOver('support')
        },
        {
            icon: <SearchIcon />,
            onClick: () => handleMouseOver('search')
        },
        {
            to: "/cart",
            icon: (
                <ThemeProvider theme={theme}>
                    <Badge badgeContent={value} color="primary" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                        <LocalMallIcon color='inherit' />
                    </Badge>
                </ThemeProvider>
            ),
            onMouseOver: () => setFlyoutContent(false)
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
                            onClick={item.onClick}
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
};

export default NavBar;