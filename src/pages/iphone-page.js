import DafaultLayout from "../components/DafaultLayout/dafault-layout";
import Iphone from "../components/Iphone/iphone";

import '../sass/iphone-pages.sass';

const IphonePages = () => {
    return (
        <DafaultLayout logoTitle="iPhone">
            <Iphone/>
        </DafaultLayout>
    )
}

export default IphonePages;