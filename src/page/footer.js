function Footer() {
    return (
        <div className="footer">
            <hr></hr>
            <div className="footer-info">
                <div className="footer-logo">
                    <img className="Logo" src="/images/AppleLogo.png" alt="AppleLogo"></img>
                    <h6 className="logo-title">Apple Store 線上商店</h6>
                </div>
                <div className="footer-item">
                    <div className="item-column">
                        <div className="list-col">
                            <h6>選購與了解產品</h6>
                            <ul>
                                <li>商店</li>
                                <li>Mac</li>
                                <li>iPad</li>
                                <li>iPhone</li>
                                <li>Watch</li>
                                <li>AirPods</li>
                                <li>TV 和家庭</li>
                                <li>AirTag</li>
                                <li>配件</li>
                                <li>禮品卡</li>
                            </ul>
                        </div>
                        <div className="list-col">
                            <h6>Apple 錢包</h6>
                            <ul>
                                <li>Apple Pay</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item-column">
                        <div className="list-col">
                            <h6>帳戶</h6>
                            <ul>
                                <li>管理你的 Apple ID</li>
                                <li>Apple Store 帳戶</li>
                                <li>iCloud.com</li>
                            </ul>
                        </div>

                        <div className="list-col">
                            <h6>娛樂</h6>
                            <ul>
                                <li>Apple One</li>
                                <li>Apple TV+</li>
                                <li>Apple Music</li>
                                <li>Apple Arcade</li>
                                <li>Apple Podcasts</li>
                                <li>Apple Books</li>
                                <li>App Store</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item-column">
                        <div className="list-col">
                            <h6>Apple Store</h6>
                            <ul>
                                <li>尋找商店</li>
                                <li>Genius Bar</li>
                                <li>Today at Apple</li>
                                <li>Apple 夏令營</li>
                                <li>Apple Store App</li>
                                <li>認證整修品</li>
                                <li>Apple Trade In 換購方案</li>
                                <li>信用卡分期付款</li>
                                <li>訂單狀態</li>
                                <li>購物協助</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item-column">
                        <div className="list-col">
                            <h6>商務應用</h6>
                            <ul>
                                <li>Apple 與商務</li>
                                <li>為企業選購</li>
                            </ul>
                        </div>

                        <div className="list-col">
                            <h6>教育應用</h6>
                            <ul>
                                <li>Apple 與教育</li>
                                <li>為大專院校選購</li>
                            </ul>
                        </div>
                    </div>
                    <div className="item-column">
                        <div className="list-col">
                            <h6>Apple 價值</h6>
                            <ul>
                                <li>輔助使用</li>
                                <li>環境</li>
                                <li>隱私權</li>
                                <li>供應商責任</li>
                            </ul>
                        </div>

                        <div className="list-col">
                            <h6>關於 Apple</h6>
                            <ul>
                                <li>Newsroom</li>
                                <li>Apple 領導團隊</li>
                                <li>工作機會</li>
                                <li>商業倫理與法規遵循</li>
                                <li>活動</li>
                                <li>聯絡 Apple</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <FooterMore />
            </div>

            <hr></hr>
            <Copyright />

        </div>
    )
}

export default Footer;

//-----------------------------------------
function FooterMore() {
    return (
        <div className="footer-more">
            <h6>
                更多選購方式：
                <a href="#!">尋找當地的 Apple 直營店</a>或
                <a href="#!">其他零售商</a>
                ，或致電0800-020-021。
            </h6>
        </div>
    )
}



function Copyright() {
    return (
        <div className="Copyright">
            <h6>Copyright © 2024 Apple Inc. 保留一切權利。</h6>
            <div className="copy-Link">
                <div className="left-Link">
                    <ul>
                        <li>隱私權政策</li>
                        <li>使用條款</li>
                        <li>銷售及退款</li>
                        <li>網站地圖</li>
                    </ul>
                </div>
                <div className="right-Link">台灣</div>
            </div>
        </div>
    )
}