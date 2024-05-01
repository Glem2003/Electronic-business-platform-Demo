import ColumnList from './column-list.js'

const FooterInfo = ({logoTitle}) => {
    return (
        <div className="footer-info">
            <div className="footer-logo">
                <img className="Logo" src="/images/AppleLogo.png" alt="AppleLogo"></img>
                <h6 className="logo-title">{logoTitle}</h6>
            </div>
            <div className="footer-item">
                <div className="item-column">

                    <ColumnList
                        title="選購與了解產品"
                        item={[
                            "商店",
                            "Mac",
                            "iPad",
                            "iPhone",
                            "Watch",
                            "AirPods",
                            "TV 和家庭",
                            "AirTag",
                            "配件",
                            "禮品卡",
                        ]}
                    />

                    <ColumnList
                        title="Apple 錢包"
                        item={["Apple Pay"]}
                    />

                </div>

                <div className="item-column">
                    <ColumnList
                        title="帳戶"
                        item={["管理你的 Apple ID", "Apple Store 帳戶", "iCloud.com",]}
                    />

                    <ColumnList
                        title="娛樂"
                        item={
                            ["Apple One",
                                "Apple TV+",
                                "Apple Music",
                                "Apple Arcade",
                                "Apple Podcasts",
                                "Apple Books",
                                "App Store",
                            ]}
                    />
                </div>

                <div className="item-column">
                    <ColumnList
                        title="Apple Store"
                        item={
                            ["尋找商店",
                                "Genius Bar",
                                "Today at Apple",
                                "Apple 夏令營",
                                "Apple Store App",
                                "認證整修品",
                                "Apple Trade In 換購方案",
                                "信用卡分期付款",
                                "訂單狀態",
                                "購物協助",
                            ]}
                    />
                </div>
                <div className="item-column">
                    <ColumnList
                        title="商務應用"
                        item={["Apple 與商務", "為企業選購"]}
                    />

                    <ColumnList
                        title="教育應用"
                        item={["Apple 與教育", "為大專院校選購"]}
                    />
                </div>

                <div className="item-column">
                    <ColumnList
                        title="Apple 價值"
                        item={["輔助使用", "環境", "隱私權", "供應商責任"]}
                    />

                    <ColumnList
                        title="關於 Apple"
                        item={["Newsroom", "Apple 領導團隊", "工作機會", "商業倫理與法規遵循", "活動", "聯絡 Apple"]}
                    />

                </div>
            </div>

        </div>
    )
}

export default FooterInfo;