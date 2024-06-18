import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Watch from '../components/Watch/watch';

//import data
import { footerTitle } from '../Content/Footer/index.js';

// import sass
import '../Sass/watchPages.sass';

const WatchPages = () => {

    //take data
    const title = footerTitle.map(item => item.watch);

    return (
        <DefaultLayout logoTitle={title}>
            <Watch/>
        </DefaultLayout>
    )
}

export default WatchPages;