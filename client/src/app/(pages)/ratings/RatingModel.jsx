'use client'

import { createRatings, getOneRatings } from '@/api/ratingsApi'
import GiveRatings from '@/app/(pages)/ratings/GiveRatings'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { AiOutlineClose } from 'react-icons/ai'
import { useSelector } from 'react-redux'

export default function Modal() {
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState(null)

  const { userInfo } = useSelector((state) => state?.user)

  useEffect(() => {
    async function findRatings() {
      const result = await getOneRatings(userInfo?.email)
      if (result) {
        setData(result)
      }
    }
    findRatings()
  }, [userInfo])

  const [value, setValue] = useState(data ? data?.comment : '')
  const [star, setStar] = useState(data ? data?.star?.toString() : '0')

  //   console.log(data, userInfo?.email)

  const handleSubmit = () => {
    if (value?.length > 110) {
      return toast.error('Review length must be under 110!')
    }
    createRatings({
      comment: value,
      image: userInfo?.image,
      email: userInfo?.email,
      star: Number(star),
      fullName: userInfo?.fullName,
    }).then(() => {
      toast.success(
        data
          ? 'The ratings has been updated! Refresh to see!'
          : 'Thanks for ratings! Refresh to see!'
      )
    })
    setShowModal(false)
  }

  return (
    <div>
      <button
        className="btn text-black hover:text-white hover:bg-[#00000000] text-[18px] xl:text-[22px] font-bold block btn-bg bg-white transition-all duration-200 px-4 py-2 tracking-wide rounded-md bg-gradient-primary text-center cursor-pointer"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {data ? 'Edit Rating!' : 'Give Rating!'}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-black outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Give 5 Star Ratings
                  </h3>
                  <button className="" onClick={() => setShowModal(false)}>
                    <AiOutlineClose size={28} color="white" />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <GiveRatings
                    star={star}
                    setStar={setStar}
                    value={value}
                    setValue={setValue}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b gap-2">
                  <button
                    className="bg-white text-black active:bg-gray-200 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-white text-black active:bg-gray-200 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={handleSubmit}
                  >
                    {data ? 'Edit Changes' : 'Save Changes'}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  )
}
