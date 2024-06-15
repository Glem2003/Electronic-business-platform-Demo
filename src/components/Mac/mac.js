import React, { useState } from "react";

//import content
import { macProductData } from "../../Api/index.js";
import { navBar, mac } from '../../Content/index.js';

//import hook
import useFetchData from "../../Hooks/useFetchData.js";

//import component
import ProductItem from "../Common/productItem.js";
import SectionTitle from '../Common/sectionTitle.js';
import ScrollBar from '../Common/scrollBar.js';
import ProductInfoItem from "../Common/productInfoItem.js";
import { NavBarLargeList, NavBarSmallList } from "../Common/navbarList.js";
import { ProductCardWrapper, CardInfo, ProductCardCenter } from '../Common/productCard.js';
import LinkButton from '../Common/Button/linkButton.js';
import ProductInformationCard from "../Common/productInformationCard.js";
import { ProductInformation as ProInfo } from '../../components/Common/proInfo.js';

const Mac = () => {

    const { data, loading, error } = useFetchData(macProductData);

    //take data
    const selectedData = navBar.navBarMacList[0];
    const otherData = navBar.navBarMacList.slice(1);
    const proData = mac[0].product_information[0];

    //set initial value
    const [activeList, setActiveList] = useState('list1');

    if (loading) return <div></div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleListClick = (list) => {
        setActiveList(list);
    };

    return (
        <div className="mac">
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
            {mac && mac.map((item) => {
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
                {mac && mac.map((item) => {
                    return item.header && item.header.map((header, index) => {
                        return (
                            <SectionTitle
                                key={index}
                                title={header.title}
                                subtitle={header.subtitle}
                            />
                        )
                    });
                })}
            </div>

            <div className="section section2">
                {mac && mac.map((item) => {
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
                        {mac && mac.map((item) => {
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
                {mac && mac.map((item) => (
                    item.section_3.map((info, index) => {
                        return (
                            <SectionTitle
                                key={index}
                                title={info.title}
                                subtitle={info.subtitle}
                            />
                        )
                    })
                ))}

                <ul>
                    {mac && mac.map((item) => (
                        item.section_3.map((info) => (
                            info.selectList.map((text, index) => (
                                <li
                                    key={`${index}`}
                                    className={activeList === `list${index + 1}` ? 'click' : ''}
                                    onClick={() => handleListClick(`list${index + 1}`)}
                                >
                                    {text}
                                </li>
                            ))
                        ))
                    ))}
                </ul>

                <div className="contain">
                    <div className={`items laptops ${activeList === 'list1' ? 'show' : ''}`}>
                        {mac && mac.map((item) => (
                            item.section_3.map((item) => (
                                item.product_info_item.map((item) => (
                                    item.laptops.map((info, index) => {
                                        return (
                                            <ProductInformationCard
                                                key={index}
                                                src={info.src}
                                                alt={info.alt}
                                                color={info.color}
                                                postscript={info.postscript}
                                                title={info.title}
                                                subtitle={info.subtitle}
                                                text={info.text}
                                                price={info.price}
                                                btn={info.btn}
                                                cardTitle={info.cardTitle}
                                                cardText={info.cardText}
                                                productInfoItem={info.productInfoItem}
                                            />
                                        )
                                    })
                                ))
                            ))
                        ))}
                    </div>
                    <div className={`items desktops ${activeList === 'list2' ? 'show' : ''}`}>
                        <ScrollBar>
                            <div className="product-items">
                                {mac && mac.map((item) => (
                                    item.section_3.map((item) => (
                                        item.product_info_item.map((item) => (
                                            item.desktops.map((info, index) => {
                                                return (
                                                    <ProductInformationCard
                                                        key={index}
                                                        src={info.src}
                                                        alt={info.alt}
                                                        color={info.color}
                                                        postscript={info.postscript}
                                                        title={info.title}
                                                        subtitle={info.subtitle}
                                                        text={info.text}
                                                        price={info.price}
                                                        btn={info.btn}
                                                        cardTitle={info.cardTitle}
                                                        cardText={info.cardText}
                                                        productInfoItem={info.productInfoItem}
                                                    />
                                                )
                                            })
                                        ))
                                    ))
                                ))}
                            </div>
                        </ScrollBar>
                    </div>
                    <div className={`items displays ${activeList === 'list3' ? 'show' : ''}`}>
                        {mac && mac.map((item) => (
                            item.section_3.map((item) => (
                                item.product_info_item.map((item) => (
                                    item.displays.map((info, index) => {
                                        return (
                                            <ProductInformationCard
                                                key={index}
                                                src={info.src}
                                                alt={info.alt}
                                                color={info.color}
                                                postscript={info.postscript}
                                                title={info.title}
                                                subtitle={info.subtitle}
                                                text={info.text}
                                                price={info.price}
                                                btn={info.btn}
                                                cardTitle={info.cardTitle}
                                                cardText={info.cardText}
                                                productInfoItem={info.productInfoItem}
                                            />
                                        )
                                    })
                                ))
                            ))
                        ))}
                    </div>
                </div>
            </div>

            <div className="section section4">
                {mac && mac.map((item) => (
                    item.product_information.map((info, index) => {
                        return (
                            <SectionTitle
                                key={index}
                                title={info.title}
                            />
                        )
                    })
                ))}
                <ProInfo textData={proData.list_item} />
            </div>

            <div className="section section5">
                {mac && mac.map((item) => (
                    item.section4.map((info, index) => {
                        return (
                            <SectionTitle
                                key={index}
                                title={info.title}
                                subtitle={info.subtitle}
                            />
                        )
                    })
                ))}

                <div className="container">
                    {mac && mac.map((item) => (
                        item.section4.map((item) => (
                            item.list_item.map((info, index) => {
                                return (
                                    <ProductCardCenter
                                        key={index}
                                        src={info.src}
                                        alt={info.alt}
                                    >
                                        <CardInfo
                                            title={info.title}
                                            text={info.text}
                                            ps={info.postscript}
                                            subtitle={info.link}
                                        />
                                    </ProductCardCenter>
                                )
                            })
                        ))
                    ))}
                </div>
            </div>

            <div className="section last">
                <h2 className="title">Mac</h2>
                <div className="section-last-info">
                    <NavBarLargeList
                        title={selectedData.title}
                        items={selectedData.listItem}
                    >
                        <>
                            <br />
                            <h4>比較 Mac 機型</h4>
                            <h4>Mac 辦得到</h4>
                        </>
                    </NavBarLargeList>
                    {otherData && otherData.map((data, index) => (
                        <NavBarSmallList key={index} title={data.title} items={data.listItem} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Mac;