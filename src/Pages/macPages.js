import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Mac from '../components/Mac/mac.js';

//import data
import { footerTitle } from '../Content/Footer/index.js';

// import sass
import '../Sass/macPages.sass';

const MacPages = () => {

    //take data
    const title = footerTitle.map(item => item.mac);

    return (
        <DefaultLayout logoTitle={title}>
            <Mac/>
        </DefaultLayout>
    )
}

export default MacPages;