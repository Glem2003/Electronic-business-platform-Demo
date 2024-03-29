import './header.sass';

function Header() {
    return (
        <div>
            <nav className="navBar">
                <ul className="nav-item">
                    <NavBarImg className="Logo" src="/images/AppleLogo.png" alt="Apple.logo"/>
                    <NavBarLink href="#!" title="商店" />
                    <NavBarLink href="#!" title="Mac" />
                    <NavBarLink href="#!" title="ipad" />
                    <NavBarLink href="#!" title="Watch" />
                    <NavBarLink href="#!" title="AirPods" />
                    <NavBarLink href="#!" title="TV 和家庭" />
                    <NavBarLink href="#!" title="娛樂" />
                    <NavBarLink href="#!" title="配件" />
                    <NavBarLink href="#!" title="支援服務" />
                    <NavBarImg className="Search" src="/images/search-icon.png" alt="Search"/>
                    <NavBarImg className="Shop-Cart" src="/images/shopp-cart.png" alt="Shop-Cart"/>
                </ul>
            </nav>

            <h1 className="title">
                商店。 <span style={{ color: 'grey' }}>購買你喜愛的產品，<br></br>
                    這是最好的方式。</span>
            </h1>
            <div className="product-item">
                <ProItem 
                src="/images/mac.png"
                alt="Mac"
                text = "Mac"
                />
                <ProItem 
                src="/images/iPhone.png"
                alt="iPhone"
                text = "iPhone"
                />
                <ProItem 
                src="/images/iPad.png"
                alt="iPad"
                text = "iPad"
                />
                <ProItem 
                src="/images/Applewatch.png"
                alt="Apple Watch"
                text = "Apple Watch"
                />
                <ProItem 
                src="/images/airpods.png"
                alt="Airpods"
                text = "Airpods"
                />
                <ProItem 
                src="/images/airTags.png"
                alt="AirTag"
                text = "AirTag"
                />
                <ProItem 
                src="/images/appletv.png"
                alt="Apple TV 4K"
                text = "Apple TV 4K"
                />
                <ProItem 
                src="/images/homePod.png"
                alt="HomePod"
                text = "HomePod"
                />
                <ProItem 
                src="/images/accessories.png"
                alt="配件"
                text = "配件"
                />
                <ProItem 
                src="/images/giftcards.png"
                alt="Apple Store 禮品卡"
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
            <div className={props.className}>
                <img src={props.src} alt={props.alt}></img>
            </div>
        </li>
    )
}

function ProItem(props) {
    return (
        <div className="col-10">
            <div className="item-image">
                <img src= {props.src} alt={props.alt}/>
            </div>
            <div className="item-info">{props.text}</div>
        </div>
    )
}