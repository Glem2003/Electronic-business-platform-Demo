import NavBarLink from './nav-bar-link';

import { FaApple,FaShoppingCart } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

function NavBar() {
    const svgStyle = {width:"1.5em",height:"1.5em"}

    return (
        <nav className="navBar">
            <ul className="nav-item">
                <NavBarLink
                    to="/"
                    children={
                        <FaApple style={svgStyle}/>
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
                    to="/iPhone"
                    children="iPhone"
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
                
                <CiSearch  style={svgStyle}/>

                <NavBarLink
                    to="/cart"
                    children={
                        <FaShoppingCart  style={svgStyle}/>
                    }
                />

            </ul>
        </nav>
    )
}


export default NavBar;