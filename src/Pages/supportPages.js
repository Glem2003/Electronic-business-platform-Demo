import DafaultLayout from "../components/DafaultLayout/dafaultLayout";
import Support from "../components/Support/support";

//import sass
import '../Sass/supportPages.sass';

const SupportPages = () => {
    return (
        <DafaultLayout logoTitle="支援服務">
            <Support/>
        </DafaultLayout>
    )
}

export default SupportPages;