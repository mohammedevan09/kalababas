'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { BsFacebook, BsTwitter, BsTelegram } from 'react-icons/bs'
import { FcComboChart } from 'react-icons/fc'

const Footer = () => {
  const pathname = usePathname()

  const shouldHideHeader = pathname.includes('/admin-panel')

  if (shouldHideHeader) {
    return <></>
  }

  const social = [
    {
      icon: <BsFacebook size={28} />,
      link: 'https://www.facebook.com/profile.php?id=61550543993335&mibextid=LQQJ4d',
    },
    {
      icon: <BsTwitter size={28} />,
      link: 'https://twitter.com/imtiazzavi',
    },
    {
      icon: <BsTelegram size={32} />,
      link: 'https://t.me/Imtiazzavi',
    },
  ]

  return (
    <>
      <footer className="text-white flex flex-col justify-center items-center w-full 2xl:px-[10rem] lg:px-[5rem] sm:px-[1.5rem] px-2 relative">
        <div className="sm:flex grid md:justify-between justify-center items-center py-6 w-full border-white border-b-[1px] border-t-[1px] gap-5">
          <div className="flex items-center justify-center gap-3">
            <h1 className="xl:text-4xl md:text-2xl text-lg font-bold w-full text-center">
              Discover Daily Cryptocurrency Signals Step into our VIP group
            </h1>
          </div>
          <Link
            href={'https://t.me/+XnWElDg4m_k1ODg9'}
            target="_blank"
            className="font-bold tracking-wider py-2 px-5 bg-white overflow-hidden w-[200px] text-xl text-center rounded-sm text-black sm:mx-0 mx-auto"
          >
            {' '}
            Visit Our Group
          </Link>
        </div>

        <div className="sm:flex grid xs:grid-cols-2 grid-cols-1 justify-between items-start sm:gap-2 gap-[2rem] w-full py-5 relative sm:px-0 xs:px-[4rem] px-[0px] pl-[8px]">
          <div className="sm:w-1/2 w-full text-justify">
            <h2 className="md:text-3xl text-2xl font-semibold">About US</h2>
            <div className="grid items-center justify-left">
              {`Welcome to KalababaS Crypto World! Founded by the dedicated
              KalababaS Team, we are your gateway to the dynamic realm of
              cryptocurrency investing and trading. With a shared passion for
              financial empowerment, we've embarked on this journey to bring the
              transformative potential of cryptocurrencies to individuals
              worldwide. At KalababaS Crypto World, we combine our expertise in
              investment strategies and market analysis to navigate the exciting
              yet complex world of digital assets. Our mission is crystal clear:
              we aim to bestow the gift of financial freedom upon everyone who
              joins us on this exhilarating adventure. Fueled by a commitment to
              transparency, education, and innovation, we're here to provide you
              with the tools, knowledge, and support you need to confidently
              explore the ever-evolving landscape of cryptocurrencies. Join us
              as we pave the way for a future where financial empowerment knows
              no boundaries.`}
            </div>
          </div>
          <div className="h-full break-word sm:w-1/2 w-full grid sm:justify-center justify-start items-center">
            <h2 className="md:text-3xl text-2xl font-semibold">Contact Us</h2>
            <div className="grid items-center justify-left relative">
              <Link
                href={'https://t.me/+XnWElDg4m_k1ODg9'}
                target="_blank"
                className="py-2 pl-1"
              >
                Join Our Telegram Channel
              </Link>
              <a className="py-1 pl-1" href="tel:017874-76134">
                +92 315 9979825
              </a>
              <a className="py-2 pl-1" href="mailto:mohammedevan07@gmail.com">
                mohammedevan07@gmail.com
              </a>
              <div className="flex justify-left gap-2 items-center mb-4">
                {social.map((item, i) => (
                  <a target="_blank" key={i} href={item.link}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="py-4 w-full border-white border-t-[1px] text-center font-semibold text-lg tracking-widest">
          @{new Date().getFullYear()}; KalababaS Crypto World.
        </div>
      </footer>
    </>
  )
}

export default Footer
