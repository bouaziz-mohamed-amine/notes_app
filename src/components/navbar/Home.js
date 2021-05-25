import React from "react";

const HomeNavBar = () => {
    return ( 
        <React.Fragment>
            <ul>
             <li style={{color: "white"}} ><a href="#">All Note</a></li>
             <li style={{color: "white"}}><a href="#">Add Note</a></li>
             <li style={{color: "white"}}><a href="#" >Favorites</a></li>
             <li style={{color: "white"}}><a href="#">Log Out</a></li>
        </ul>
        </React.Fragment>
     );
}
 
export default HomeNavBar;