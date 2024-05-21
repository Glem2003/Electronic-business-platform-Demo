import DafaultLayout from "../components/DafaultLayout/dafault-layout";
import Mac from '../components/Mac/mac.js';

import '../sass/mac-pages.sass';

const MacPages = () => {
    return (
        <DafaultLayout logoTitle="Mac">
            <Mac/>
        </DafaultLayout>
    )
}

export default MacPages;