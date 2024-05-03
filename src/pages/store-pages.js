import DafaultLayout from "../components/dafault-layout/dafault-layout";
import Main from "../components/main/main";


import '../sass/store-pages.sass';
import '../sass/comonent/product-card.sass';
import '../sass/comonent/scroll-bar.sass';


const StorePages = () => {
    return (
        <DafaultLayout logoTitle="Apple Store 線上商店">
            <Main/>
        </DafaultLayout>
    )
}

export default StorePages;