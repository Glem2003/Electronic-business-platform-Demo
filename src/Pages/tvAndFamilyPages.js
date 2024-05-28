import DafaultLayout from "../components/DafaultLayout/dafaultLayout";
import TvHome from '../components/Tv-home/tvHome';

//import sass
import '../Sass/tvHomePages.sass';

const TvAndFamilyPages = () => {
    return (
        <DafaultLayout logoTitle="TV 和家庭">
            <TvHome/>
        </DafaultLayout>
    )
}

export default TvAndFamilyPages;