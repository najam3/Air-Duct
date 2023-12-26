import React, { useEffect, useState } from 'react'

const useScrollPos = () => {
    const [scrollPos, setScrollPos] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollPos(window.scrollY)
        })
    }, [scrollPos])
  return {scrollPos}
}

export default useScrollPos