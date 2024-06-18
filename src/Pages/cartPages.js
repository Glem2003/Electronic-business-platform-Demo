import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Cart from "../components/Cart/cart";

//import data
import { footerTitle } from '../Content/Footer/index.js';

//import sass
import '../Sass/cartPages.sass';

const CartPages = () => {

    //take data
    const title = footerTitle.map(item => item.cart);

    return (
        <DefaultLayout logoTitle={title}>
            <Cart/>
        </DefaultLayout>
    )
}

export default CartPages;