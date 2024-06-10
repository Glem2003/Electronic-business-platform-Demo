//import content
import { iPhoneProductData } from "../../Api";
import { iphone, navBar } from '../../Content/index.js';

//import hook
import useFetchData from "../../Hooks/useFetchData.js";

//import component
import { NavBarLargeList, NavBarSmallList } from "../Common/navbarList.js";
import ProductItem from "../Common/productItem";
import SectionTitle from '../Common/sectionTitle.js';
import ProductInfoItem from "../Common/productInfoItem";
import ScrollBar from '../Common/scrollBar.js';
import LinkButton from '../Common/linkButton.js';
import { ProductCardCenter, ProductCardWrapper, CardInfo } from '../Common/productCard.js';
import ProductInformationCard from '../Common/productInformationCard.js';
import ButtonItem from "../Common/buttonItem.js";

const Iphone = () => {

    const { data, loading, error } = useFetchData(iPhoneProductData);

    const selectedData = navBar.navBarIphoneList[0];
    const otherData = navBar.navBarIphoneList.slice(1);

    if (loading) return <div></div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="iphone">
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

            {iphone && iphone.map((item) => {
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
                {iphone && iphone.map((item) => {
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
                {iphone && iphone.map((item) => {
                    return item.section_info && item.section_info.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                        />
                    ));
                })}
                <ScrollBar>
                    <div className="section-items">
                        {iphone && iphone.map((item) => {
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
                {iphone && iphone.map((item) => {
                    return item.section_3 && item.section_3.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                            subtitle={info.subtitle}
                        />
                    ));
                })}

                <ScrollBar>
                    <div className="product-items">
                        {iphone && iphone.map((item) => {
                            return item.section_3 && item.section_3.map((item) => {
                                return item.product_info_item && item.product_info_item.map((info, index) => {
                                    return (
                                        <ProductInformationCard
                                            key={index}
                                            src={info.src}
                                            alt={info.alt}
                                            color={info.color}
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
                </ScrollBar>

            </div>

            <div className="section section4">
                {iphone && iphone.map((item) => {
                    return item.section_4 && item.section_4.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                        />
                    ));
                })}

                {iphone && iphone.map((item) => {
                    return item.section_4 && item.section_4.map((items) => {
                        return items.info && items.info.map((info) => {
                            return (
                                <ProductCardWrapper>
                                    <div className="text-info">
                                        <CardInfo
                                            text={info.text}
                                        />
                                        <ButtonItem
                                            props={info.link}
                                        />
                                    </div>
                                </ProductCardWrapper>
                            )
                        })
                    })
                })}
            </div>

            <div className="section section5">
                {iphone && iphone.map((item) => {
                    return item.section_5 && item.section_5.map((info, index) => {
                        return (
                            <SectionTitle
                                key={index}
                                title={info.title}
                                subtitle={info.subtitle}
                            />
                        )
                    });
                })}

                <div className="product-info-item">
                    {iphone && iphone.map((item) => {
                        return item.section_5 && item.section_5.map((item) => {
                            return item.info_item && item.info_item.map((info, index) => {
                                return (
                                    <ProductCardCenter
                                        key={index}
                                        src={info.src}
                                        alt={info.alt}
                                    >
                                        <CardInfo
                                            title={info.title}
                                            text={info.text}
                                            subtitle={info.link}
                                        />
                                    </ProductCardCenter>
                                )
                            })
                        })
                    })}
                </div>

            </div>

            <div className="section last">
                <h1 className="title">iPhone</h1>
                <div className="section-last-info">

                    <NavBarLargeList
                        title={selectedData.title}
                        items={selectedData.listItem}
                    >
                        <>
                            <br />
                            <h4>比較 iPhone</h4>
                            <h4>從 Android 轉用</h4>
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

export default Iphone;