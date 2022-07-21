import React from 'react';
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const btnHome = () => {
        navigate(`/reactllive`);
    }
    const navigate = useNavigate();
    return (
        <div>
            <ul class="topnav">
                <li><a class="active" onClick={btnHome}>Home</a></li>
                <li class="right"><a >Login</a></li>
                <li class="right"><a >Register</a></li>
            </ul>
        </div>
    )
}
export default Navbar;