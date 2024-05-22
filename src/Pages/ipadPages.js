import DafaultLayout from "../components/DafaultLayout/dafaultLayout.js";
import IPad from "../components/Ipad/ipad.js";

// import sass
import '../Sass/ipadPages.sass';

const IpadPages = () => {
    return (
        <DafaultLayout logoTitle="ipad">
            <IPad/>
        </DafaultLayout>
    )
}

export default IpadPages;