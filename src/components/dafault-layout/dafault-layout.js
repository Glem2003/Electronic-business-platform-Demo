import Footer from "./footer/footer";
import Header from "./header/header";

const DafaultLayout = ({children}) =>{
    return(
        <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    )
}

export default DafaultLayout;