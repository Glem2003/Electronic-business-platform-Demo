import { CardInfo, ProductCardCenter } from "./productCard";
import ColorBox from '../../components/Common/colorBox';
import ButtonItem from '../../components/Common/buttonItem';

const ProductInfo = ({ src, alt, color, postscript, title, text, price, btn }) => {
    return (
        <div>
            <ProductCardCenter
                src={src}
                alt={alt}
            >
                <ColorBox
                    color={color}
                />
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
            <hr/>
        </div>
    )
}

export default ProductInfo;