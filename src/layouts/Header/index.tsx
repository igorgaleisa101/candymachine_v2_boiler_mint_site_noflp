import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import SOCIALS from "../../utils/constants/social";
import { Link } from "react-scroll";

const useStyles = makeStyles((theme) => ({
    navLinkContainer: {
        display: 'none',
        [theme.breakpoints.up("md")]: {
            display: 'flex',
        },          
        [theme.breakpoints.down("sm")]: {
            display: 'none',
        }
    }
}));

const Header = () => {
    const [sticky, setSticky] = useState(false);

    const classes = useStyles();

    function toggleMenu() {
        const menu = document.getElementById("mobileNavContainer")!;
        menu.classList.toggle("open-menu");
        console.log("pressed");
    }

    const trackScroll = () => {
        if (typeof window === "undefined") {
          return;
        } else {
          setSticky(window.scrollY >= 150);
        }
    };
    
    useEffect(() => {
        document.addEventListener("scroll", trackScroll);

        return () => {
            document.removeEventListener("scroll", trackScroll);
        };
    }, []);
    
    const stickyStyle = {
        // transform: `translateY(${sticky ? "0px" : "-100%"})`
        backgroundColor: `${sticky ? "#000" : "transparent"}`
    };

    const stickyLinkStyle = {
        color: `${sticky ? "#fff" : "#fff"}`
    }

    return (
        <>
            <div id="mobileNavContainer" className="mobile-nav">
                <div className="mobile-nav-close-button" >
                <img src="/icons/close.svg" alt="" onClick={toggleMenu}/>
                </div>
                <ul>
                <li>
                    <img className="mobile-nav-logo" src="/img/logo.png" alt="" />
                </li>
                <li>
                    <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
                        <a onClick={toggleMenu}>
                            Home
                        </a>
                    </Link>
                </li>
                <li>
                    <Link to="info" spy={true} smooth={true} offset={50} duration={500}>
                        <a onClick={toggleMenu}>
                            Info
                        </a>
                    </Link>
                </li>
                <li>
                    <Link to="roadmap" spy={true} smooth={true} offset={50} duration={500}>
                        <a onClick={toggleMenu}>
                            Roadmap
                        </a>
                    </Link>
                </li>
                <li>
                    <Link to="faq" spy={true} smooth={true} offset={50} duration={500}>
                        <a onClick={toggleMenu}>
                            Faq
                        </a>
                    </Link>
                </li>
                <li>
                    <Link to="team" spy={true} smooth={true} offset={50} duration={500}>
                        <a onClick={toggleMenu}>
                            Team
                        </a>
                    </Link>
                </li>
                <li>
                    <div className="social-icons" style={{paddingLeft: 0}}>                        
                        <a href={SOCIALS.TWITTER.HREF} target="_blank" rel="noreferrer">
                            <img className="nav-social" src="/icons/twitter.svg" alt="" />
                        </a>
                        <a href={SOCIALS.DISCORD.HREF} target="_blank" rel="noreferrer">
                            <img className="nav-social" src="/icons/discord.svg" alt="" />
                        </a>
                    </div>
                </li>
                </ul>
            </div>
            <div className="mobile-menu-button" onClick={toggleMenu}>
                <img src="/icons/menu.svg" alt="" />
            </div>
            <div className="nav-header" style={stickyStyle}>
                <Container maxWidth="lg" >
                    <nav>
                        <div className="nav-container">
                            <img className="nav-logo" src="/img/logo.png" alt="" />
                            <div className={classes.navLinkContainer}>
                                <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
                                    <a className="hide-800" style={stickyLinkStyle}>
                                        Home
                                    </a>
                                </Link>
                                <Link to="info" spy={true} smooth={true} offset={50} duration={500}>
                                    <a className="hide-800" style={stickyLinkStyle}>
                                        Info
                                    </a>
                                </Link>
                                <Link to="roadmap" spy={true} smooth={true} offset={50} duration={500}>
                                    <a className="hide-800" style={stickyLinkStyle}>
                                        Roadmap
                                    </a>
                                </Link>
                                <Link to="faq" spy={true} smooth={true} offset={50} duration={500}>
                                    <a className="hide-800" style={stickyLinkStyle}>
                                        Faq
                                    </a>
                                </Link>
                                <Link to="team" spy={true} smooth={true} offset={50} duration={500}>
                                    <a className="hide-800" style={stickyLinkStyle}>
                                        Team
                                    </a>
                                </Link>
                                <div className="social-icons hide-800">
                                    <a href={SOCIALS.TWITTER.HREF} target="_blank" rel="noreferrer">
                                        <img className="nav-social" src="/icons/twitter.svg" alt="" />
                                    </a>
                                    <a href={SOCIALS.DISCORD.HREF} target="_blank" rel="noreferrer">
                                        <img className="nav-social" src="/icons/discord.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </nav>
                </Container>
            </div>
        </>
    )
}

export default Header;