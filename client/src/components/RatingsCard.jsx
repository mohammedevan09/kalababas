'use client'

import Image from 'next/image'
import Ratings from './Ratings'
import Tilt from 'react-parallax-tilt'
import { useEffect, useState } from 'react'

const RatingsCard = ({ item }) => {
  const [iconSize, setIconSize] = useState(25)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIconSize(18)
      } else {
        setIconSize(25)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <Tilt className="full-project md:mb-14 mb-20" perspective={3500}>
      <div className="md:my-10 my-5 text-white border rounded-2xl p-2 h-[360px]">
        <div className="md:text-5xl text-[37px] invertedComma">{'"'}</div>
        <div className="md:w-20 w-16 mx-auto">
          <Image
            src={item.image}
            alt="ratings"
            width={200}
            height={200}
            className="object-cover md:h-20 h-16 rounded-full"
          />
        </div>
        <h3 className="md:text-2xl text-xl mx-auto my-3 text-center tracking-wide">
          {item?.fullName?.charAt(0)?.toUpperCase() + item?.fullName?.slice(1)}
        </h3>
        <div className="flex justify-center items-start gap-2">
          <Ratings item={item?.star} color={'yellow'} size={iconSize} />
          <span className="md:text-2xl text-xl">{item?.star} Star</span>
        </div>
        <h3 className="md:text-xl text-lg mx-auto my-3 tracking-wide text-center">
          {item.comment}
        </h3>

        <div className="my-10"></div>
      </div>
    </Tilt>
  )
}

export default RatingsCard
