import { useState } from "react";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";

const Header =() => {

    const [loginbtn_text, setLoginbtn_text]=useState("Login");
    const status = useOnlineStatus();
    return(
        <div className="flex justify-between p-4 border-b-2 bg-emerald-400">

            <div className="logo">
                <h3 className="p-3 font-mono font-bold text-xl hover:cursor-pointer ">Speed Eats</h3>
            </div>

            <div className="nav_items">
                <ul className="flex">
                    <li className="p-3">Status {status?"\u{1F7E2}":"\u{1F534}"}</li>
                    <li className="p-3"> <Link to="/about"> About Us </Link></li> 
                    <li className="p-3"><Link to="/"> Home </Link></li>
                    <li className="p-3">Sign In</li>
                    <li className="p-3">Cart</li>
                    <li className="p-3"> <Link to="/login"><button className="login-btn" onClick={()=>{setLoginbtn_text("Logout")}}>{loginbtn_text}</button></Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Header;