import Footer from "./Footer/footer";
import Header from "./Header/header";

// import sass
import '../../Sass/defaultLayout.sass';

const DafaultLayout = ({ children, logoTitle }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer logoTitle={logoTitle} />
        </div>
    )
}

export default DafaultLayout;