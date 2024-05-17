const NavBarLargeList = ({ title, items ,children}) => {
    return (
        <ul>
            <h6>{title}</h6>
            {items.map((item, index) => (
                <h1 key={index}>{item.subtitle}</h1>
            ))}
            {children}
        </ul>
    );
};

const NavBarSmallList = ({ title, items }) => {
    return (
        <ul>
            <h6>{title}</h6>
            {items.map((item, index) => (
                <h4 key={index}>{item.subtitle}</h4>
            ))}
        </ul>
    )
}

export { NavBarLargeList, NavBarSmallList };