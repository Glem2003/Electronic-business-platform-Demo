import ColorBox from "./color-box";

const ProductCardCenter = ({children}) => {
    return (
        <div className="product-card center">
            <div className="card-image">
                <img src="/images/applemusic.jpg" alt="wrapper-images" />
            </div>

            <ColorBox colorItems={[
                { className: "yellow", style: "yellow" },
                { className: "red", style: "red" },
                { className: "black", style: "black" }
            ]}
            />
            {children}
        </div>
    )
}

export default ProductCardCenter;