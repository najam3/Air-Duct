import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import SmNavbar from '../components/SmNavbar'
import useScrollPos from '../hooks/useScrollPos'

const Layout = ({children}) => {
  const [width, setWidth] = useState(window.innerWidth)
  const {scrollPos} = useScrollPos();
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
        <main className={`${scrollPos > 2 ? 'pt-[190px]' : ''}`}>
        {children}
        </main>
      <Footer />
      </>
  )
}

export default Layout