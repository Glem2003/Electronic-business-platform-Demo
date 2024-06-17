import React from 'react';
import { Link } from 'react-router-dom';

function NavBarLink({ to, children, onMouseOver, onClick }) {
    return (
        <li
            onMouseOver={onMouseOver}
            onClick={onClick}
        >
            <Link to={to}>{children}</Link>
        </li>
    )
}

export default NavBarLink;