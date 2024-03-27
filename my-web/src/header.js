import './header.sass';

function Header() {
    return (
        <div>
            <nav className="navBar">
                <ul className="nav-item">
                    <NavBarImg className="Logo" src="Logo" />
                    <NavBarLink href="#!" title="商店" />
                    <NavBarLink href="#!" title="Mac" />
                    <NavBarLink href="#!" title="ipad" />
                    <NavBarLink href="#!" title="Watch" />
                    <NavBarLink href="#!" title="AirPods" />
                    <NavBarLink href="#!" title="TV 和家庭" />
                    <NavBarLink href="#!" title="娛樂" />
                    <NavBarLink href="#!" title="配件" />
                    <NavBarLink href="#!" title="支援服務" />
                    <NavBarImg className="Search" src="Search" />
                    <NavBarImg className="Shop-Cart" src="Shop-Cart" />
                </ul>
            </nav>

            <h1 className="title">
                商店。 <span style={{ color: 'grey' }}>購買你喜愛的產品，<br></br>
                    這是最好的方式。</span>
            </h1>
            <div className="product-item">
                <div className="col">
                    <div className="item-image"></div>
                    <div className="item-info">1</div>
                </div>
                <div className="col">
                    <div className="item-image"></div>
                    <div className="item-info">2</div>
                </div>
                <div className="col">
                    <div className="item-image"></div>
                    <div className="item-info">3</div>
                </div>
            </div>

        </div>
    )
}

export default Header;
//--------------------------------------------------
function NavBarLink(props) {
    return (
        <li>
            <a href={props.href}>{props.title}</a>
        </li>
    )
}
function NavBarImg(props) {
    return (
        <li>
            <img className={props.className} src={props.src}></img>
        </li>
    )
}