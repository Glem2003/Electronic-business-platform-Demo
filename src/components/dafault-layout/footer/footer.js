import Separator from "../Common/Separator";
import FooterInfo from "./footer-info";
import FooterMore from "./footer-more";
import Copyright from "./Copyright";


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