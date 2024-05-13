import DafaultLayout from "../components/dafault-layout/dafault-layout";
import Mac from '../components/mac/mac.js';

import '../sass/mac-pages.sass';

const MacPages = () => {
    return (
        <DafaultLayout logoTitle="Mac">
            <Mac/>
        </DafaultLayout>
    )
}

export default MacPages;