import React from 'react'
import "./Footer.css"
import theme_pattern from "../../assets/sl.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Footer() {
    return (
        <div className="footer">
            <hr />
            <div className="fup">
                <div className="fleft">
                    <div className="name">
                        <img src={theme_pattern} alt="" />
                        <AnchorLink className='anchor' offset={50} href="#Home">
                            <h2>Umar</h2>
                        </AnchorLink>
                        <p>Front-end developer specializing in user-friendly digital experiences. Let's build something great together!</p>
                    </div>
                </div>
                <div className="fright">
                    <input type="text" placeholder='Enter your email' />
                    <button>Subscribe</button>
                </div>
            </div>

        </div>

    )
}

export default Footer
