import { AiTwotonePhone } from 'react-icons/ai'
import { FaAddressCard } from 'react-icons/fa'
import { BsFacebook, BsTwitter, BsTelegram } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'
import SendEmail from './SendEmail'

const page = () => {
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
    <div className="grid items-around text-white justify-center xl:pt-44 pt-24 pb-10 gap-10">
      <div className="mx-auto">
        <h1 className="md:text-6xl sm:text-5xl text-4xl tracking-wide">
          Find Us
        </h1>
        <div className="w-full h-1 rounded-md bg-white mt-1"></div>
      </div>

      <div className="md:flex grid justify-evenly items-start gap-10 sm:px-0 px-7 w-screen">
        <SendEmail />
        <div className="sm:w-[400px] w-[350px]">
          <div className="h-full">
            <h2 className="sm:text-4xl text-3xl font-semibold mb-3">
              Get in touch with us
            </h2>
            <div className="grid items-center justify-left gap-4">
              <p className="py-2 pl-1 flex justify-start items-center gap-3">
                <FaAddressCard size={24} /> Agrabad, Chattogram, Bangladesh
              </p>
              <a
                className="py-1 pl-1 flex justify-start items-center gap-3"
                href="tel:017874-76134"
              >
                <AiTwotonePhone size={24} />
                +880 1905-248476
              </a>
              <a
                className="py-2 pl-1 flex justify-start items-center gap-3"
                href="mailto:fahadbinenam1234@gmail.com"
              >
                <BiLogoGmail size={24} /> fahadbinenam1234@gmail.com
              </a>
              <div className="flex justify-start gap-4 items-center bottom-8 ml-1">
                {social.map((item, i) => (
                  <a target="_blank" key={i} href={item.link}>
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
