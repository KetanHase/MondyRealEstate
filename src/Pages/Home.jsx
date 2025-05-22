import React from 'react';
import Navbar from '../Components/Navbar';
import SearchbarHome from '../Components/Home/SearchbarHome';
import Footer from '../Components/Footer';
import SellFaster from '../Components/Home/SellFaster';
import RecentHomes from '../Components/Home/RecentHomes';
import Mortgage from '../Components/Home/Mortgage';
import SellerSuccess from '../Components/Home/SellerSuccess';

const Home = () => {
  return (
    <>

     
     <Navbar />
     <SearchbarHome />
     <SellFaster />
     <RecentHomes />
     <Mortgage />
     <SellerSuccess />


     <Footer />

     
    </>
  )
}

export default Home;