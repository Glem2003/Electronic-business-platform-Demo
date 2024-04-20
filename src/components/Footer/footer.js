import Separator from "../Common/Separator";
import FooterInfo from "./FooterInfo";
import FooterMore from "./FooterMore";
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