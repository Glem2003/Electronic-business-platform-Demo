import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import IPad from "../components/Ipad/ipad.js";

//import data
import { footerTitle } from '../Content/Footer/index.js';

// import sass
import '../Sass/ipadPages.sass';

const IpadPages = () => {

    //take data
    const title = footerTitle.map(item => item.ipad);

    return (
        <DefaultLayout logoTitle={title}>
            <IPad/>
        </DefaultLayout>
    )
}

export default IpadPages;