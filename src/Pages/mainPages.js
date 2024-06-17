import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Main from "../components/Main/main";

// import sass
import '../Sass/mainPages.sass';
import '../Sass/component/productCard.sass';


const MainPages = () => {
    return (
        <DefaultLayout logoTitle="Apple Store 線上商店">
            <Main/>
        </DefaultLayout>
    )
}

export default MainPages;