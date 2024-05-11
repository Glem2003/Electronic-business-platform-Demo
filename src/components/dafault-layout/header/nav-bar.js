import React from 'react';
import NavBarLink from './nav-bar-link';

import '../../../sass/component/nav-bar.sass';


import { FaApple, FaShoppingCart } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

function NavBar() {
    const svgStyle = { width: "1.5em", height: "1.5em" }

    const [isFlyoutContent, setFlyoutContent] = React.useState(true);
    const [isStoreContent, setStoreContent] = React.useState(false);
    const [isMacContent, setMacContent] = React.useState(false);

    const handleStoreMouserOver = () => {
        setFlyoutContent(false);
        setStoreContent(true);
        setMacContent(false);
    };

    const handleMouseOver = () => {
        setFlyoutContent(true);
        setStoreContent(false);
        setMacContent(false);
    };

    const handleStoreMouserLeave = () => {
        setFlyoutContent(true);
        setStoreContent(false);
    };

    const handleMacMouserOver = () => {
        setFlyoutContent(false);
        setMacContent(true);
        setStoreContent(false);
    };

    return (
        <nav>
            <div className='content'>
                <ul className='content-list'>

                    <NavBarLink
                        to="/"
                        onMouseOver={handleMouseOver}
                    >
                        <FaApple style={svgStyle} />
                    </NavBarLink>


                    <NavBarLink
                        className="store"
                        onMouseOver={handleStoreMouserOver}
                    >
                        <p>Store</p>
                    </NavBarLink>

                    <NavBarLink
                        onMouseOver={handleMacMouserOver}
                        className="mac">
                        <p>Mac</p>
                    </NavBarLink>

                    <NavBarLink className="iPhone">
                        <p>iPhone</p>
                    </NavBarLink>


                    <NavBarLink onMouseOver={handleMouseOver}>
                        <CiSearch style={svgStyle} />
                    </NavBarLink>
                    <NavBarLink onMouseOver={handleMouseOver}>
                        <FaShoppingCart style={svgStyle} />
                    </NavBarLink>

                </ul>
            </div>

            <div
                onMouseLeave={handleStoreMouserLeave}
                className={`flyout-content ${isFlyoutContent !== true ? "show" : ""}`}
            >
                <div
                    className={`content-item  ${isStoreContent === true ? "show" : ""}`}
                    id="store"
                >
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
                <div
                    className={`content-item  ${isMacContent === true ? "show" : ""}`}
                    id="mac"
                >
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
    )
}


export default NavBar;