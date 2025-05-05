import React from 'react'
import Profile2 from "../../assets/Profile2.jpg"
import theme_pattern from "../../assets/sl.png"
import "./Aboutme.css"

function Aboutme() {
  return (
    <div id='Aboutme' className="aboutMe">

      <div className="aboutTitle">
        <h1>About me</h1>
        <img className='prof' src={theme_pattern} alt="" />
      </div>


      <div className="aboutInfo">
        <div className="aboutLeft">
          {/* <img src={Profile2} alt="" /> */}
        </div>

        <div className="aboutRight">

          <div className="details">
            <p>I'm deeply passionate about crafting user-friendly experiences that seamlessly blend design and code. As a front-end developer, I excel in turning ideas into visually engaging interfaces that leave a lasting impression. I'm driven by a constant desire to innovate, always eager to explore new possibilities and push the boundaries of what's achievable..</p>
            <p className='p2'>Now, let's delve into the tools and technologies that power my work:</p>

          </div>

          <div className="aboutSkills">

            <div className='skills'><h4>HTML & CSS</h4><hr className='html' style={{ width: "85%" }} /></div>
            <div className='skills'><h4>Javascript</h4><hr className='js' style={{ width: "70%" }} /></div>
            <div className='skills'><h4>Tailwind CSS</h4><hr className='tail' style={{ width: "75%" }} /></div>
            <div className='skills'><h4>React Js</h4><hr className='react' style={{ width: "60%" }} /></div>

          </div>
        </div>
      </div>

      {/* <div className="aboutWork">

        <div className="work">
          <h2>1+</h2>
          <p>Year of Experience</p>
        </div>
        <hr />
        <div className="work">
          <h2>70+</h2>
          <p>Projects</p>
        </div>
        <hr />
        <div className="work">
          <h2>8+</h2>
          <p>Happy Clients</p>
        </div>

      </div> */}

    </div>
  )
}

export default Aboutme
