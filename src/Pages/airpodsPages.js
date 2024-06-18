import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Airpods from "../components/Airpods/airpods";

//import data
import { footerTitle } from '../Content/Footer/index.js';

//import sass
import '../Sass/airpodsPages.sass';

const AirpodsPages = () => {

    //take data
    const title = footerTitle.map(item => item.airpods);

    return (
        <DefaultLayout logoTitle={title}>
            <Airpods />
        </DefaultLayout>
    )
}

export default AirpodsPages;