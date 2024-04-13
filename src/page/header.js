import NavBarImg from '../components/Header/NavBarImg';
import NavBarLink from '../components/Header/NavBarLink';
import ProductPage from '../components/Header/ProductPage';

function Header() {
    return (
        <div className="header">
            <nav className="navBar">
                <ul className="nav-item">
                    <NavBarImg className="Logo" src="/images/AppleLogo.png" alt="Apple.logo"/>
                    <NavBarLink to="/store" title="商店" />
                    <NavBarLink to="/Mac" title="Mac" />
                    <NavBarLink to="/ipad" title="ipad" />
                    <NavBarLink to="/Watch" title="Watch" />
                    <NavBarLink to="/AirPods" title="AirPods" />
                    <NavBarLink to="/Tv and Family" title="TV 和家庭" />
                    <NavBarLink to="/Funny" title="娛樂" />
                    <NavBarLink to="/component" title="配件" />
                    <NavBarLink to="/other serve" title="支援服務" />
                    <NavBarImg className="Search" src="/images/search-icon.png" alt="Search"/>
                    <NavBarImg className="Shop-Cart" src="/images/shopp-cart.png" alt="Shop-Cart"/>
                </ul>
            </nav>

            <h1 className="title">
                商店。 <span style={{ color: 'grey' }}>購買你喜愛的產品，<br></br>
                    這是最好的方式。</span>
            </h1>
            <ProductPage/>

        </div>
    )
}

export default Header;
