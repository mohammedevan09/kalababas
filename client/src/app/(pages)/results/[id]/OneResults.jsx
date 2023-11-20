import Image from 'next/image'
import Link from 'next/link'
import { BsArrowLeftCircle } from 'react-icons/bs'

const OneResults = ({ results, formattedDate }) => {
  function isNewBlog(createdAt) {
    const currentDate = new Date()
    const blogDate = new Date(createdAt)
    const timeDifference = currentDate - blogDate
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    return daysDifference < 10
  }

  function getDaysAgo(createdAt) {
    const currentDate = new Date()
    const blogDate = new Date(createdAt)
    const timeDifference = currentDate - blogDate
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    return daysDifference
  }

  return (
    <div className="grid items-center text-white justify-center xl:pt-44 pt-24 pb-10 gap-4 xl:mx-[17rem] sm:mx-[4rem] mx-[2rem] relative">
      <div className="blur-new left-0"></div>
      <div className="blur-new right-0"></div>
      <div className="blur-new left-[40%] bottom-0"></div>
      <div className="blur-new right-[40%] top-0"></div>
      <Link
        href={'/results'}
        className="flex justify-start items-center gap-2 sm:text-xl text-lg mb-3"
      >
        <BsArrowLeftCircle size={24} /> Go Back To results
      </Link>
      <div className="md:text-2xl text-[18px] font-semibold">
        {results?.title}
      </div>
      <div className="w-full text-center">
        <Image
          src={
            results?.image[0]?.url ||
            results?.image?.url ||
            '/images/trade1.jpg'
          }
          alt="results"
          width={1400}
          height={1400}
          quality={100}
        />
      </div>
      <div
        className={`flex justify-start gap-4 items-center md:mb-3 mb-1 tracking-wider`}
      >
        <h2 className="md:text-[16px] text-sm text-gray-400">
          {formattedDate}
        </h2>
        <div
          className={`sm:mb-0 mb-1 md:text-[16px] text-sm rounded-3xl px-3 ${
            isNewBlog(results?.createdAt)
              ? 'bg-fuchsia-600 border-none'
              : 'bg-black'
          }`}
        >
          {isNewBlog(results?.createdAt)
            ? 'New'
            : `${getDaysAgo(results?.createdAt)} days ago`}
        </div>
      </div>
      <div className="md:text-xl text-[16px] font-semibold">
        Description
        <hr />
      </div>
      <div className="md:text-xl text-[15px] text-justify text-gray-300">
        {results?.description}
      </div>
      <Link
        href={'https://t.me/+XnWElDg4m_k1ODg9'}
        target="_blank"
        className="gradient-text-2 mt-2 flex mx-auto font-semibold justify-center px-3 py-1"
      >
        JOIN OUR FREE GROUP
      </Link>
    </div>
  )
}

export default OneResults
