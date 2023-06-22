import React from 'react'
import Header from '../components/Header'
import BusinessToNext from '../components/BusinessToNext'
import Testimonial from '../components/Testimonial'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
   <Header/>
   <BusinessToNext/>
   <Testimonial/>
   <Footer/>
    </>
  )
}

export default Home