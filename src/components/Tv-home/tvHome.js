//import content
import { tvHomeProductData } from "../../Api";
import { tvFamily } from '../../Content/index.js';

//import hook
import useFetchData from "../../Hooks/useFetchData.js";

//import component
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
                {tvFamily && tvFamily.map((item) => {
                    return item.header && item.header.map((text, index) => {
                        return (
                            <SectionTitle
                                key={index}
                                title={text.title}
                                subtitle={text.text}
                            />
                        )
                    })
                })}
            </div>

            <div className="section section2">
                {tvFamily && tvFamily.map((item) => {
                    return item.banner_item && item.banner_item.map((info, index) => {
                        return (
                            <ProductCardCenter
                                key={index}
                                src={info.src}
                            >
                                <CardInfo
                                    title={info.title}
                                    subtitle={info.text}
                                    text={info.price}
                                    src={info.headerImg}
                                >
                                    <ButtonItem
                                        props={info.link}
                                    />
                                </CardInfo>
                            </ProductCardCenter>
                        )
                    })
                })}
            </div>

            <div className="section section3">
                {tvFamily && tvFamily.map((item) => {
                    return item.section_2 && item.section_2.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                            subtitle={info.subtitle}
                        />
                    ));
                })}

                <ScrollBar>
                    <div className="section-items">
                        {tvFamily && tvFamily.map((item) => {
                            return item.section_2 && item.section_2.map((items) => {
                                return items.info_item && items.info_item.map((info, index) => {
                                    return (
                                        <ProductCardCenter
                                            key={index}
                                            src={info.src}
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

                                                </CardInfo>
                                            </div>
                                        </ProductCardCenter>
                                    )
                                })
                            })
                        })}
                    </div>
                </ScrollBar>

            </div>

            <div className="section section4">
                {tvFamily && tvFamily.map((item) => {
                    return item.section_3 && item.section_3.map((info, index) => (
                        <SectionTitle
                            key={index}
                            title={info.title}
                            subtitle={info.subtitle}
                        />
                    ));
                })}
                <div className="product-info-item">
                    {tvFamily && tvFamily.map((item) => {
                        return item.section_3 && item.section_3.map((item) => {
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
                                        <p>{info.img_text}</p>
                                    </ProductCardCenter>
                                )
                            })
                        })

                    })}
                </div>

            </div>

        </div>

    )
}

export default TvHome;