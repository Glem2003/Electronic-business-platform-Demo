import NavBar from './NavBar';
import ProductPage from './ProductPage';

function Header() {
    return (
        <div className="header">
            <NavBar/>
            <h1 className="title">
                商店。 <span style={{ color: 'grey' }}>購買你喜愛的產品，<br></br>
                    這是最好的方式。</span>
            </h1>
            <ProductPage/>
        </div>
    )
}


export default Header;