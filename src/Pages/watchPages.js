import DefaultLayout from "../components/DefaultLayout/defaultLayout";
import Watch from '../components/Watch/watch';

// import sass
import '../Sass/watchPages.sass';

const WatchPages = () => {
    return (
        <DefaultLayout logoTitle="Watch">
            <Watch/>
        </DefaultLayout>
    )
}

export default WatchPages;