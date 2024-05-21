import FooterInfo from "./footerInfo";
import FooterMore from "./footerMore";
import Copyright from "./copyright";

import { footerLink, copyrightInfo } from '../../../content/content.js';


function Footer({ logoTitle }) {
    const { copyrightText, listText, area } = copyrightInfo[0];
    return (
        <footer>
            <hr />
            <FooterInfo logoTitle={logoTitle} />
            <FooterMore props={footerLink[0].text} />
            <hr />
            <Copyright copyright={copyrightText} list={listText} area={area} />
        </footer>
    )
}

export default Footer;