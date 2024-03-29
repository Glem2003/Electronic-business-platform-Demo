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
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-iphone-nav-202309?wid=400&hei=260&fmt=png-alpha&.v=1692971740452"
                text = "iPhone"
                />
                <ProItem 
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-ipad-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664912135437"
                text = "iPad"
                />
                <ProItem 
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-watch-nav-202309_GEO_TW?wid=400&hei=260&fmt=png-alpha&.v=1693703822492"
                text = "Apple Watch"
                />
                <ProItem 
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airpods-nav-202209?wid=400&hei=260&fmt=png-alpha&.v=1660676485885"
                text = "Airpods"
                />
                <ProItem 
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-airtags-nav-202108?wid=400&hei=260&fmt=png-alpha&.v=1625783380000"
                text = "AirTag"
                />
                <ProItem 
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-appletv-nav-202210?wid=400&hei=260&fmt=png-alpha&.v=1664628458484"
                text = "Apple TV 4K"
                />
                <ProItem 
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-homepod-nav-202301?wid=400&hei=260&fmt=png-alpha&.v=1670389216654"
                text = "HomePod"
                />
                <ProItem 
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-accessories-nav-202403?wid=400&hei=260&fmt=png-alpha&.v=1707850611597"
                text = "配件"
                />
                <ProItem 
                src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/store-card-13-holiday-giftcards-asc-nav-202111?wid=400&hei=260&fmt=png-alpha&.v=1635264814000"
                text = "Apple Store 禮品卡"
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
        <div className="col-10">
            <div className="item-image">
                <img src= {props.src} />
            </div>
            <div className="item-info">{props.text}</div>
        </div>
    )
}