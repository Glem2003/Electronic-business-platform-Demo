import { ProductCardCenter, CardInfo, ColorBox } from '../Common/productCard';

const ShopItemCard = ({ src, alt, colors, ps, title, price }) => {
    return (
        <ProductCardCenter
            src={src}
            alt={alt}
        >
            <div className='color-item'>
                {colors && colors.map((color) => {
                    return (
                        <ColorBox
                            color={color}
                        />
                    )
                })}
            </div>
            <CardInfo
                ps={ps}
                title={title}
                subtitle={price}
            />
        </ProductCardCenter>
    )
}

export default ShopItemCard;