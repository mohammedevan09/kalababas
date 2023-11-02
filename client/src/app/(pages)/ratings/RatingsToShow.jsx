'use client'

import Ratings from '@/components/Ratings'
import RatingsCard from '@/components/RatingsCard'
import Title from '@/components/Title'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ResponsivePagination from 'react-responsive-pagination'
import toast from 'react-hot-toast'
import {
  GoogleLoginButton,
  GoogleLogoutButton,
} from '@/components/LoginAndLogoutBtn'
import { createUser } from '@/api/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { setUsers } from '@/store/reducers/userReducer'
import Modal from './RatingModel'
import { jwtDecode } from 'jwt-decode'

const RatingsToShow = ({ data, totalCount }) => {
  const totalPages = Math.ceil(totalCount?.totalData / 12)
  const [currentPage, setCurrentPage] = useState(1)

  const router = useRouter()
  const dispatch = useDispatch()

  const { userInfo } = useSelector((state) => state?.user)

  function handlePageChange(page) {
    setCurrentPage(page)
    router.push(`/ratings?page=${page}`)
  }

  const responseSuccessGoogle = (response) => {
    const decoded = jwtDecode(response?.credential)
    if (!Object.keys(userInfo).length) {
      createUser({
        email: decoded?.email,
        fullName: decoded?.name,
        password: decoded?.exp,
        image: decoded?.picture,
      }).then((data) => {
        dispatch(
          setUsers({
            email: decoded?.email,
            fullName: decoded?.name,
            password: decoded?.exp,
            image: decoded?.picture,
          })
        )
        toast.success('Logged In successfully!')
      })
    }
  }

  const responseFailureGoogle = (response) => {
    console.log(response)
    toast.error('Sorry! Login failed!')
  }

  const onLogoutSuccess = () => {
    dispatch(setUsers({}))
    toast.success('Logged out successfully!')
  }

  return (
    <>
      <div className="md:pt-36 pt-24 grid justify-center items-center relative">
        <div className="blur-new left-0"></div>
        <div className="blur-new right-0"></div>
        <div className="blur-new left-[40%] bottom-0"></div>
        <div className="blur-new right-[40%] top-0"></div>
        <div className="blur-new top-[20%] "></div>
        <div className="blur-new bottom-[20%] "></div>
        <div className="blur-new top-[40%] "></div>
        <div className="blur-new bottom-[40%] "></div>
        <Title title={'All Ratings'} />
        <div className="text-white grid justify-center items-center xl:mx-[8rem] lg:mx-[5rem] sm:mx-[2rem] mx-[12px] border-b py-5 px-4">
          <h1 className="md:text-4xl text-3xl text-center">
            Total Ratings and Reviews!
          </h1>
          <div className="flex justify-center items-start gap-2">
            <Ratings item={totalCount?.averageStar} size={30} />
            <span className="md:text-3xl text-2xl flex gap-3 tracking-wider">
              {totalCount?.averageStar?.toFixed(1)} ( {totalCount?.totalData} )
            </span>
          </div>
          <div className="text-center">
            {!Object.keys(userInfo).length ? (
              <GoogleLoginButton
                responseSuccessGoogle={responseSuccessGoogle}
                responseFailureGoogle={responseFailureGoogle}
              />
            ) : (
              <div className="flex justify-center items-center gap-2">
                <Modal />
                <GoogleLogoutButton logoutSuccess={onLogoutSuccess} />
              </div>
            )}
          </div>
        </div>

        <div className="grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 md:justify-around justify-between items-start xl:mx-[8rem] lg:mx-[5rem] sm:mx-[2rem] mx-[12px] md:gap-10 gap-5">
          {data?.map((item, i) => (
            <RatingsCard item={item} key={i} />
          ))}
        </div>
        <Link
          href={'https://t.me/+XnWElDg4m_k1ODg9'}
          target="_blank"
          className="btn text-black hover:text-white hover:bg-[#00000000] text-[18px] xl:text-[22px] font-bold block lg:w-64 w-[13rem] btn-bg bg-white transition-all duration-200 px-4 py-2 tracking-wide rounded-md bg-gradient-primary text-center mx-auto my-2 md:mt-20 mt-10"
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

export default RatingsToShow
