import DafaultLayout from "../components/DafaultLayout/dafaultLayout";
import Main from "../components/Main/main";


import '../Sass/storePages.sass';
import '../Sass/component/productCard.sass';
import '../Sass/component/scrollBar.sass';


const StorePages = () => {
    return (
        <DafaultLayout logoTitle="Apple Store 線上商店">
            <Main/>
        </DafaultLayout>
    )
}

export default StorePages;