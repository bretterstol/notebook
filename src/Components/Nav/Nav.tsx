import React from "react";
import { Link } from "@reach/router";


const Nav = () => {
    return(
        <nav className="nav">
            <Link to="/"> Home </Link>
            <Link to="/notebook">Notebook</Link>
        </nav>
    )
}

export default Nav;