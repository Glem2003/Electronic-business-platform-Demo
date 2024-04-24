import NavBarImg from './nav-bar-img';
import NavBarLink from './nav-bar-link';

function NavBar() {
    return (
        <nav className="navBar">
            <ul className="nav-item">
                <NavBarLink
                    to="/"
                    children={
                        <NavBarImg
                            className="Logo"
                            src="/images/AppleLogo.png"
							alt="Apple.logo"
                        />
                    }
                />
                <NavBarLink
                    to="/store"
                    children="商店"
                />
                <NavBarLink
                    to="/mac"
                    children="Mac"
                />
                <NavBarLink
                    to="/ipad"
                    children="ipad"
                />
                <NavBarLink
                    to="/watch"
                    children="Watch"
                />
                <NavBarLink
                    to="/airPods"
                    children="AirPods"
                />
                <NavBarLink
                    to="/tv-and-family"
                    children="TV 和家庭"
                />
                <NavBarLink
                    to="/funny"
                    children="娛樂"
                />
                <NavBarLink
                    to="/component"
                    children="配件"
                />
                <NavBarLink
                    to="/other-serve"
                    children="支援服務"
                />
                <NavBarImg className="Search" src="/images/search-icon.png" alt="Search" />
                <NavBarImg className="Shop-Cart" src="/images/shopp-cart.png" alt="Shop-Cart" />
            </ul>
        </nav>
    )
}


export default NavBar;