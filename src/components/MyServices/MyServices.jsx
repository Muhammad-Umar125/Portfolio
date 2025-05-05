import React from 'react'
import "./MyServices.css"
import theme_pattern from "../../assets/sl.png"
import arrow from "../../assets/arrow_icon.svg"
import Services_Data from '../../assets/services_data'


function MyServices() {
    return (
        <div id='Services' className='myServices'>

            <div className="serviceTitle">
                <h1>My Services</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="serviceCont">


                {Services_Data.map((service ,index) => {
                    return (
                        <div key={index} className="service">
                            <p>{service.s_no}</p>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="readmore">
                                <p>read more</p>
                                <img src={arrow} alt="" />
                            </div>
                        </div>
                    )
                })}


            </div>


        </div>
    )
}

export default MyServices
