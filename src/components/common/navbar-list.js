const NavBarLargeList = ({ title, list }) => {
    return (
        <ul>
            <h6>{title}</h6>
            <h1>{list}</h1>
        </ul>
    )
}

const NavBarSmallList = ({ title, list }) => {
    return (
        <ul>
            <h6>{title}</h6>
            <h4>{list}</h4>
        </ul>
    )
}

export { NavBarLargeList, NavBarSmallList };