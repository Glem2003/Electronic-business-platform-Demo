import React from 'react';
import NavBarLink from './nav-bar-link';

import '../../../sass/component/nav-bar.sass';


import { FaApple, FaShoppingCart } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

function NavBar() {
    const svgStyle = { width: "1.5em", height: "1.5em" }

    const [isFlyoutContent, setFlyoutContent] = React.useState(false);
    const [isStoreContent,setStoreContent] = React.useState(false);
    const [isMacContent,setMacContent] = React.useState(false);


    const handleMouseLeave = () =>{
        setFlyoutContent(false);
        setStoreContent(false);
        setMacContent(false);
    }

    const handleStoreMouseOver = () =>{
        setFlyoutContent(true);
        setStoreContent(true);
        setMacContent(false);
    }

    const handleMacMouseOver = () =>{
        setFlyoutContent(true);
        setStoreContent(false);
        setMacContent(true);
    }

    return (
        <nav>
            <div className='content'>
                <ul className='content-list'>

                    <NavBarLink
                        to="/"
                    >
                        <FaApple style={svgStyle} />
                    </NavBarLink>


                    <NavBarLink
                        to="store"
                        onMouseOver={handleStoreMouseOver}
                        className="store"
                    >
                        <p>Store</p>
                    </NavBarLink>

                    <NavBarLink
                        to="mac"
                        onMouseOver={handleMacMouseOver}
                        className="mac">
                        <p>Mac</p>
                    </NavBarLink>

                    <NavBarLink 
                        to="iPhone"
                        className="iPhone">
                        <p>iPhone</p>
                    </NavBarLink>


                    <NavBarLink>
                        <CiSearch style={svgStyle} />
                    </NavBarLink>
                    <NavBarLink>
                        <FaShoppingCart style={svgStyle} />
                    </NavBarLink>

                </ul>
            </div>

            <div
                onMouseLeave={handleMouseLeave}
                className={`flyout-content ${isFlyoutContent === true ? 'show': ''}`}
            >
                <div
                    className={`content-item ${isStoreContent === true ? 'show':''}`}
                    id="store"
                >
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
                <div
                    className={`content-item ${isMacContent === true ? 'show':''}`}
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