import ContantTitle from "./contant-title";
import ProductPage from "./product-page";
import Section from "./section";
import SectionItem from "./section-item";
import SectionProductItem from "./section1-product-item";

function Main() {
    return (
        <div className="main">

            {/* Start section1 */}
            <div className="section-title">
                <ContantTitle
                    style={{
                        margin: "80px 0 64px 0",
                        fontSize: "48px",
                        width: "600px"
                    }}
                    title="商店。"
                    subtitle="購買你喜愛的產品，這是最好的方式。"
                />
                <ProductPage />
            </div>


            <div className="section section1">
                <ContantTitle
                    style={{
                        fontSize: "28px"
                    }}
                    title="最新登場。"
                    subtitle="現在就來看看有哪些新品推薦。"
                />
                
                <Section>
                    <SectionProductItem/>
                </Section>
                
            </div>


            
            {/*  End section1 */}

            {/* Start section2 */}
            <div className="section section2">
                <ContantTitle
                    style={{
                        fontSize: "28px"
                    }}
                    title="周邊配件。"
                    subtitle="精彩配件，款款都是心愛裝置的必搭絕配。"
                />

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

                <ContantTitle
                    style={{
                        fontSize: "28px"
                    }}
                    title="清亮動聽。"
                    subtitle="層次豐富的高音質，款款都是好選擇。"
                />

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

                    <div className="item-col">

                        <WrapperImg src="/images/homepod-mini-select-yellow-202110.jpg" alt="homepod-mini" />

                        <div className="colorbox">
                            <div className="box" id="A"></div>
                            <div className="box" id="B"></div>
                        </div>

                        <ProText
                            name="HomePod mini - 黃色"
                            price="NT$3,000"
                        />

                    </div>

                    <div className="item-col">

                        <WrapperImg src="/images/airpods-max-select-silver-202011.jpg" alt="airpods-max-silver" />

                        <div className="colorbox">
                            <div className="box" id="A"></div>
                            <div className="box" id="B"></div>
                        </div>

                        <ProText
                            new="免額外付費鐫刻服務"
                            name="AirPods Max - 銀色"
                            price="NT$17,990"
                        />

                    </div>

                    <div className="item-col">

                        <WrapperImg src="/images/MME73.jpg" alt="MME73" />

                        <ProText
                            new="免額外付費鐫刻服務"
                            name="AirPods (第 3 代) 搭配 Lightning 充電盒"
                            price="NT$5,590"
                        />

                    </div>

                    <div className="item-col">

                        <WrapperImg src="/images/MQLK3.jpg" alt="MQLK3" />

                        <div className="colorbox">
                            <div className="box" id="A"></div>
                            <div className="box" id="B"></div>
                        </div>

                        <ProText
                            name="Beats Studio Buds + 真無線降噪耳塞式耳機 — 透明"
                            price="NT$5,990"
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