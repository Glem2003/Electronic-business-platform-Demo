import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Iphone from "../components/Iphone/iphone";

// import sass
import '../Sass/iphonePages.sass';

const IphonePages = () => {
    return (
        <DefaultLayout logoTitle="iPhone">
            <Iphone/>
        </DefaultLayout>
    )
}

export default IphonePages;