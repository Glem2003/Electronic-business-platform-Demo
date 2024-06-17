import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Home from "../components/Home/home";

//import sass
import '../Sass/homePages.sass';

const HomePages = () => {
    return (
        <DefaultLayout logoTitle="Apple store">
            <Home/>
        </DefaultLayout>
    )
}

export default HomePages;