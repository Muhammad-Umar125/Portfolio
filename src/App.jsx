import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Aboutme from './components/AboutMe/Aboutme'
import MyServices from './components/MyServices/MyServices'
import LatestWork from './components/LatestWork/LatestWork'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'



function App() {

  return (
    <div>
<Navbar></Navbar>
 <Hero></Hero> 
<Aboutme></Aboutme>
<MyServices></MyServices>
<LatestWork></LatestWork>
<Contact></Contact>
<Footer></Footer> 
    </div>
  )
}

export default App
