import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import SearchbarAbout from '../Components/About/SearchbarAbout'
import SubSearchresult from '../Components/SearchResult/SubSearchresult'

const SearchResult = () => {
  return (
    <>
   <Navbar />
   <SearchbarAbout />
   <SubSearchresult />
   <Footer />   
    </>
  )
}

export default SearchResult