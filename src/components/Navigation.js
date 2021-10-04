import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";//nous permet en cliquant dessus de naviguer de pages en pages

const Navigation = () => {
    
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
        </div>
        
    );
};

export default Navigation;