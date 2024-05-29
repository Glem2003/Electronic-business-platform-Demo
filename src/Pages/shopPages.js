import DafaultLayout from "../components/DafaultLayout/dafaultLayout";
import Shop from '../components/Shop/shop';

//import sass
import '../Sass/shopPages.sass';

const ShopPages = () => {
    return (
        <DafaultLayout logoTitle="所有配件">
            <Shop/>
        </DafaultLayout>
    )
}

export default ShopPages;