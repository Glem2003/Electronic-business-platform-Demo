import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import IPad from "../components/Ipad/ipad.js";

// import sass
import '../Sass/ipadPages.sass';

const IpadPages = () => {
    return (
        <DefaultLayout logoTitle="ipad">
            <IPad/>
        </DefaultLayout>
    )
}

export default IpadPages;