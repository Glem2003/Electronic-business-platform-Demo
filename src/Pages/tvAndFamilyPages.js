import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import TvHome from '../components/Tv-home/tvHome';

//import data
import { footerTitle } from '../Content/Footer/index.js';

//import sass
import '../Sass/tvHomePages.sass';

const TvAndFamilyPages = () => {

    //take data
    const title = footerTitle.map(item => item.tvHome);

    return (
        <DefaultLayout logoTitle={title}>
            <TvHome/>
        </DefaultLayout>
    )
}

export default TvAndFamilyPages;