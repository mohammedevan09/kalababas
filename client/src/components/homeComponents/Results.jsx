'use client'

import Title from '../Title'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import ResultsCart from '../ResultsCart'

const Results = ({ data, title }) => {
  const [dataToShow, setDataToShow] = useState(12)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1280) {
        setDataToShow(6)
      } else {
        setDataToShow(12)
      }
    }

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="md:my-[4rem] my-[2rem] grid justify-center items-center relative">
      <div className="blur-new left-0"></div>
      <div className="blur-new right-0"></div>
      <div className="blur-new left-[40%] bottom-0"></div>
      <div className="blur-new right-[40%] top-0"></div>
      <div className="blur-new top-[20%] "></div>
      <div className="blur-new bottom-[20%] "></div>
      <div className="blur-new top-[40%] "></div>
      <div className="blur-new bottom-[40%] "></div>
      <Title title={title || 'Our Results'} />
      <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 md:justify-around justify-between items-start xl:mx-[8rem] lg:mx-[5rem] sm:mx-[2rem] mx-[12px] md:gap-10 gap-5">
        {' '}
        {data?.slice(0, dataToShow)?.map((item, i) => (
          <ResultsCart item={item} key={i} />
        ))}
      </div>
      <Link
        href={'/results'}
        className="gradient-text-2 2xl:mt-[3.5rem] mt-[1.5rem] mb-[1rem] flex mx-auto md:text-3xl text-2xl font-semibold justify-center"
      >
        See More Results
      </Link>
    </div>
  )
}

export default Results
