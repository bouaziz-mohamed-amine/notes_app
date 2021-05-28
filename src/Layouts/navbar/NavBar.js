import { Link } from "react-router-dom"
import HomeNavBar from "../../components/navbar/Home";
import LoginNavBar from "../../components/navbar/LoginItem";
import  './navbar.css'
const NavBar = (props) => {
    return ( <nav className="sticky-top">
         <Link to='/notes' className='link' >Note App </Link>
        {
             ! props.isAuthorized ?  <LoginNavBar/>  : <HomeNavBar/>
        }
    
    </nav> );
}
 
export default NavBar;