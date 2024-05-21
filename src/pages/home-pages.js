import DafaultLayout from "../components/DafaultLayout/dafault-layout";
import Home from "../components/Home/home";

import '../sass/home-pages.sass';

const HomePages = () => {
    return (
        <DafaultLayout logoTitle="Apple store">
            <Home/>
        </DafaultLayout>
    )
}

export default HomePages;