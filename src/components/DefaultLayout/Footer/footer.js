import FooterInfo from "./footerInfo.js";
import FooterMore from "./footerMore.js";
import Copyright from "./copyright.js";

import { footer } from '../../../Content/index.js';


function Footer({ logoTitle }) {
    const { copyrightText, listText, area } = footer.copyrightInfo[0];
    return (
        <footer>
            <hr />
            <FooterInfo logoTitle={logoTitle} />
            <FooterMore props={footer.footerLink[0].text} />
            <hr />
            <Copyright copyright={copyrightText} list={listText} area={area} />
        </footer>
    )
}

export default Footer;