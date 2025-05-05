import React, { useRef, useState } from 'react'
import "./Navbar.css"
import nav_underline from "../../assets/sl.png"
import Open_menu from "../../assets/menu_open.svg"
import Close_menu from "../../assets/menu_close.svg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Navbar() {

    const [menu, setMenu] = useState("Home")
    const menuRef = useRef()

    const closeMenu = () => {
        menuRef.current.style.right = "-350px"
    }

    const openMenu = () => {
        menuRef.current.style.right = "0px"

    }

    return (
        <div className="navbar">

            <div className="logo">
                <h4>Umar</h4>
                <img src={nav_underline} alt="" />
            </div>
            <div className="openMenu">
                <img onClick={openMenu} className='openMenu' src={Open_menu} alt="" />
            </div>
            <ul ref={menuRef}>
                <img onClick={closeMenu} className='closeMenu' src={Close_menu} alt="" />
                <li onClick={() => { setMenu("Home") }} >
                    <AnchorLink className='anchor' offset={50} href="#Home">
                        <p>Home</p>
                    </AnchorLink>
                    {menu === "Home" ? <img src={nav_underline} alt="" /> : <></>} </li>

                <li onClick={() => { setMenu("About") }}>
                    <AnchorLink className='anchor' offset={50} href="#Aboutme">
                        <p>About</p>
                    </AnchorLink>
                    {menu === "About" ? <img src={nav_underline} alt="" /> : <></>} </li>

                <li onClick={() => { setMenu("Services") }}>
                    <AnchorLink className='anchor' offset={50} href="#Services">
                        <p>Services</p>
                    </AnchorLink>
                    {menu === "Services" ? <img src={nav_underline} alt="" /> : <></>} </li>

                <li onClick={() => { setMenu("Portfolio") }} >
                    <AnchorLink className='anchor' offset={50} href="#Work">
                        <p>Portfolio</p>
                    </AnchorLink>
                    {menu === "Portfolio" ? <img src={nav_underline} alt="" /> : <></>} </li>

                <li onClick={() => { setMenu("Contact") }} >
                    <AnchorLink className='anchor' offset={50} href="#Contact">
                        <p>Contact</p>
                    </AnchorLink>
                    {menu === "Contact" ? <img src={nav_underline} alt="" /> : <></>} </li>
            </ul>


            <AnchorLink className='anchor' offset={50} href="#Contact">
                <button className='navbarBtn'>Connect With me</button>
            </AnchorLink>


        </div>
    )
}

export default Navbar
