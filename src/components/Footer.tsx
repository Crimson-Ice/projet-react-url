import React from 'react';

const Footer = () => {
    const footerNav = [
        {
            footerLink: ["Features", "Links Shortening", "Branded Links", "Analytics"]
        },
        {
            footerLink: ["Ressources", "Blog", "Developpers", "Support"]
        },
        {
            footerLink: ["Company", "About", "Our Team", "Careers", "Contact"]
        }
    ];

    const iconWay = [
        "/img/iconSocialNetWork/icon-facebook.svg",
        "/img/iconSocialNetWork/icon-twitter.svg",
        "/img/iconSocialNetWork/icon-pinterest.svg",
        "/img/iconSocialNetWork/icon-instagram.svg",
    ];


    return (
        <div className="footer">
            <div className="footer-content">
                <h1>Shortly</h1>
                <div className="footer-nav">
                    {footerNav.map((navItem, index) => (
                        <ul key={index}>
                            {navItem.footerLink.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                    ))}
                </div>
                <div className="logo-social-NetWork">
                    {
                        iconWay.map((item, index) =>
                            <img className="image"  key={index} src={item} alt="icon social network"/>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Footer;
