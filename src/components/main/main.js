import ContantTitle from "./contant-title";
import ProductPage from "./product-page";
import Section from "./section";
import SectionProductItem from "./section1-product-item";
import Section2ProductItem from "./section2-product-item";
import Section3ProductItem from "./section3-product-item";

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
                    <SectionProductItem />
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

                <Section>
                    <Section2ProductItem />
                </Section>

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


                <Section>
                    <Section3ProductItem/>
                </Section>
            </div>
            {/* End section3 */}

        </div>
    )
}

export default Main;