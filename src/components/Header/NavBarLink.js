import React from 'react';
import {Link} from 'react-router-dom';

function NavBarLink({ to , children}){
    return(
        <li>
            <Link to={to}>{children}</Link>
        </li>
    )
}

export default NavBarLink;