import { Link } from "react-router-dom"
import './Header.css'
import logo4 from './img5.jpg'
function Header()
{
    return(
        <div className="header1">
            <div className="header2">
            <img src={logo4}></img>
            </div>
           <div className="header3">
            <h1>THE-FASHION-HUB</h1>
            <Link to="/">Home </Link>
           <Link to="About">About Us</Link>
           <Link to="Product">All Products</Link>
           <Link to="Electronics">Electronics</Link>
           <Link to="WomensClothing">WomensClothing</Link>
           <Link to="Login"><button>Login</button></Link>
           </div>
        </div>
    )
}
export default Header