import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import SmNavbar from '../components/SmNavbar'

const Layout = ({children}) => {
  const [width, setWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
    })
  }, [width])
  
  return (
    <>
     {
      width <= 992 ? (
         <SmNavbar />
         ) : (
           <Navigation/>
         )
      }
        <main>
        {children}
        </main>
      <Footer />
      </>
  )
}

export default Layout