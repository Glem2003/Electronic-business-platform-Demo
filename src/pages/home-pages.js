import DafaultLayout from "../components/dafault-layout/dafault-layout";
import Home from "../components/home/home";

import '../sass/home-pages.sass';

const HomePages = () => {
    return (
        <DafaultLayout logoTitle="Apple store">
            <Home/>
        </DafaultLayout>
    )
}

export default HomePages;