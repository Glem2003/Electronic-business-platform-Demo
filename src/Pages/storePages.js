import DafaultLayout from "../components/DafaultLayout/dafaultLayout";
import Main from "../components/Main/main";

// import sass
import '../Sass/storePages.sass';
import '../Sass/component/productCard.sass';


const StorePages = () => {
    return (
        <DafaultLayout logoTitle="Apple Store 線上商店">
            <Main/>
        </DafaultLayout>
    )
}

export default StorePages;