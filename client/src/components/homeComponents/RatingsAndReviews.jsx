'use client'

import Title from '../Title'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper/modules'
import Image from 'next/image'
import Tilt from 'react-parallax-tilt'
import Ratings from '../Ratings'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const RatingsAndReviews = ({ data }) => {
  const [iconSize, setIconSize] = useState(25)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIconSize(20)
      } else {
        setIconSize(25)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  return (
    <>
      <div className="md:my-[4rem] my-[2rem] grid justify-center items-center relative text-white">
        <div className="blur-new left-0"></div>
        <div className="blur-new right-0"></div>
        <div className="blur-new left-[40%] bottom-0"></div>
        <div className="blur-new right-[40%] top-0"></div>{' '}
        <Title title={'Ratings'} />
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          {data?.map((item, i) => (
            <SwiperSlide key={i}>
              <Tilt className="full-project" perspective={3500}>
                <div className="my-10 p-2">
                  <div className="md:w-24 w-16 mx-auto">
                    <Image
                      src={item.image}
                      alt="ratings"
                      width={200}
                      height={200}
                      className="object-cover md:h-24 h-16 rounded-full"
                    />
                  </div>
                  <h3 className="md:text-2xl text-xl mx-auto my-3 text-center tracking-wide">
                    {item?.fullName?.charAt(0)?.toUpperCase() +
                      item?.fullName?.slice(1)}
                  </h3>
                  <div className="flex justify-center items-start gap-2">
                    <Ratings
                      item={item?.star}
                      color={'yellow'}
                      size={iconSize}
                    />
                    <span className="md:text-2xl text-lg">
                      {item?.star} Star
                    </span>
                  </div>
                  <h3 className="md:text-xl text-lg mx-auto my-3 text-center tracking-wide">
                    {item.comment}
                  </h3>
                  <div className="opacity"></div>
                </div>
              </Tilt>
            </SwiperSlide>
          ))}
        </Swiper>
        <Link
          href={'/ratings'}
          className="gradient-text-2 2xl:mt-[3.5rem] mt-[1.5rem] mb-[1rem] flex mx-auto md:text-3xl text-2xl font-semibold justify-center"
        >
          See More Ratings And Reviews
        </Link>
      </div>
    </>
  )
}

export default RatingsAndReviews
