'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import bigScreen from '../../../public/images/crypto.jpg'
// import smallScreen from '../../../public/images/mobile-landing.jpg'

const LandingResponsiveImage = () => {
  const [imageUrl, setImageUrl] = useState(bigScreen)

  //   useEffect(() => {
  //     const handleResize = () => {
  //       if (window.innerWidth <= 900) {
  //         setImageUrl(smallScreen)
  //       } else {
  //         setImageUrl(bigScreen)
  //       }
  //     }

  //     window.addEventListener('resize', handleResize)

  //     handleResize()

  //     return () => {
  //       window.removeEventListener('resize', handleResize)
  //     }
  //   }, [])

  return (
    <Image
      src={imageUrl}
      width="0"
      height="0"
      sizes="100vw"
      alt="landing"
      className="w-full md:min-h-screen min-h-[760px] object-cover blur-[13px]"
    />
  )
}

export default LandingResponsiveImage
