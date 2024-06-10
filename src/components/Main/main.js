//import content
import { productData, productTextData } from "../../Api";
import { main } from '../../Content/index';

//import hook
import useFetchData from "../../Hooks/useFetchData.js";

//import component
import ContantTitle from "./contantTitle";
import ScrollBar from "../Common/scrollBar";
import ProductItem from "../Common/productItem";
import { CardInfo, ProductCardWrapper, ProductCardCenter, ColorBox } from "../Common/productCard";

const Main = () => {
    
    const { data: isProductData, loading: loadingProductData, error: errorProductData } = useFetchData(productData);
    const { data: isProductTextData, loading: loadingProductTextData, error: errorProductTextData } = useFetchData(productTextData);

    if (loadingProductData || loadingProductTextData) {
        return <div>Loading...</div>;
    }

    if (errorProductData || errorProductTextData) {
        return <div>Error: {errorProductData?.message || errorProductTextData?.message}</div>;
    }

    if (!isProductData || !isProductTextData) {
        return <div>No Data Available</div>;
    }

    return (
        <div className="main">

            <div className="section-title">
                {main && main.map((item) => {
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

                <div className="product-item">
                    {isProductData && isProductData.map((item) => (
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
                {main && main.map((item) => {
                    return item.section_1.map((text, index) => {
                        return (
                            <ContantTitle
                                key={index}
                                title={text.title}
                                subtitle={text.subtitle}
                            />
                        )
                    })
                })}

                <ScrollBar>
                    <div className="section-items">

                        {isProductTextData && isProductTextData.map((product, index) => (
                            <div className="item-col">
                                <ProductCardWrapper
                                    key={index}
                                    src={product.src}
                                    alt={product.subtitle}
                                >
                                    <CardInfo
                                        title={product.name}
                                        subtitle={product.title}
                                        text={product.price}
                                    />
                                </ProductCardWrapper>
                            </div>
                        ))}
                    </div>
                </ScrollBar>

            </div>

            <div className="section section2">
                {main && main.map((item) => {
                    return item.section_2.map((text, index) => {
                        return (
                            <ContantTitle
                                key={index}
                                title={text.title}
                                subtitle={text.subtitle}
                            />
                        )
                    })
                })}

                <ScrollBar>
                    <div className="section-items">
                        {main && main.map((item) => {
                            return item.section_2 && item.section_2.map((item) => {
                                return item.info_item && item.info_item.map((info, index) => {
                                    const titleInfo = info.title;
                                    return (
                                        <div className="item-col">
                                            <ProductCardWrapper
                                                key={index}
                                                src={titleInfo.src}
                                                alt={titleInfo.alt}
                                            >
                                                <CardInfo
                                                    title={titleInfo.title}
                                                    subtitle={titleInfo.subtitle}
                                                />
                                            </ProductCardWrapper>
                                        </div>
                                    )
                                })

                            })
                        })}

                        {main && main.map((item) => {
                            return item.section_2 && item.section_2.map((item) => {
                                return item.info_item && item.info_item.map((info) => {
                                    return info.content && info.content.map((item, index) => {
                                        return (
                                            <div className="item-col">
                                                <ProductCardCenter
                                                    key={index}
                                                    src={item.src}
                                                    alt={item.alt}
                                                >
                                                    <div className="color-box">
                                                        {Array.isArray(item.color) && item.color.map((item, index) => {
                                                            return (
                                                                <ColorBox
                                                                    key={index}
                                                                    color={item}
                                                                />
                                                            )
                                                        })}
                                                    </div>
                                                    <CardInfo
                                                        title={item.subtitle}
                                                        subtitle={item.title}
                                                        text={item.price}
                                                    />
                                                </ProductCardCenter>
                                            </div>
                                        )
                                    })
                                })

                            })
                        })}

                        {main && main.map((item) => {
                            return item.section_2 && item.section_2.map((item) => {
                                return item.info_item && item.info_item.map((info, index) => {
                                    const lastInfo = info.more
                                    return (
                                        <div className="item-col">
                                            <ProductCardWrapper
                                                key={index}
                                                src={lastInfo.src}
                                                alt={lastInfo.alt}
                                            >
                                                <CardInfo
                                                    title={lastInfo.subtitle}
                                                    subtitle={lastInfo.title}
                                                    text={lastInfo.price}
                                                />
                                            </ProductCardWrapper>
                                        </div>
                                    )
                                })

                            })
                        })}
                    </div>
                </ScrollBar>

            </div>

            <div className="section section3">
                {main && main.map((item) => {
                    return item.section_3.map((text, index) => {
                        return (
                            <ContantTitle
                                key={index}
                                title={text.title}
                                subtitle={text.subtitle}
                            />
                        )
                    })
                })}

                <ScrollBar>
                    <div className="section-items">
                        {main && main.map((item) => {
                            return item.section_3 && item.section_3.map((item) => {
                                return item.info_item && item.info_item.map((info, index) => {
                                    const titleInfo = info.title
                                    return (
                                        <div className="item-col">
                                            <ProductCardWrapper
                                                key={index}
                                                src={titleInfo.src}
                                                alt={titleInfo.alt}
                                            >
                                                <CardInfo
                                                    title={titleInfo.subtitle}
                                                    subtitle={titleInfo.title}
                                                    text={titleInfo.price}
                                                />
                                            </ProductCardWrapper>
                                        </div>
                                    )
                                })

                            })
                        })}

                        {main && main.map((item) => {
                            return item.section_3 && item.section_3.map((item) => {
                                return item.info_item && item.info_item.map((info) => {
                                    return info.content && info.content.map((text, index) => {
                                        return (
                                            <div className="item-col">
                                                <ProductCardCenter
                                                    key={index}
                                                    src={text.src}
                                                    alt={text.alt}
                                                >
                                                    <CardInfo
                                                        title={text.subtitle}
                                                        subtitle={text.title}
                                                        text={text.price}
                                                    />
                                                </ProductCardCenter>
                                            </div>
                                        )
                                    })
                                })
                            })
                        })}
                    </div>
                </ScrollBar>

            </div>


        </div>
    )
}

export default Main;