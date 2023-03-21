import React from "react";
import {Link} from "react-router-dom";

function navBar(){

return(
    <ul>
        <li><Link to="/">home</Link></li>
        <li><Link to="/ourPurpose">Our Purpose</Link></li>
        <li><Link to="/market">The Market</Link></li>
        <li><Link to="/jamLounge">The Jam Lounge</Link></li>

    </ul>
)
}

export default navBar;
