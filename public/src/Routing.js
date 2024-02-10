import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./Home"
import Product from "./Product"
import About from "./About"
import Header from "./Header"
import "./Routing.css"
import Footer from "./Footer"
import Login from "./Login"
import Electronic from "./Electronics"
import WomensClothing from "./WomensClothing"
function Routing()
{
    return(
        <div className="routing1">
     <BrowserRouter>
     <Header></Header>
        <Routes>
            <Route path="/" element={<Home></Home>}>Home</Route>
            <Route path="Product" element={<Product></Product>}>Products</Route>
            <Route path="About" element={<About></About>}>About Us</Route>
            <Route path="Login" element={<Login></Login>}>About Us</Route>
            <Route path="Electronics" element={<Electronic></Electronic>}>Electronics</Route>
            <Route path="WomensClothing" element={<WomensClothing></WomensClothing>}>Jeweleries</Route>
        </Routes>
        <Footer></Footer>
     </BrowserRouter>
        </div>
    )
}
export default Routing