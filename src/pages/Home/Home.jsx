import React from 'react'
import Carousel from '../../components/Carousel/Carousel'
import "./Home.scss"
import Categories from '../../components/Categories/Categories'

const Home = () => {
  return (
    <div className="home">
      <Carousel/>
      <Categories/>
    </div>
  )
}

export default Home