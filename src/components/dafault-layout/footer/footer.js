import FooterInfo from "./footer-info";
import FooterMore from "./footer-more";
import Copyright from "./copyright";
import Separator from "../../common/separator";


function Footer({ logoTitle }) {
    return (
        <footer>
            <Separator />
            <FooterInfo logoTitle={logoTitle} />
            <FooterMore />
            <Separator />
            <Copyright />
        </footer>
    )
}

export default Footer;