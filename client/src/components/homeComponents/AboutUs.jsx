import Image from 'next/image'
import Title from '../Title'

const AboutUs = () => {
  return (
    <div className="md:my-[4rem] my-[2rem] grid justify-center items-center relative">
      <div className="blur-new left-0"></div>
      <div className="blur-new right-0"></div>
      <div className="blur-new left-[40%] bottom-0"></div>
      <div className="blur-new right-[40%] top-0"></div>
      <Title title={'ABOUT US'} />
      <div className="md:flex grid md:justify-around justify-center items-start xl:mx-[8rem] lg:mx-[5rem] sm:mx-[2rem] mx-[1.20rem] gap-10">
        <div className="md:w-1/2 w-full text-center flex justify-center items-center md:mt-0 mt-[2rem] bg-[#00000047] backdrop-blur-lg md:order-1 order-2">
          <Image
            src={'/images/newLogo.png'}
            width={500}
            height={500}
            quality={100}
            alt="newLogo"
            className=""
          />
        </div>
        <div className="text-white grid xl:gap-5 gap-2 md:text-left text-center md:w-1/2 w-full md:order-2 order-1">
          <div className="white font-semibold gradient-text-primary xl:text-4xl lg:text-3xl text-2xl">
            KalababaS Crypto World
          </div>

          <div
            className="xl:text-7xl lg:text-5xl text-4xl font-bold gradient-text
          "
          >
            Best Crypto Trading Platforms: Unveiling the Ultimate Choices{' '}
            {new Date().getFullYear()}
          </div>

          <div className="xl:text-3xl lg:text-xl text-md gradient-text-secondary md:text-justify text-center md:mx-0 mx-[1.20rem]">
            Our trading signals have been consistently profitable, which means
            that they have been successful in the past. Whether you are an
            experienced trader or new to the world of trading, joining our
            channel offers you more than just the chance to earn substantial
            profits. It is also a pathway to honing and perfecting your trading
            skills, no matter where you are on your trading journey. We welcome
            you to join our community and explore the world of cryptocurrencies
            with us!
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
