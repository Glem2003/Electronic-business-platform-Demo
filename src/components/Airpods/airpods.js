import React, { useEffect, useState } from "react";
import { airpodProductData } from "../../Api/index.js";
import { airpodsContent } from '../../Content/content.js';

// import component
import ProductItem from "../Common/productItem.js";
import ProductInfoItem from "../Common/productInfoItem";
import WrapperCard from '../Common/wrapperCard.js';
import ButtonItem from '../Common/buttonItem.js';
import SectionTitle from '../Common/sectionTitle.js';
import ScrollBar from '../Common/scrollBar.js';
import { ProductCardCenter, CardInfo } from '../Common/productCard.js';
import LinkButton from '../Common/linkButton.js';
import ProductInformationCard from '../Common/productInformationCard.js';

const Airpods = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const products = await airpodProductData();
            setData(products);
        };
        fetchData();
    }, []);

    if (data === null) {
        return <div></div>;
    }

    return (
        <div className="airpods">

            <div className="Product-items">
                {data && data.map((item) => {
                    return (
                        <ProductItem
                            key={item.id}
                            text={item.text}
                            alt={item.text}
                            src={item.src}
                        />
                    )
                })}
            </div>

            {airpodsContent && airpodsContent.map((item) => {
                return item.ads_text && item.ads_text.map((ads, index) => {
                    return (
                        <ProductInfoItem
                            key={index}
                            text={ads.text}
                            linkText={ads.link}
                        />
                    )
                })
            })}

            <div className="section section1">
                {airpodsContent && airpodsContent.map((item) => {
                    return item.banner_item && item.banner_item.map((item, index) => {
                        return (
                            <WrapperCard
                                key={index}
                                title={item.title}
                                subtitle={item.subtitle}
                                className={`card-item`}
                            >
                                <div className="wrapper-item">
                                    <div></div>
                                    <div></div>
                                </div>

                                <ButtonItem
                                    props={item.link}
                                />
                            </WrapperCard>
                        )
                    })
                })}
            </div>

            <div className="section section2">
                {airpodsContent && airpodsContent.map((item) => {
                    return item.section_info && item.section_info.map((info, index) => {
                        return (
                            <SectionTitle
                                key={index}
                                title={info.title}
                            />
                        )
                    });
                })}

                <ScrollBar>
                    <div className="section-items">
                        {airpodsContent && airpodsContent.map((item) => {
                            return item.section_info.map((items) => {
                                return items.info_item.map((info, index) => {
                                    return (
                                        <ProductCardCenter
                                            key={index}
                                            src={info.src}
                                        >
                                            <div className="infos-item">
                                                <CardInfo
                                                    title={info.title}
                                                    subtitle={info.subtitle}
                                                />
                                                <LinkButton />
                                            </div>

                                        </ProductCardCenter>
                                    )
                                })
                            })
                        })}
                    </div>
                </ScrollBar>

            </div>

            <div className="section section3">
                {airpodsContent && airpodsContent.map((item) => {
                    return item.section_3 && item.section_3.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                            subtitle={info.subtitle}
                        />
                    ));
                })}

                <div className="product-items">
                    {airpodsContent && airpodsContent.map((item) => {
                        return item.section_3 && item.section_3.map((item) => {
                            return item.product_info_item && item.product_info_item.map((info, index) => {
                                return (
                                    <ProductInformationCard
                                        key={index}
                                        src={info.src}
                                        postscript={info.postscript}
                                        title={info.title}
                                        text={info.text}
                                        price={info.price}
                                        btn={info.btn}
                                        productInfoItem={info.productInfoItem}
                                    />
                                )
                            })
                        })
                    })}
                </div>
                <hr/>

            </div>

            <div className="section section4">
                {airpodsContent && airpodsContent.map((item) => {
                    return item.section_4 && item.section_4.map((info, index) => {
                        return (
                            <ProductCardCenter
                                key={index}
                            >
                                <CardInfo
                                    title={info.title}
                                    subtitle={info.text}
                                    text={info.link}
                                />
                            </ProductCardCenter>
                        )
                    });
                })}
            </div>

        </div>
    )
}

export default Airpods;