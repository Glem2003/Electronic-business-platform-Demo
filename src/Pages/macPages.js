import DafaultLayout from "../components/DafaultLayout/dafaultLayout.js";
import Mac from '../components/Mac/mac.js';

import '../Sass/macPages.sass';

const MacPages = () => {
    return (
        <DafaultLayout logoTitle="Mac">
            <Mac/>
        </DafaultLayout>
    )
}

export default MacPages;