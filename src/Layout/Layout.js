import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import SmNavbar from '../components/SmNavbar'
import useScrollPos from '../hooks/useScrollPos'


const Layout = ({children}) => {
  // const {width} = useWindowResize()
  const {scrollPos} = useScrollPos();
  const [width, setWidth] = useState(window.innerWidth)



useEffect(() => {
  window.addEventListener('resize', e => {
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
        <main className={`${scrollPos > 2 && width > 624 ? 'pt-[190px]' : scrollPos > 200 && width < 624 ? 'pt-[190px]' : ''}`}>
        {children}
        </main>
      <Footer />
      </>
  )
}

export default Layout