import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import TvHome from '../components/Tv-home/tvHome';

//import sass
import '../Sass/tvHomePages.sass';

const TvAndFamilyPages = () => {
    return (
        <DefaultLayout logoTitle="TV 和家庭">
            <TvHome/>
        </DefaultLayout>
    )
}

export default TvAndFamilyPages;