import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Shop from '../components/Shop/shop';

//import sass
import '../Sass/shopPages.sass';

const ShopPages = () => {
    return (
        <DefaultLayout logoTitle="所有配件">
            <Shop/>
        </DefaultLayout>
    )
}

export default ShopPages;