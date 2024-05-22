import DafaultLayout from "../components/DafaultLayout/dafaultLayout";
import Iphone from "../components/Iphone/iphone";

// import sass
import '../Sass/iphonePages.sass';

const IphonePages = () => {
    return (
        <DafaultLayout logoTitle="iPhone">
            <Iphone/>
        </DafaultLayout>
    )
}

export default IphonePages;