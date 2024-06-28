import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Home from "../components/Home/home";

//import data
import { footerTitle } from '../Content/Footer/index.js';

//import sass
import '../Sass/homePages.sass';

const HomePages = () => {

    //take data
    const title = footerTitle.map(item => item.home);

    return (
        <DefaultLayout logoTitle={title}>
            <Home />
        </DefaultLayout>
    )
}

export default HomePages;