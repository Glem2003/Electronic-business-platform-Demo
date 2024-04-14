import Separator from "../components/Common/Separator";
import FooterInfo from "../components/Footer/FooterInfo";
import FooterMore from "../components/Footer/FooterMore";
import Copyright from "../components/Footer/Copyright";


function Footer() {
    return (
        <div className="footer">
            <Separator />
            <FooterInfo />
            <FooterMore />
            <Separator />
            <Copyright />

        </div>
    )
}

export default Footer;