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
        tvAndFamily: false,
        funny: false,
        shop: false,
        search: true,
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
                        <ul>
                            <h6>選購</h6>
                            <h1>選購最新產品</h1>
                            <h1>Mac</h1>
                            <h1>iPad</h1>
                            <h1>iPhone</h1>
                            <h1>Apple Watch</h1>
                            <h1>配件</h1>
                        </ul>
                        <ul>
                            <h6>選購</h6>
                            <h4>尋找直營店</h4>
                            <h4>訂單狀態</h4>
                            <h4>Apple Trade In 換購方案</h4>
                            <h4>信用卡分期付款</h4>
                        </ul>
                        <ul>
                            <h6>特定商品選購</h6>
                            <h4>認證整修品</h4>
                            <h4>教育</h4>
                            <h4>商務</h4>
                        </ul>
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.mac ? 'show' : ''}`} id="mac">
                    <div className="content-group">
                        <ul>
                            <h6>探索 Mac</h6>
                            <h1>探索所有 Mac</h1>
                            <h1>MacBook Air</h1>
                            <h1>MacBook Pro</h1>
                            <h1>iMac</h1>
                            <h1>Mac mini</h1>
                            <h1>Mac Studio</h1>
                            <h1>Mac Pro</h1>
                            <h1>顯示器</h1>
                            <br/>
                            <h4>比較 Mac 模型</h4>
                            <h4>Mac 辦得到</h4>

                        </ul>
                        <ul>
                            <h6>選購 Mac</h6>
                            <h4>選購 Mac</h4>
                            <h4>Mac 配件</h4>
                            <h4>Apple Trade In 換購方案</h4>
                            <h4>信用卡分期付款</h4>
                        </ul>
                        <ul>
                            <h6>Mac 相關</h6>
                            <h4>適用於 Mac 的 AppleCare+ 服務專案</h4>
                            <h4>macOS Sonoma</h4>
                            <h4>Apple 出品的 App</h4>
                            <h4>接續互通</h4>
                            <h4>iCloud+</h4>
                            <h4>Mac 商務應用</h4>
                            <h4>教育</h4>
                        </ul>
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.ipad ? 'show' : ''}`} id="ipad">
                    <div className="content-group">
                        <ul>
                            <h6>探索 iPad</h6>
                            <h1>探索所有 iPad</h1>
                            <h1>iPad Pro</h1>
                            <h1>iPad Air</h1>
                            <h1>iPad</h1>
                            <h1>iPad mini</h1>
                            <h1>Apple Pencil</h1>
                            <h1>鍵盤</h1>
                            <br/>
                            <h4>比較 iPad 機型</h4>
                            <h4>選 iPad 理由</h4>

                        </ul>
                        <ul>
                            <h6>選購 iPad</h6>
                            <h4>選購 iPad</h4>
                            <h4>iPad 配件</h4>
                            <h4>Apple Trade In 換購方案</h4>
                            <h4>信用卡分期付款</h4>
                        </ul>
                        <ul>
                            <h6>iPad 相關</h6>
                            <h4>適用於 iPad 的 AppleCare+ 服務專案</h4>
                            <h4>iPadOS 17</h4>
                            <h4>Apple 出品的 App</h4>
                            <h4>iCloud+</h4>
                            <h4>教育</h4>
                        </ul>
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.iphone ? 'show' : ''}`} id="iphone">
                    <div className="content-group">
                        <ul>
                            <h6>探索 iPhone</h6>
                            <h1>探索所有 iPhone</h1>
                            <h1>iPhone 15 Pro</h1>
                            <h1>iPhone 14</h1>
                            <h1>iPhone 13</h1>
                            <h1>iPhone SE</h1>
                            <br/>
                            <h4>比較 iPhone 機型</h4>
                            <h4>從 Android 轉用</h4>

                        </ul>
                        <ul>
                            <h6>選購 iPhone</h6>
                            <h4>選購 iPhone</h4>
                            <h4>iPhone 配件</h4>
                            <h4>Apple Trade In 換購方案</h4>
                            <h4>信用卡分期付款</h4>
                        </ul>
                        <ul>
                            <h6>iPhone 相關</h6>
                            <h4>iPhone 支援服務</h4>
                            <h4>適用於 iPhone 的 AppleCare+ 服務專案</h4>
                            <h4>iOS 17</h4>
                            <h4>Apple 出品的 App</h4>
                            <h4>iPhone 隱私權</h4>
                            <h4>iCloud+</h4>
                            <h4>Apple Pay</h4>
                            <h4>Siri</h4>
                        </ul>
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.watch ? 'show' : ''}`} id="watch">
                    <div className="content-group">
                        <ul>
                            <h6>探索 Watch</h6>
                            <h1>探索所有的 Apple Watch</h1>
                            <h1>Apple Watch Series 9</h1>
                            <h1>Apple Watch Ultra 2</h1>
                            <h1>Apple Watch SE</h1>
                            <h1>Apple Watch Nike</h1>
                            <h1>Apple Watch Hermès</h1>
                            <br/>
                            <h4>比較 Watch 錶款</h4>
                            <h4>Apple Watch 的好處</h4>

                        </ul>
                        <ul>
                            <h6>選購 Watch</h6>
                            <h4>選購 Apple Watch</h4>
                            <h4>Apple Watch 工坊</h4>
                            <h4>Apple Watch 錶帶</h4>
                            <h4>Apple Watch 配件</h4>
                            <h4>Apple Trade In 換購方案</h4>
                            <h4>信用卡分期付款</h4>
                        </ul>
                        <ul>
                            <h6>Watch 相關</h6>
                            <h4>Apple Watch 支援服務</h4>
                            <h4>AppleCare+ 服務專案</h4>
                            <h4>watchOS 10</h4>
                            <h4>Apple 出品的 App</h4>
                        </ul>
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.airpods ? 'show' : ''}`} id="airpods">
                    <div className="content-group">
                        <ul>
                            <h6>探索 AirPods</h6>
                            <h1>探索所有的 AirPods</h1>
                            <h1>AirPods Pro 第2代</h1>
                            <h1>AirPods 第2代</h1>
                            <h1>AirPods 第3代</h1>
                            <h1>AirPods Max</h1>
                            <br/>
                            <h4>比較 AirPods 機型</h4>

                        </ul>
                        <ul>
                            <h6>選購 AirPods</h6>
                            <h4>選購 AirPods</h4>
                            <h4>AirPods 配件</h4>
                        </ul>
                        <ul>
                            <h6>AirPods 相關</h6>
                            <h4>AirPods 支援服務</h4>
                            <h4>適用於耳機的 AppleCare+ 服務專線</h4>
                            <h4>Apple Music</h4>
                        </ul>
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.tvAndFamily ? 'show' : ''}`} id="tv-and-family">
                    <div className="content-group">
                        <ul>
                            <h6>探索 TV 和家庭</h6>
                            <h1>探索 TV 和家庭</h1>
                            <h1>Apple TV 4K</h1>
                            <h1>HomePod</h1>
                            <h1>HomePod mini</h1>
                        </ul>
                        <ul>
                            <h6>選購 TV 和家庭</h6>
                            <h4>選購 Apple TV 4K</h4>
                            <h4>選購 HomePod</h4>
                            <h4>選購 HomePod mini</h4>
                            <h4>選購 Siri Remote</h4>
                            <h4>TV 和家庭配件</h4>
                        </ul>
                        <ul>
                            <h6>TV 和家庭相關</h6>
                            <h4>Apple TV 支援服務</h4>
                            <h4>HomePod 支援服務</h4>
                            <h4>AppleCare+ 服務專案</h4>
                            <h4>Apple TV App</h4>
                            <h4>Apple TV+</h4>
                            <h4>家庭 App</h4>
                            <h4>Apple Music</h4>
                            <h4>Siri</h4>
                            <h4>AirPlay</h4>
                        </ul>
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.funny ? 'show' : ''}`} id="funny">
                    <div className="content-group">
                        <ul>
                            <h6>探索娛樂</h6>
                            <h1>探索娛樂</h1>
                            <h1>Apple One</h1>
                            <h1>Apple TV+</h1>
                            <h1>Apple Music</h1>
                            <h1>Apple Arcade</h1>
                            <h1>Apple Podcast</h1>
                            <h1>Apple Books</h1>
                            <h1>Apple Store</h1>
                        </ul>
                        <ul>
                            <h6>支援服務</h6>
                            <h4>Apple TV+ 支援服務</h4>
                            <h4>Apple Music 支援服務</h4>
                        </ul>
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.shop ? 'show' : ''}`} id="shop">
                    <div className="content-group">
                        <ul>
                            <h6>選購配件</h6>
                            <h1>選購各款配件</h1>
                            <h1>Mac</h1>
                            <h1>iPad</h1>
                            <h1>iPhone</h1>
                            <h1>Apple Watch</h1>
                            <h1>AirPods</h1>
                            <h1>TV 和家庭</h1>
                        </ul>
                        <ul>
                            <h6>探索配件</h6>
                            <h4>Apple 出品</h4>
                            <h4>Beats by Dr.Dre</h4>
                            <h4>AirTag</h4>
                        </ul>
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.support ? 'show' : ''}`} id="support">
                    <div className="content-group">
                        <ul>
                            <h6>探索支援服務</h6>
                            <h1>iPhone</h1>
                            <h1>Mac</h1>
                            <h1>iPad</h1>
                            <h1>Watch</h1>
                            <h1>AirPods</h1>
                            <h1>Music</h1>
                            <h1>TV</h1>
                            <br/>
                            <h4>探索支援服務</h4>
                        </ul>
                        <ul>
                            <h6>取得協助</h6>
                            <h4>社群</h4>
                            <h4>查看保固範圍</h4>
                            <h4>維修</h4>
                            <h4>聯絡我們</h4>
                        </ul>
                        <ul>
                            <h6>實用主題</h6>
                            <h4>取得 AppleCare+ 服務專案</h4>
                            <h4>Apple ID 和密碼</h4>
                            <h4>帳單和訂閱項目</h4>
                            <h4>「尋找」App</h4>
                            <h4>輔助使用</h4>
                        </ul>
                    </div>
                </div>
                <div onMouseLeave={handleMouseLeave} className={`content-item ${flyoutContent.search ? 'show' : ''}`} id="search">
                    <div className="content-group">
                        <form>
                            <CiSearch style={svgStyle} />
                            <input type='search' placeholder='搜尋 apple.com'/>
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