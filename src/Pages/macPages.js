import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Mac from '../components/Mac/mac.js';

// import sass
import '../Sass/macPages.sass';

const MacPages = () => {
    return (
        <DefaultLayout logoTitle="Mac">
            <Mac/>
        </DefaultLayout>
    )
}

export default MacPages;