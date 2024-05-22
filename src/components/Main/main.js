import React, { useEffect, useState } from "react";
import { productData } from "../../Api";
import { mainContent } from '../../Content/content';

import ContantTitle from "./contantTitle";
import ScrollBar from "../Common/scrollBar";
import ProductItem from "../Common/productItem";
import SectionProductItem from "./section1ProductItem";
import Section2ProductItem from "./section2ProductItem";
import Section3ProductItem from "./section3ProductItem";

const Main = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const products = await productData();
            setData(products);
        };
        fetchData();
    }, []);

    if (data === null) {
        return <div></div>;
    }

    return (
        <div className="main">


            <div className="section-title">
                {mainContent && mainContent.map((item) => {
                    return item.header.map((text, index) => {
                        return (
                            <ContantTitle
                                key={index}
                                title={text.title}
                                subtitle={text.subtitle}
                            />
                        )
                    })
                })}
                <ContantTitle
                    style={{
                        margin: "80px 0 64px 0",
                        fontSize: "48px",
                        width: "600px"
                    }}
                />
                <div className="product-item">
                    {data && data.map((item) => (
                        <ProductItem
                            key={item.id}
                            text={item.name}
                            alt={item.name}
                            src={item.src}
                        />
                    ))}
                </div>
            </div>


            <div className="section section1">
                <ContantTitle
                    style={{
                        fontSize: "28px"
                    }}
                    title="最新登場。"
                    subtitle="現在就來看看有哪些新品推薦。"
                />

                <ScrollBar>
                    <SectionProductItem />
                </ScrollBar>

            </div>

            <div className="section section2">
                <ContantTitle
                    style={{
                        fontSize: "28px"
                    }}
                    title="周邊配件。"
                    subtitle="精彩配件，款款都是心愛裝置的必搭絕配。"
                />

                <ScrollBar>
                    <Section2ProductItem />
                </ScrollBar>

            </div>

            <div className="section section3">

                <ContantTitle
                    style={{
                        fontSize: "28px"
                    }}
                    title="清亮動聽。"
                    subtitle="層次豐富的高音質，款款都是好選擇。"
                />


                <ScrollBar>
                    <Section3ProductItem />
                </ScrollBar>
            </div>


        </div>
    )
}

export default Main;