import React from 'react';
import ButtonBlue from "./ButtonBlue";

const Header = () => {
    const navLink = ["Features", "Pricing", "Ressources"]

    return (
        <div className="header-content">
            <div className="wrapper">
                <img src="/img/logo.svg" alt="logo entreprise"/>
                <ul className="nav-link">
                    {
                        navLink.map((item, index) =>
                            <li key={index}>
                                <span>{item}</span>
                            </li>
                        )
                    }
                </ul>
            </div>
            <div className="wrapper">
                <span id="login">Login</span>
                <ButtonBlue text={"Sign Up"} width={110} height={40} borderRadius={20} fontSize={15}/>
            </div>
        </div>
    );
};

export default Header;
