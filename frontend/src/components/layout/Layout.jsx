import React from 'react'
import Socials from './Socials/Socials'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router'
function Layout() {
  return (
    <>
      <Socials />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default Layout
