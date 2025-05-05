import React from 'react'
import "./Latestwork.css"
import theme_pattern from "../../assets/sl.png"
import arrow from "../../assets/arrow_icon.svg"
import mywork_data from '../../assets/mywork_data'

function LatestWork() {
  return (
    <div id='Work' className='latestWork'>

      <div className="LatestWorkTitle">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="LworkConatiner">

        {mywork_data.map((work, index) => {

          return (

            <div key={index} className="Lwork">
              <img  src={work.w_img} alt="" />
              <div className="buttons">

              <a href={work.w_live}>
                <button className="btn2">Live demo</button>
              </a>
              </div>

            </div>

          )
        })}

      </div>

<div className="Lbtn">
  <button>See more</button>
  <img src={arrow} alt="" />
</div>
    </div>
  )
}

export default LatestWork
