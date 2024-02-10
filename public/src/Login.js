import { Link } from 'react-router-dom'
import './login.css'
function Login()
{
    return(
        <div className='login1'>
           <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
          <div className='login2'>
           
            <form>
              <br></br>
              <br></br>
              <br></br>
                Username  :   <input type="text" placeholder="Enter  Name"></input><br></br>
                <br></br>
                Password   :  <input type="password" placeholder=" Enter Password"></input><br></br>
                <br></br>
                <br></br>
               
                <button><Link to="/">Submit</Link></button>
            </form>
          </div>  
        </div>
    )
}
export default Login