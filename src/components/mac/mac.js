import ProductInfoItem from "../common/product-info-item";
import MacProductItems from "./mac-product-item";
import MacFirstSection from "./mac-section1";
import MacSecondSection from "./mac-section2";

const Mac = () => {
    return (
        <div className="Mac">
            <MacProductItems />
            <ProductInfoItem
                textInfo="以iPhone 11 或後續機型升級換購 iPhone 15 或 iPhone 15 Pro。獲享 NT$4,500 至 NT$22,900 的折抵優惠。"
            />
            <MacFirstSection/>
            <MacSecondSection/>
        </div>
    )
}

export default Mac;