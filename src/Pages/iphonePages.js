import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Iphone from "../components/Iphone/iphone";

//import data
import { footerTitle } from '../Content/Footer/index.js';

// import sass
import '../Sass/iphonePages.sass';

const IphonePages = () => {

    //take data
    const title = footerTitle.map(item => item.iphone);

    return (
        <DefaultLayout logoTitle={title}>
            <Iphone/>
        </DefaultLayout>
    )
}

export default IphonePages;