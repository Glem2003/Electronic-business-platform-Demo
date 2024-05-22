import DafaultLayout from "../components/DafaultLayout/dafaultLayout";
import Home from "../components/Home/home";

//import sass
import '../Sass/homePages.sass';

const HomePages = () => {
    return (
        <DafaultLayout logoTitle="Apple store">
            <Home/>
        </DafaultLayout>
    )
}

export default HomePages;