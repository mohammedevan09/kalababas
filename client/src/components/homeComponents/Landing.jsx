import Image from 'next/image'
import LandingResponsiveImage from './LandingResponsiveImage'
import Link from 'next/link'

const Landing = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden w-screen md:min-h-screen min-h-[760px]">
      <div className="blur-new left-0 z-10"></div>
      <div className="blur-new right-0"></div>
      <div className="blur-new left-[40%] bottom-0"></div>
      <div className="blur-new right-[40%] top-0"></div>
      <LandingResponsiveImage />
      <div className="absolute md:my-0 my-[3rem] md:mt-0 mt-[5rem] md:flex grid md:justify-around justify-center items-center xl:mx-[8rem] lg:mx-[5rem] sm:mx-[2rem] mx-[1.20rem] md:top-[auto] top-0">
        <div className="text-white grid xl:gap-5 gap-2 md:text-left text-center md:w-[60%] w-full">
          <div className="white font-semibold gradient-text-primary xl:text-3xl lg:text-2xl sm:text-xl text-md">
            Invest Smart, Trade Bold: Your Partner in Crypto Excellence
          </div>

          <div
            className="xl:text-7xl lg:text-5xl text-4xl font-bold gradient-text
          "
          >
            Top Crypto Service Provider {new Date().getFullYear()}
          </div>

          <div className="xl:text-3xl lg:text-xl md:text-md text-sm text-gray-200 gradient-text-secondary">
            Welcome to KalababaS Crypto World! Since 2018, we&comma;ve been
            immersed in the dynamic cryptocurrency market. Now, we&comma;re
            thrilled to share our expertise with you. At kalababas.com,
            we&comma;re a community on Telegram offering accurate crypto signals
            for learning and earning. Join us to explore the world of
            cryptocurrencies together and seize opportunities with confidence.
          </div>
          <Link
            href={'https://t.me/+XnWElDg4m_k1ODg9'}
            target="_blank"
            className="btn text-black hover:text-white hover:bg-[#00000000] text-[18px] xl:text-[22px] font-bold block lg:w-64 w-[13rem] btn-bg bg-white transition-all duration-200 px-4 py-2 tracking-wide rounded-md bg-gradient-primary text-center md:mx-0 mx-auto md:mt-0 mt-3 border-blue-400 border"
          >
            JOIN OUR FREE GROUP
          </Link>
        </div>
        <div className="md:max-w-[40%] max-w-[400px] text-center flex justify-center items-center md:mt-0 mt-[2rem] md:mx-0 mx-auto ">
          <Image
            src={'/images/crypto.png'}
            width={500}
            height={500}
            quality={100}
            alt="landing"
            className="md:mx-0 mx-[10px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Landing
