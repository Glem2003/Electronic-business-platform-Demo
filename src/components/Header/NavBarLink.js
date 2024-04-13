import React from 'react';
import { BrowserRouter as Link} from 'react-router-dom';

function NavBarLink({ to , title}){
    return(
        <li>
            <Link to={to}>{title}</Link>
        </li>
    )
}

export default NavBarLink;