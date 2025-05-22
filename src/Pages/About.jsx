import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SearchbarAbout from '../Components/About/SearchbarAbout'
import YoungTeam from '../Components/About/YoungTeam'
import SellingPlace from '../Components/About/SellingPlace'
import Agents from '../Components/About/Agents';
// import '../Css/about.css'


const About = () => {
  return (
     <>
     <Navbar />
     <SearchbarAbout />
     <YoungTeam />
     <SellingPlace />
     <Agents />
     <Footer />
     
     </>
  )
}

export default About