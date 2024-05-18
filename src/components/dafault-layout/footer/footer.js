import FooterInfo from "./footer-info";
import FooterMore from "./footer-more";
import Copyright from "./copyright";

import { footerLink } from '../../../content/content.js';


function Footer({ logoTitle }) {
    return (
        <footer>
            <hr />
            <FooterInfo logoTitle={logoTitle} />
            <FooterMore props={footerLink[0].text} />
            <hr />
            <Copyright />
        </footer>
    )
}

export default Footer;