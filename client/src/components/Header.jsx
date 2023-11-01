'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { HiMenuAlt1, HiSearch } from 'react-icons/hi'
import { BiSolidHomeAlt2 } from 'react-icons/bi'
import { MdContacts, MdShoppingBasket, MdStickyNote2 } from 'react-icons/md'
import { usePathname, useRouter } from 'next/navigation'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { navAnimation } from './animation'

const Header = ({ className }) => {
  const [show, setShow] = useState('top')
  const [lastScrollY, setLastScrollY] = useState(0)
  const [search, setSearch] = useState('')

  const router = useRouter()
  const pathname = usePathname()

  const shouldHideHeader = pathname.includes('/admin-panel')

  if (shouldHideHeader) {
    return null
  }

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 200) {
        if (window.scrollY > lastScrollY) {
          setShow('hide')
        } else {
          setShow('show')
        }
      } else {
        setShow('top')
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [lastScrollY])

  const [showNav, setShowNav] = useState(false)

  const handleNavigation = () => {
    setShowNav((prev) => !prev)
  }

  const [iconSize, setIconSize] = useState(0)
  const [isSmallScreen, setIsSmallScreen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setIsSmallScreen(true)
      } else {
        setIsSmallScreen(false)
      }
      if (window.innerWidth < 640) {
        setIconSize(8)
      } else {
        setIconSize(0)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const links = [
    {
      text: 'Home',
      link: '/',
      icon: <BiSolidHomeAlt2 size={22 - iconSize} />,
      line: <div className="bg-white w-[2px] h-[23px]"></div>,
    },

    {
      text: 'Results',
      link: '/results',
      icon: <MdStickyNote2 size={22 - iconSize} />,
      line: <div className="bg-white w-[2px] h-[23px]"></div>,
    },
    {
      text: 'Pricing',
      link: '/pricing',
      icon: <MdStickyNote2 size={22 - iconSize} />,
      line: <div className="bg-white w-[2px] h-[23px]"></div>,
    },
    {
      text: 'Ratings',
      link: '/ratings',
      icon: <MdStickyNote2 size={22 - iconSize} />,
      line: <div className="bg-white w-[2px] h-[23px]"></div>,
    },

    {
      text: 'Contact',
      link: '/contact',
      icon: <MdContacts size={23 - iconSize} />,
    },
  ]

  const handleMainClick = (links) => {
    router.push(links)

    setShowNav(false)
  }

  const handleSearch = () => {
    if (search !== '') {
      router.push(`/${search}`)
    }
  }

  return (
    <>
      <header
        className={`fixed z-10 w-screen transition-all duration-300 ease-in-out ${className} ${show}`}
      >
        <div className="bg-none relative xl:mx-[8rem] lg:mx-[5rem] sm:mx-[2rem] mx-2">
          <div className="flex sm:justify-between justify-start items-center xl:py-2 py-0 text-white xl:h-20 sm:h-16 h-12">
            <h1>
              <Link href={'/'} className="sm:w-[16rem] w-[9rem] block">
                <Image
                  alt="logo"
                  src={'/images/logo.png'}
                  width={200}
                  height={200}
                  className="max-w-[none] xl:w-[18rem] lg:w-[15rem] md:w-[12rem] sm:w-[10rem] w-[8rem] xl:mt-1"
                />
              </Link>
            </h1>
            <div className="flex justify-center items-center text-xl sm:static absolute right-[12px]">
              <div className="flex xl:w-[250px] sm:w-[212px] w-[155px] bg-[#000000ad] border-2 border-[#c8dbff82] items-center text-white justify-center rounded-full px-3 md:text-xl text-[14px]">
                <input
                  className="placeholder:italic placeholder:text-slate-400 block bg-none input-bg-none w-full py-0 pl-3 pr-3 focus:outline-none sm:text-sm border-none rounded-full"
                  placeholder="Search products.."
                  type="text"
                  name="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch()
                    }
                  }}
                />
                <HiSearch
                  size={28 - iconSize}
                  className="cursor-pointer"
                  color="white"
                  onClick={handleSearch}
                />
              </div>
              <div className="xl:hidden inline-block ml-2 relative z-10 right-0">
                {!showNav ? (
                  <HiMenuAlt1
                    size={30}
                    className="cursor-pointer"
                    color="white"
                    onClick={handleNavigation}
                  />
                ) : (
                  <AiOutlineCloseCircle
                    size={30}
                    className="cursor-pointer"
                    color="white"
                    onClick={handleNavigation}
                  />
                )}
              </div>
              <div
                className={`xl:flex justify-center items-center xl:text-2xl text-[22px] font-semibold main-menu gap-4 2xl:ml-3 ml-0 ${
                  showNav ? 'left-0' : 'left-[110%]'
                }`}
              >
                {links?.map((item, i) => (
                  <motion.div
                    key={i}
                    {...navAnimation(i)}
                    className={`flex justify-start items-center xl:gap-3 gap-2 cursor-pointer 2xl:mx-auto ml-0 mr-auto hover:text-[#3f88ff] transition-all duration-100 ${
                      item?.link === pathname && 'text-[#84b4ff]'
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleMainClick(item?.link, item?.text)
                    }}
                  >
                    {isSmallScreen && (
                      <span className="ml-2">{item?.icon}</span>
                    )}
                    <div>{item?.text}</div>{' '}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
