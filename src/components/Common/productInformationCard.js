import { CardInfo, ProductCardCenter } from "./productCard";
import ColorBox from './colorBox';
import ButtonItem from './buttonItem';
import CardInformationInProduct from './cardInformationInProduct';

//import sass
import '../../Sass/component/productInformationCard.sass';

const ProductInformationCard = ({ src, alt, color, postscript, title, text, price, btn, productInfoItem }) => {
    return (
        <div className="information-card">
            <ProductCardCenter
                src={src}
                alt={alt}
            >
                <div className="color-item">
                    {color.map((item, index) => {
                        return (
                            <ColorBox
                                key={index}
                                color={item}
                            />
                        )
                    })}
                </div>
                <CardInfo
                    ps={postscript}
                    title={title}
                    text={text}
                    subtitle={price}
                />
                <ButtonItem
                    props={btn}
                />
            </ProductCardCenter>
            <hr />
            <div className="info-item">
                {productInfoItem && productInfoItem.map((item, index) => {
                    return (
                        <CardInformationInProduct
                            key={index}
                            src={item.src}
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