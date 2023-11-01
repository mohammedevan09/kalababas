'use client'

import Link from 'next/link'
import Title from '../Title'
import Tilt from 'react-parallax-tilt'
import Image from 'next/image'

const Pricing = () => {
  const pricing = [
    {
      name: 'QUARTERLY',
      price: '$ 150',
      img: '/images/trade1.jpg',
    },
    {
      name: 'HALF-YEARLY',
      price: '$ 300',
      img: '/images/trade2.jpg',
    },
    {
      name: 'YEARLY',
      price: '$ 500',
      img: '/images/trade3.jpg',
    },
  ]

  return (
    <div className="md:my-[4rem] my-[2rem] grid justify-center items-center relative">
      <div className="blur-new left-0"></div>
      <div className="blur-new right-0"></div>
      <div className="blur-new left-[40%] bottom-0"></div>
      <div className="blur-new right-[40%] top-0"></div>
      <Title title={'Pricing'} />
      <div className="grid sm:grid-cols-3 grid-cols-1 justify-around items-center xl:mx-[8rem] lg:mx-[5rem] sm:mx-[2rem] mx-[12px] md:gap-10 sm:gap-5 gap-2">
        {pricing?.map((item, i) => (
          <Tilt
            perspective={500}
            glareEnable={true}
            glareMaxOpacity={0.3}
            glareColor="white"
            glarePosition="all"
            className="bg-cover preserve-3d bg-no-repeat bg-center p-3 mx-auto text-center grid justify-center items-center w-full"
            key={i}
          >
            <div className="sm:w-56 w-40  mx-auto">
              <Image
                src={item.img}
                alt="image"
                width={500}
                height={500}
                className="sm:h-56 h-40 object-cover rounded-full"
              />
            </div>
            <div className="justify-center sm:grid flex items-center  pricesDetails mt-3 gradient-text-2">
              <h1 className="sm:text-3xl text-2xl font-semibold">
                {item?.name}
              </h1>
              <div className="sm:hidden inline-block font-bold px-2">--</div>
              <h3 className="sm:mx-auto md:text-3xl text-2xl font-semibold">
                {item?.price}
              </h3>
            </div>
          </Tilt>
        ))}
      </div>
      <div className="w-full px-3 md:mt-20 mt-10">
        <Link
          href={'https://t.me/Imtiazzavi'}
          target="_blank"
          className="btn text-white hover:text-white hover:bg-[#00000000] border border-blue-500 text-[28px] xl:text-[36px] font-semibold block btn-bg bg-white transition-all duration-1000 px-4 py-2 tracking-wider w-full rounded-[44px] bg-gradient-hire-me text-center mx-auto md:mt-0 mt-3"
        >
          Hire Me By Chat
        </Link>
      </div>
    </div>
  )
}

export default Pricing
