import React, { useState } from 'react';
import NavBarLink from './nav-bar-link';
import '../../../sass/component/nav-bar.sass';
import { FaApple, FaShoppingCart } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

function NavBar() {
    const svgStyle = { width: "1.5em", height: "1.5em" };

    const [flyoutContent, setFlyoutContent] = useState({
        store: false,
        mac: false,
        ipad: false,
        iphone: false,
        watch: false,
        airpods: false,
    });

    const handleMouseLeave = () => {
        setFlyoutContent({
            store: false,
            mac: false,
            ipad: false,
            iphone: false,
            watch: false,
            airpods: false,
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
        };
        newFlyoutContent[content] = true;
        setFlyoutContent(newFlyoutContent);
    };

    const navItems = [
        { to: "/", icon: <FaApple style={svgStyle} />, text: "首頁" },
        { to: "/store", text: "商店", onMouseOver: () => handleMouseOver('store') },
        { to: "/mac", text: "Mac", onMouseOver: () => handleMouseOver('mac') },
        { to: "/iPad", text: "iPad" },
        { to: "/iPhone", text: "iPhone" },
        { to: "/watch", text: "Watch" },
        { to: "/airPods", text: "AirPods" },
        { to: "/tv-and-family", text: "TV 和家庭" },
        { to: "/funny", text: "娛樂" },
        { icon: <CiSearch style={svgStyle} /> },
        { icon: <FaShoppingCart style={svgStyle} /> }
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

            <div onMouseLeave={handleMouseLeave} className={`flyout-content ${Object.values(flyoutContent).some((value) => value) ? 'show' : ''}`}>
                <div className={`content-item ${flyoutContent.store ? 'show' : ''}`} id="store">
                    <div className="content-group">
                        <ul>
                            <h2>選擇</h2>
                            <li>1111</li>
                            <li>22222</li>
                            <li>333</li>
                        </ul>
                        <ul>
                            <h2>選擇</h2>
                            <li>1111</li>
                            <li>22222</li>
                            <li>333</li>
                        </ul>
                        <ul>
                            <h2>選擇</h2>
                            <li>1111</li>
                            <li>22222</li>
                            <li>333</li>
                        </ul>
                    </div>
                </div>
                <div className={`content-item ${flyoutContent.mac ? 'show' : ''}`} id="mac">
                    <div className="content-group">
                        <ul>
                            <h2>選擇</h2>
                            <li>1111</li>
                            <li>22222</li>
                            <li>333</li>
                            <li>1111</li>
                            <li>22222</li>
                            <li>333</li>
                        </ul>
                        <ul>
                            <h2>選擇</h2>
                            <li>1111</li>
                            <li>22222</li>
                            <li>333</li>
                        </ul>
                        <ul>
                            <h2>選擇</h2>
                            <li>1111</li>
                            <li>22222</li>
                            <li>333</li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;