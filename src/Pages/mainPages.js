import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Main from "../components/Main/main";

//import data
import { footerTitle } from '../Content/Footer/index.js';

// import sass
import '../Sass/mainPages.sass';
import '../Sass/component/productCard.sass';


const MainPages = () => {

    //take data
    const title = footerTitle.map(item => item.main);

    return (
        <DefaultLayout logoTitle={title}>
            <Main/>
        </DefaultLayout>
    )
}

export default MainPages;