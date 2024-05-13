import DafaultLayout from "../components/dafault-layout/dafault-layout";
import IPad from "../components/iPad/iPad.js";

import '../sass/ipad-pages.sass';

const IpadPages = () => {
    return (
        <DafaultLayout logoTitle="ipad">
            <IPad/>
        </DafaultLayout>
    )
}

export default IpadPages;