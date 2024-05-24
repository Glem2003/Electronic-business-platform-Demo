import DafaultLayout from "../components/DafaultLayout/dafaultLayout";
import Watch from '../components/Watch/watch';

// import sass
import '../Sass/watchPages.sass';

const WatchPages = () => {
    return (
        <DafaultLayout logoTitle="Watch">
            <Watch/>
        </DafaultLayout>
    )
}

export default WatchPages;