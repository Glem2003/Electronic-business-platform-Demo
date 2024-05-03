import DafaultLayout from "../components/dafault-layout/dafault-layout";
import Iphone from "../components/iphone/iphone";

import '../sass/iphone-pages.sass';

const IphonePages = () => {
    return (
        <DafaultLayout logoTitle="iPhone">
            <Iphone/>
        </DafaultLayout>
    )
}

export default IphonePages;