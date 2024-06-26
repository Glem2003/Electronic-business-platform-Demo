import { CardInfo, ProductCardCenter, ColorBox } from "./productCard";
import { ButtonItem } from './Button/buttonItem';
import CardInformationInProduct from './cardInformationInProduct';

//import sass
import '../../Sass/component/productInformationCard.sass';

const ProductInformationCard = ({ src, alt, color, postscript, title, text, price, btn, productInfoItem, cardTitle, cardText, subtitle }) => {
    return (
        <div className="information-card">
            <ProductCardCenter
                src={src}
                alt={alt}
            >
                {color && <div className="color-item">
                    {color && color.map((item, index) => {
                        return (
                            <ColorBox
                                key={index}
                                color={item}
                            />
                        )
                    })}
                </div>}

                {
                    postscript || title || text || price ? (
                        <CardInfo
                            ps={postscript}
                            title={title}
                            text={text}
                            subtitle={price}
                        >
                            <h3>{subtitle}</h3>
                        </CardInfo>
                    ) : null
                }

                <ButtonItem
                    props={btn}
                />
            </ProductCardCenter>
            <hr />
            {
                cardTitle || cardText ? (
                    <CardInfo
                        title={cardTitle}
                        text={cardText}
                    />
                ) : null
            }
            <div className="info-item">
                {productInfoItem && productInfoItem.map((item, index) => {
                    return (
                        <CardInformationInProduct
                            key={index}
                            src={item.src}
                            src_2={item.src_2}
                            alt={item.alt}
                            text={item.text}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default ProductInformationCard;