import React, { useEffect, useState } from "react";
import { iPadProductData } from "../../Api/index.js";
import { ipadContent } from '../../Content/content.js';

// import component
import ProductItem from "../Common/productItem.js";
import SectionTitle from '../Common/sectionTitle.js';
import ScrollBar from '../Common/scrollBar.js';
import LinkButton from '../Common/linkButton.js';
import { ProductCardWrapper, CardInfo } from '../Common/productCard.js';
import ProductInformationCard from "../Common/productInformationCard.js";

const IPad = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const products = await iPadProductData();
            setData(products);
        };
        fetchData();
    }, []);

    if (data === null) {
        return <div></div>;
    }
    return (
        <div className="iPad">
            <div className="Product-items">
                {data && data.map((item) => {
                    return (
                        <ProductItem
                            key={item.id}
                            text={item.text}
                            PS={item.postscript}
                            alt={item.text}
                            src={item.src}
                        />
                    )
                })}
            </div>
            <div className="section section1">
                {ipadContent && ipadContent.map((item) => {
                    return item.header.map((header, index) => {
                        return (
                            <SectionTitle
                                key={index}
                                title={header.title}
                                subtitle={header.subtitle}
                            />
                        )
                    })
                })}
            </div>

            <div className="section section2">
                {ipadContent && ipadContent.map((item) => {
                    return item.section_info && item.section_info.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                        />
                    ));
                })}
                <ScrollBar>
                    <div className="section-items">
                        {ipadContent && ipadContent.map((item) => {
                            return item.section_info.map((items) => {
                                return items.info_item.map((info, index) => {
                                    return (
                                        <ProductCardWrapper
                                            key={index}
                                            src={info.src}
                                        >
                                            <CardInfo
                                                title={info.title}
                                                subtitle={info.subtitle}
                                            />
                                            <LinkButton />
                                        </ProductCardWrapper>
                                    )
                                })
                            })
                        })}
                    </div>
                </ScrollBar>
            </div>

            <div className="section section3">
                <ProductInformationCard
                    src="src"
                    alt="alt"
                    color={["red", "yellow"]}
                    postscript="new"
                    title="iPhone 15 Pro"
                    text="lorem lorem lorem lorem"
                    price="$36,900起"
                    btn={["buy","more"]}
                    productInfoItem={[
                        { src: "src1", alt: "alt1", text: "text1" },
                        { src: "src2", alt: "alt2", text: "text2" }
                    ]}
                />
            </div>

        </div>
    )
}

export default IPad;