'use client'

import ResultsCart from '@/components/ResultsCart'
import Title from '@/components/Title'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination'

const ResultShow = ({ data, totalCount }) => {
  const totalPages = Math.ceil(totalCount / 12)
  const [currentPage, setCurrentPage] = useState(1)

  const router = useRouter()

  function handlePageChange(page) {
    setCurrentPage(page)
    router.push(`/results?page=${page}`)
  }

  return (
    <>
      <div className="md:pt-44 pt-24 grid justify-center items-center relative">
        <div className="blur-new left-0"></div>
        <div className="blur-new right-0"></div>
        <div className="blur-new left-[40%] bottom-0"></div>
        <div className="blur-new right-[40%] top-0"></div>
        <div className="blur-new top-[20%] "></div>
        <div className="blur-new bottom-[20%] "></div>
        <div className="blur-new top-[40%] "></div>
        <div className="blur-new bottom-[40%] "></div>
        <Title title={'Our Results'} />
        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 md:justify-around justify-between items-start xl:mx-[8rem] lg:mx-[5rem] sm:mx-[2rem] mx-[12px] md:gap-10 gap-5">
          {' '}
          {data?.map((item, i) => (
            <ResultsCart item={item} key={i} />
          ))}
        </div>
        <Link
          href={'https://t.me/+XnWElDg4m_k1ODg9'}
          target="_blank"
          className="btn text-black hover:text-white hover:bg-[#00000000] text-[18px] xl:text-[22px] font-bold block lg:w-64 w-[13rem] btn-bg bg-white transition-all duration-200 px-4 py-2 tracking-wide rounded-md bg-gradient-primary text-center mx-auto my-2"
        >
          JOIN OUR FREE GROUP
        </Link>
        <div className="py-10 xl:mx-[7rem] lg:mx-[4rem] sm:mx-[1rem] mx-[8px]">
          <ResponsivePagination
            total={totalPages}
            current={currentPage}
            onPageChange={(page) => handlePageChange(page)}
          />
        </div>
      </div>
    </>
  )
}

export default ResultShow
