'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Rubik } from 'next/font/google'

const rubik = Rubik({ subsets: ['latin'] })

const ResultsCart = ({ item }) => {
  const router = useRouter()

  const date = new Date(item?.updatedAt)
  const options = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }

  const formattedDate = date.toLocaleDateString(undefined, options)

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

  const [iconSize, setIconSize] = useState(0)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIconSize(5)
      } else {
        setIconSize(0)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className={`2xl:w-96 sm:w-72 w-[10.5rem] bg-base-100 shadow-xl mx-auto rounded-none mt-[10px] text-white ${rubik.className}`}
    >
      <figure className="w-full cursor-pointer">
        <Image
          src={item?.image[0]?.url}
          alt="category"
          width={1000}
          height={1000}
          quality={100}
          className="sm:h-72 h-44 w-full object-cover"
          onClick={() => router.push(`/results/${item?._id}`)}
        />
      </figure>
      <div className="px-2 py-5">
        <div className="flex justify-start gap-4 items-center mb-3">
          <h2 className="sm:text-md text-xs text-gray-400">{formattedDate}</h2>
          <div
            className={`sm:mb-0 mb-1 sm:text-md text-xs rounded-3xl px-3 ${
              isNewBlog(item?.createdAt)
                ? 'bg-fuchsia-600 border-none'
                : 'bg-black'
            }`}
          >
            {isNewBlog(item?.createdAt)
              ? 'New'
              : `${getDaysAgo(item?.createdAt)} days ago`}
          </div>
        </div>
        <h2 className="break-word 2xl:text-[18px] text-[14px] sm:flex grid mb-2  font-semibold">
          {item?.title?.length >= 28 ? (
            <>{item?.title?.substring(0, 28)}...</>
          ) : (
            <>{item?.title}</>
          )}
        </h2>
        <p className="break-word 2xl:text-[14px] text-[12px] sm:inline-block hidden mb-3 text-gray-300">
          {' '}
          {item?.description?.length >= 95 ? (
            <>{item?.description?.substring(0, 94)}...</>
          ) : (
            <>
              {item?.description + ' '}
              <span
                className="text-[transparent]"
                style={{ userSelect: 'none' }}
              >
                {'0'.repeat(97 - item?.description?.length)}
              </span>
            </>
          )}
        </p>
        <div className="justify-between flex gap-3 w-full">
          <button
            onClick={() => router.push(`/results/${item?._id}`)}
            className="prod-btn-style py-[5px] sm:px-[12px] px-[8px] font-bold disabled:opacity-60 disabled:border-[2px] rounded-sm w-full"
          >
            See Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResultsCart
