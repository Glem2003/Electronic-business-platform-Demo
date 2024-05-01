import Footer from "./footer/footer";
import Header from "./header/header";

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