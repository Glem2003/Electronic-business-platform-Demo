import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Airpods from "../components/Airpods/airpods";

//import sass
import '../Sass/airpodsPages.sass';

const AirpodsPages = () => {
    return (
        <DefaultLayout logoTitle="Airpods">
            <Airpods/>
        </DefaultLayout>
    )
}

export default AirpodsPages;