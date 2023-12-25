import React, { useEffect, useState } from 'react'

const useWindowResize = () => {
    const [width, setWidth] = useState(0)


useEffect(() => {
  window.addEventListener('resize', e => {
    
    setWidth(window.innerWidth);
  })
}, [width])
    return {width}
}

export default useWindowResize