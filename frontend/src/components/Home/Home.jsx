import React from 'react'
import Hero from './Hero/Hero'
import BestSeller from './BestSeller/BestSeller'
import ShopTheLook from './ShopTheLook/ShopTheLook'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import Brands from './Brands/Brands'
import ShopGram from './ShopGram/ShopGram'
import SpringEvent from './SpringEvents/SpringEvent'
import Test from './Test/Test'
import HappyClients from './HappyClients/HappyClients'
import Services from './Services/Services'
import DontMissOut from '../Model-Boxes/DontMissOut/DontMissOut'
function Home() {
  return (
    <>
      {/* <DontMissOut/> */}
      <Hero />
      <SpringEvent/>
      <ShopByCategory />
      <BestSeller />
      <ShopTheLook/>
      <Test/>
      <Brands/>
      <ShopGram/>
      <Services/>
    </>
  )
}

export default Home
