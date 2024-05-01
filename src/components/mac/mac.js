import ProductInfoItem from "../common/product-info-item";
import MacProductItems from "./mac-product-item";

const Mac = () => {
    return (
        <div className="Mac">
            <MacProductItems />
            <ProductInfoItem
                textInfo="以iPhone 11 或後續機型升級換購 iPhone 15 或 iPhone 15 Pro。獲享 NT$4,500 至 NT$22,900 的折抵優惠。"
            />
        </div>
    )
}

export default Mac;