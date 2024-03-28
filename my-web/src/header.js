import './header.sass';

function Header() {
    return (
        <div>
            <nav className="navBar">
                <ul className="nav-item">
                    <NavBarImg className="Logo" />
                    <NavBarLink href="#!" title="商店" />
                    <NavBarLink href="#!" title="Mac" />
                    <NavBarLink href="#!" title="ipad" />
                    <NavBarLink href="#!" title="Watch" />
                    <NavBarLink href="#!" title="AirPods" />
                    <NavBarLink href="#!" title="TV 和家庭" />
                    <NavBarLink href="#!" title="娛樂" />
                    <NavBarLink href="#!" title="配件" />
                    <NavBarLink href="#!" title="支援服務" />
                    <NavBarImg className="Search" />
                    <NavBarImg className="Shop-Cart" />
                </ul>
            </nav>

            <h1 className="title">
                商店。 <span style={{ color: 'grey' }}>購買你喜愛的產品，<br></br>
                    這是最好的方式。</span>
            </h1>
            <div className="product-item">
                <ProItem 
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666"
                text = "Mac"
                />
                <ProItem 
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666"
                text = "Mac"
                />
                <ProItem 
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666"
                text = "Mac"
                />
                <ProItem 
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666"
                text = "Mac"
                />
                <ProItem 
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-mac-nav-202310?wid=400&hei=260&fmt=png-alpha&.v=1696964122666"
                text = "Mac"
                />

            </div>

        </div>
    )
}

export default Header;
//--------------------------------------------------
function NavBarLink(props) {
    return (
        <li>
            <a href={props.href}>{props.title}</a>
        </li>
    )
}
function NavBarImg(props) {
    return (
        <li>
            <div className={props.className}></div>
        </li>
    )
}

function ProItem(props) {
    return (
        <div className="col">
            <div className="item-image">
                <img src= {props.src} />
            </div>
            <div className="item-info">{props.text}</div>
        </div>
    )
}