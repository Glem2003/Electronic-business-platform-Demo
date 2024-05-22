import React from 'react';
import { Link } from 'react-router-dom';

function NavBarLink({ to, children, onMouseLeave, onMouseOver }) {
    return (
        <li
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
        >
            <Link to={to}>{children}</Link>
        </li>
    )
}

export default NavBarLink;