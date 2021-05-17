import { Link } from "react-router-dom"
import  './navbar.css'
const NavBar = (props) => {
    return ( <nav>
        <Link to='/notes' className='link' >Notes Application </Link>
    
        <ul>
            <li className="bg-login">Login</li>
            <li className="bg-sign">Sign Up</li>
        </ul>
    
    </nav> );
}
 
export default NavBar;