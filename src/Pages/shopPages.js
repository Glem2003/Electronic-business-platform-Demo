import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Shop from '../components/Shop/shop';

//import data
import { footerTitle } from '../Content/Footer/index.js';

//import sass
import '../Sass/shopPages.sass';

const ShopPages = () => {

    //take data
    const title = footerTitle.map(item => item.shop);

    return (
        <DefaultLayout logoTitle={title}>
            <Shop/>
        </DefaultLayout>
    )
}

export default ShopPages;