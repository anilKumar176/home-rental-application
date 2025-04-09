import React from 'react'
import Navbar from "../components/Navbar"
import Hero from '../components/Hero'
import Categories from '../components/categories'
const HomePage = () => {
  return (
    <div>
      <Navbar/>
     <Hero/>
     <Categories/>
    </div>
  )
}

export default HomePage