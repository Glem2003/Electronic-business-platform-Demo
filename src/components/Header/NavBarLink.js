import React from 'react';
import { BrowserRouter as Link} from 'react-router-dom';

function NavBarLink({ to , children}){
    return(
        <li>
            <Link to={to}>{children}</Link>
        </li>
    )
}

export default NavBarLink;