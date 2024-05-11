import NavBarLink from './nav-bar-link';

import { FaApple,FaShoppingCart } from 'react-icons/fa';
import { CiSearch } from 'react-icons/ci';

function NavBar() {
    const svgStyle = {width:"1.5em",height:"1.5em"}

    return (
        <nav>
            <div className='content'>
                <ul className='content-list'>

                    <NavBarLink to="/">
                        <FaApple style={svgStyle}/>
                    </NavBarLink>


                    <NavBarLink>
                        Store
                    </NavBarLink>

                    <NavBarLink>
                        Mac
                    </NavBarLink>

                    <NavBarLink>
                        iPhone
                    </NavBarLink>


                    <NavBarLink>
                        <CiSearch style={svgStyle}/>
                    </NavBarLink>
                    <NavBarLink>
                        <FaShoppingCart style={svgStyle}/>
                    </NavBarLink>

                </ul>
            </div>
        </nav>
    )
}


export default NavBar;