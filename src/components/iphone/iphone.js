import ProductInfoItem from "../common/product-info-item";
import IphoneProductItems from "./iphone-product-item";
import IphoneFirstSection from "./iphone-section1";
import IphoneSecondSection from "./iphone-section2";

const Iphone = () => {
    return (
        <div className="Iphone">
            <IphoneProductItems />
            <ProductInfoItem
                textInfo="以iPhone 11 或後續機型升級換購 iPhone 15 或 iPhone 15 Pro。獲享 NT$4,500 至 NT$22,900 的折抵優惠。"
            />
            <IphoneFirstSection/>
            <IphoneSecondSection/>
        </div>
    )
}

export default Iphone;