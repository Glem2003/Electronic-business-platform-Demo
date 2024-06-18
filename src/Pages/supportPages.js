import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Support from "../components/Support/support";

//import data
import { footerTitle } from '../Content/Footer/index.js';

//import sass
import '../Sass/supportPages.sass';

const SupportPages = () => {

    //take data
    const title = footerTitle.map(item => item.support);

    return (
        <DefaultLayout logoTitle={title}>
            <Support/>
        </DefaultLayout>
    )
}

export default SupportPages;