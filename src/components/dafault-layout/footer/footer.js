import FooterInfo from "./footer-info";
import FooterMore from "./footer-more";
import Copyright from "./copyright";
import Separator from "../../common/separator";


function Footer() {
    return (
        <div className="footer">
            <Separator/>
            <FooterInfo />
            <FooterMore />
            <Separator />
            <Copyright />

        </div>
    )
}

export default Footer;