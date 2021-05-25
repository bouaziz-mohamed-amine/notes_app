import React from "react";

const LoginNavBar = () => {
    return ( 
        <React.Fragment>
        <ul>
             <li className="bg-login"><a>Login</a></li>
             <li className="bg-sign"><a>Sign Up</a></li>
        </ul>
        </React.Fragment>
     );
}
 
export default LoginNavBar;