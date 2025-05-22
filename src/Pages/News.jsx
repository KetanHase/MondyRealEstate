import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SubNews from '../Components/News/SubNews'
import SearchbarAbout from '../Components/About/SearchbarAbout'
import SubNews2 from '../Components/News/SubNews2'

const News = () => {
  return (
     <>
     <Navbar />
     <SearchbarAbout />
     <SubNews />
     <SubNews2 />
     <Footer />
     </>
  )
}

export default News