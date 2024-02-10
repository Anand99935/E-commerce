import { Link } from "react-router-dom"
import logo5 from './img5.jpg'
import maillogo from './maillogo.jpg'
import calllogo from './calllogo.jpg'
import whatsaplogo from './whatssaplogo.jpg'
import fblogo from './fblogo.jpg'
import instalogo from './instalogo.jpg'

import './Footer.css' 
function Footer()
{
    return(
        <div className="footer1">
          <ul>
            <div className="footer2">
            <li><Link to="/"><img src={logo5} height="100" width="100"></img></Link></li>
            </div>
            <div className="footer3">
            <li>Help</li>
            <li>About</li>
            <li>Company</li>
            <div className="footer4">
            <li Link to=""><img src={calllogo} height="20px" width="20px"></img>Contact : +91-9993516100</li>
            <div className="footer5">
              <li><img src={maillogo} height="20px"width="20px"></img>E-mail : annumandloi623@gmail.com</li>
            </div>
            <div className="footer6">
            <img src={whatsaplogo} height="40px" width="40px"></img>
            <Link to=""><img src={instalogo} height="40px" width="40px"></img></Link>
            <Link to=""><img src={fblogo} height="40px" width="40px"></img></Link>
            </div>
            </div>
            </div>
          </ul>
       </div>
    )
}
export default Footer