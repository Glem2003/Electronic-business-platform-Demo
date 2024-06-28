import React from 'react';
import { tvHomeProductData } from "../../Api";
import { tvFamily } from '../../Content/index.js';
import useFetchData from "../../Hooks/useFetchData.js";
import ProductItem from "../Common/productItem";
import SectionTitle from '../Common/sectionTitle.js';
import { ProductCardCenter, CardInfo } from '../Common/productCard.js';
import { ButtonItem } from '../Common/Button/buttonItem.js';
import ScrollBar from '../Common/scrollBar.js';

const TvHome = () => {
    const { data, loading, error } = useFetchData(tvHomeProductData);

    if (loading) return <div></div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="tv-home">
            <div className="Product-items">
                {data && data.map((item) => (
                    <ProductItem
                        key={item.id}
                        text={item.text}
                        PS={item.postscript}
                        alt={item.text}
                        src={item.src}
                    />
                ))}
            </div>

            <div className="section section1">
                {tvFamily && tvFamily.map((item) => (
                    item.header && item.header.map((text, index) => (
                        <SectionTitle
                            key={index}
                            title={text.title}
                            subtitle={text.text}
                        />
                    ))
                ))}
            </div>

            <div className="section section2">
                {tvFamily && tvFamily.map((item) => (
                    item.banner_item && item.banner_item.map((info, index) => (
                        <ProductCardCenter
                            key={index}
                            src={`${process.env.PUBLIC_URL}${info.src}`}
                        >
                            {info.headerImg ? (
                                <CardInfo
                                    title={info.title}
                                    subtitle={info.text}
                                    text={info.price}
                                    src={`${process.env.PUBLIC_URL}${info.headerImg}`}
                                >
                                    <ButtonItem
                                        props={info.link}
                                    />
                                </CardInfo>
                            ) : (
                                <CardInfo
                                    title={info.title}
                                    subtitle={info.text}
                                    text={info.price}
                                >
                                    <ButtonItem
                                        props={info.link}
                                    />
                                </CardInfo>
                            )}

                        </ProductCardCenter>
                    ))
                ))}
            </div>

            <div className="section section3">
                {tvFamily && tvFamily.map((item) => (
                    item.section_2 && item.section_2.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                            subtitle={info.subtitle}
                        />
                    ))
                ))}

                <ScrollBar>
                    <div className="section-items">
                        {tvFamily && tvFamily.map((item) => (
                            item.section_2 && item.section_2.map((items) => (
                                items.info_item && items.info_item.map((info, index) => (
                                    {
                                        ...info.src ? (
                                            <ProductCardCenter
                                                key={index}
                                                src={`${process.env.PUBLIC_URL}${info.src}`}
                                            >
                                                <div className="infos-item">
                                                    <CardInfo
                                                        text={info.text}
                                                    >
                                                        {info.link && (
                                                            <ButtonItem
                                                                props={info.link}
                                                            />
                                                        )}
                                                        {info.textList && (
                                                            <div className="section-quotes-wrapper">
                                                                {info.textList.map((list, index) => (
                                                                    <p className="animation-text" key={index}>{list.text}</p>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </CardInfo>
                                                </div>
                                            </ProductCardCenter>
                                        ) : (
                                            <ProductCardCenter
                                                key={index}
                                            >
                                                <div className="infos-item">
                                                    <CardInfo
                                                        text={info.text}
                                                    >
                                                        {info.link && (
                                                            <ButtonItem
                                                                props={info.link}
                                                            />
                                                        )}
                                                        {info.textList && (
                                                            <div className="section-quotes-wrapper">
                                                                {info.textList.map((list, index) => (
                                                                    <p className="animation-text" key={index}>{list.text}</p>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </CardInfo>
                                                </div>
                                            </ProductCardCenter>
                                        )
                                    }
                                ))
                            ))
                        ))}
                    </div>
                </ScrollBar>
            </div>

            <div className="section section4">
                {tvFamily && tvFamily.map((item) => (
                    item.section_3 && item.section_3.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                            subtitle={info.subtitle}
                        />
                    ))
                ))}
                <div className="product-info-item">
                    {tvFamily && tvFamily.map((item) => (
                        item.section_3 && item.section_3.map((item) => (
                            item.info_item && item.info_item.map((info, index) => (
                                <ProductCardCenter
                                    key={index}
                                    src={`${process.env.PUBLIC_URL}${info.src}`}
                                    alt={info.alt}
                                >
                                    <CardInfo
                                        title={info.title}
                                        text={info.text}
                                        ps={info.postscript}
                                        subtitle={info.link}
                                    />
                                    <p>{info.img_text}</p>
                                </ProductCardCenter>
                            ))
                        ))
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TvHome;