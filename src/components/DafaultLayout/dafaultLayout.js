import Footer from "./Footer/footer";
import Header from "./Header/header";

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