//import content
import { watchProductData } from "../../Api/index.js";
import { watch, navBar } from '../../Content/index.js';

//import hook
import useFetchData from "../../Hooks/useFetchData.js";

//import component
import { NavBarLargeList, NavBarSmallList } from "../Common/navbarList.js";
import ProductItem from "../Common/productItem.js";
import SectionTitle from '../Common/sectionTitle.js';
import ScrollBar from '../Common/scrollBar.js';
import LinkButton from '../Common/Button/linkButton.js';
import { ProductCardWrapper, CardInfo, ProductCardCenter } from '../Common/productCard.js';
import ProductInformationCard from '../Common/productInformationCard.js';
import { ButtonItem } from "../Common/Button/buttonItem.js";
import { ProductInformation as ProInfo } from '../../components/Common/proInfo.js';

const Watch = () => {

    const { data, loading, error } = useFetchData(watchProductData);

    //take data
    const selectedData = navBar.navBarWatchList[0];
    const otherData = navBar.navBarWatchList.slice(1);
    const proData = watch[0].product_information[0];

    if (loading) return <div></div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="watch">
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
                {watch && watch.map((item) => {
                    return item.header && item.header.map((header, index) => (
                        <SectionTitle
                            key={index}
                            title={header.title}
                            subtitle={header.subtitle}
                        />
                    ));
                })}
            </div>

            <div className="section section2">
                {watch && watch.map((item) => {
                    return item.section_2 && item.section_2.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                        />
                    ));
                })}
                <ScrollBar>
                    <div className="section-items">
                        {watch && watch.map((item) => {
                            return item.section_2 && item.section_2.map((items) => {
                                return items.info_item && items.info_item.map((info, index) => {
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
                {watch && watch.map((item) => {
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
                        {watch && watch.map((item) => {
                            return item.section_3 && item.section_3.map((items) => {
                                return items.product_info_item && items.product_info_item.map((info, index) => {
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
                {watch && watch.map((item) => {
                    return item.section_4 && item.section_4.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                            subtitle={info.subtitle}
                        />
                    ));
                })}

                {watch && watch.map((item) => {
                    return item.section_4 && item.section_4.map((items) => {
                        return items.section_4_info && items.section_4_info.map((info) => {
                            return (
                                <ProductCardWrapper>
                                    <div className="text-info">
                                        <CardInfo
                                            title={info.title}
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
                {watch && watch.map((item) => {
                    return item.section_5 && item.section_5.map((info, index) => {
                        return (
                            <SectionTitle
                                key={index}
                                title={info.title}
                            />
                        )
                    })
                })}
                <div className="product-info-item">
                    {watch && watch.map((item) => {
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
                                            ps={info.postscript}
                                            subtitle={info.link}
                                        />
                                    </ProductCardCenter>
                                )
                            })
                        })

                    })}
                </div>

            </div>

            <div className="section section6">
                {watch && watch.map((item) => (
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

            <div className="section last">
                <h2 className="title">Apple Watch</h2>
                <div className="section-last-info">

                    <NavBarLargeList
                        title={selectedData.title}
                        items={selectedData.listItem}
                    >
                        <>
                            <br />
                            <h4>比較 Watch 錶款</h4>
                            <h4>Apple Watch 的好處</h4>
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

export default Watch;