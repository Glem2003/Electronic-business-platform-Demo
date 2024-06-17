import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Support from "../components/Support/support";

//import sass
import '../Sass/supportPages.sass';

const SupportPages = () => {
    return (
        <DefaultLayout logoTitle="支援服務">
            <Support/>
        </DefaultLayout>
    )
}

export default SupportPages;