import DafaultLayout from "../components/DafaultLayout/dafaultLayout";
import Main from "../components/Main/main";

// import sass
import '../Sass/mainPages.sass';
import '../Sass/component/productCard.sass';


const MainPages = () => {
    return (
        <DafaultLayout logoTitle="Apple Store 線上商店">
            <Main/>
        </DafaultLayout>
    )
}

export default MainPages;