import './main.sass';

function Main() {
    return (
        <div className="main">
            {/* Start section1 */}
            <div className="section section1">
                <div className="sec-title">最新登場。<span style={{ color: 'grey' }}>現在就來看看有哪些新品推薦。</span></div>
                <div className="sec-item">

                    <SectionItem
                        name="MACBOOK AIR"
                        title="為行動而設計。"
                        price="NT$32,900 起"
                        src="/images/macbook.jpg"
                        alt="MACBOOK AIR"
                    />

                    <SectionItem
                        name="IPHONE 15 PRO"
                        title="鈦金屬"
                        price="NT$36,900 起"
                        src="/images/iphone-15-pro.jpg"
                        alt="IPHONE 15 PRO"
                        id="white"
                    />

                    <SectionItem
                        name="APPLE WATCH SERIES 9"
                        title="智慧升級，亮度、實力再晉級。"
                        price="NT$13,500 起"
                        src="/images/watch-s9.jpg"
                        alt="APPLE WATCH SERIES 9"
                        id="white"
                    />

                    <SectionItem
                        name="IPAD"
                        title="可愛、可畫，可圈可點。"
                        price="NT$14,900 起"
                        src="/images/ipad.jpg"
                        alt="IPAD"
                    />

                    <SectionItem
                        name="IPHONE 15"
                        title="新的愛，狂比心。"
                        price="NT$29,900 起"
                        src="/images/iphone-15.jpg"
                        alt="IPHONE 15"
                    />

                    <SectionItem
                        name="MACBOOK PRO"
                        title="炫技，炫目。"
                        price="NT$54,900 起"
                        src="/images/macbook-pro.jpg"
                        alt="MACBOOK PRO"
                    />

                    <SectionItem
                        name="APPLE WATCH ULTRA 2"
                        title="征途，再超越。"
                        price="NT$27,900 起"
                        src="/images/watch-ultra.jpg"
                        alt="APPLE WATCH ULTRA 2"
                    />

                    <SectionItem
                        name="IPAD PRO"
                        title="來自 M2 的超強驅動。"
                        price="NT$27,900 起"
                        src="/images/ipad-pro.jpg"
                        alt="IPAD PRO"
                        id="white"
                    />

                    <SectionItem
                        name="APPLE WATCH SE"
                        title="超有才，輕鬆愛"
                        price="NT$27,900 起"
                        src="/images/watch-se.jpg"
                        alt="APPLE WATCH SE"
                    />

                    <SectionItem
                        name="全新"
                        title="吸睛新色，腕上放閃。"
                        price="選購最新款式與顏色的錶帶"
                        src="/images/watch-bands.jpg"
                        alt="APPLE WATCH SE"
                    />

                </div>
            </div>
            {/*  End section1 */}

            {/* Start section2 */}
            <div className="section section2">
                <div className="sec-title">周邊配件 <span style={{ color: 'grey' }}>精彩配件，款款都是心愛裝置的必搭絕配。</span></div>
                <div className="sec-item">

                    <SectionItem
                        title="跟緊潮流新色。"
                        price="看看你最愛的配件新色彩"
                        src="/images/accessories.jpg"
                        alt="accessories"
                    />

                    <div className="item-col">

                        <WrapperImg src="/images/MWND3.jpg" alt="MWND3" />

                        <div className="colorbox">
                            <div className="box" id="A"></div>
                            <div className="box" id="B"></div>
                            <div className="box" id="C"></div>
                            <div className="box" id="D"></div>
                            <div className="box" id="E"></div>
                            <div className="box" id="F"></div>
                        </div>

                        <ProText 
                        new="全新" 
                        name="iPhone 15 MagSafe 矽膠保護殼 - 淡藍色"
                        price="NT$1,590"
                        />

                    </div>

                    <div className="item-col">

                        <WrapperImg src="/images/HRDT2.jpg" alt="HRDT2" />

                        <div className="colorbox">
                            <div className="box" id="A"></div>
                            <div className="box" id="B"></div>
                            <div className="box" id="C"></div>
                            <div className="box" id="D"></div>
                            <div className="box" id="E"></div>
                        </div>

                        <ProText 
                        name="Tech21 FlexQuartz，適用於iPhone 15 (MegSafe 相容) - ..."
                        price="NT$1,490"
                        />

                    </div>

                    <div className="item-col">

                        <WrapperImg src="/images/HRDZ2.jpg" alt="HRDZ2" />

                        <ProText 
                        name="Tech21 EvoPink，適用於AirTag (2件裝)"
                        price="NT$990"
                        />

                    </div>

                    <div className="item-col">

                        <WrapperImg src="/images/MW4Q3.jpg" alt="MW4Q3" />

                        <div className="colorbox">
                            <div className="box" id="A"></div>
                            <div className="box" id="B"></div>
                            <div className="box" id="C"></div>
                            <div className="box" id="D"></div>
                            <div className="box" id="E"></div>
                            <div className="box" id="F"></div>
                        </div>

                        <ProText 
                        new="全新" 
                        name="45 公釐淡薄荷色運動型錶環"
                        price="NT$1,600"
                        />

                    </div>

                    <div className="item-col">

                        <WrapperImg src="/images/MWMW3ref.jpg" alt="MWMW3ref" />

                        <div className="colorbox">
                            <div className="box" id="A"></div>
                            <div className="box" id="B"></div>
                            <div className="box" id="C"></div>
                            <div className="box" id="D"></div>
                            <div className="box" id="E"></div>
                            <div className="box" id="F"></div>
                        </div>

                        <ProText 
                        new="全新" 
                        name="45 公釐日照色運動型錶帶 - M/L"
                        price="NT$1,600"
                        />

                    </div>

                    <div className="item-col">

                        <WrapperImg src="/images/MT263.jpg" alt="MT263" />

                        <div className="colorbox">
                            <div className="box" id="A"></div>
                            <div className="box" id="B"></div>
                            <div className="box" id="C"></div>
                            <div className="box" id="D"></div>
                            <div className="box" id="E"></div>
                        </div>

                        <ProText 
                        name="iPhone MagSafe 精細織紋卡套"
                        price="NT$1,890"
                        />

                    </div>

                    <div className="item-col">

                        <WrapperImg src="/images/MT4u3.jpg" alt="MT4u3" />

                        <div className="colorbox">
                            <div className="box" id="A"></div>
                            <div className="box" id="B"></div>
                            <div className="box" id="C"></div>
                            <div className="box" id="D"></div>
                            <div className="box" id="E"></div>
                        </div>

                        <ProText 
                        name="iPhone 15 Pro MagSafe 精細織紋保護套 - 萬年青色"
                        price="NT$1,890"
                        />

                    </div>

                    <div className="item-col">

                        <WrapperImg src="/images/MT2M3.jpg" alt="MT2M3" />

                        <div className="colorbox">
                            <div className="box" id="A"></div>
                            <div className="box" id="B"></div>
                            <div className="box" id="C"></div>
                            <div className="box" id="D"></div>
                            <div className="box" id="E"></div>
                        </div>

                        <ProText 
                        name="AirTag 精細織紋鑰匙圈 - 珊瑚色"
                        price="NT$1,290"
                        />

                    </div>

                    <SectionItem
                        title="探索所有配件。"
                        src="/images/accessories-explore.jpg"
                        alt="accessories-explore"
                    />

                </div>
            </div>
            {/* End section2 */}

            {/* Start section3 */}
            <div className="section section3">
                <div className="sec-title">清亮動聽。<span style={{ color: 'grey' }}>層次豐富的高音質，款款都是好選擇。</span></div>
                <div className="sec-item">

                    <SectionItem
                        title="免費試用 Apple Music 6 個月。"
                        price="隱附於 iphone、HomePad、AirPods 或特定 Beats 產品。"
                        src="/images/applemusic.jpg"
                        alt="accessories"
                        id="narrow"
                    />

                    <div className="item-col">

                        <WrapperImg src="/images/MTJV3.jpg" alt="MTJV3" />

                        <ProText 
                        new="免額外付費鐫刻服務" 
                        name="AirPods Pro (第2代) 搭配 MagSafe 充電盒 (USB-C)"
                        price="NT$7,490"
                        />

                    </div>

                    <div className="item-col">

                        <WrapperImg src="/images/homepod-select-midnight-202210.jpg" alt="homepod-midnight" />

                        <div className="colorbox">
                            <div className="box" id="A"></div>
                            <div className="box" id="B"></div>
                        </div>

                        <ProText 
                        name="HomePod - 午夜色"
                        price="NT$9,300"
                        />

                    </div>

                </div>
            </div>
            {/* End section3 */}

        </div>
    )
}

export default Main;
//----------------------------------------------------
function SectionItem(props) {
    return (
        <div className="item-col">
            <div className="col-info" id={props.id}>
                <h6 className="name">{props.name}</h6>
                <h2 className="title">{props.title}</h2>
                <h5 className="price">{props.price}</h5>
            </div>
            <div className="col-wrapper">
                <img src={props.src} alt={props.alt}></img>
            </div>
        </div>
    )
}

function WrapperImg(props) {
    return (
        <div className="pro-wrapper">
            <img src={props.src} alt={props.alt}></img>
        </div>
    )
}
function ProText(props) {
    return (
        <div className="pro-info">
            <h6 className="new">{props.new}</h6>
            <h4 className="proName">{props.name}</h4>
            <h5 className="price">{props.price}</h5>
        </div>
    )
}