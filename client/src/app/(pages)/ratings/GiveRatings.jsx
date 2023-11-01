'use client'

import { useState } from 'react'
import { BsStar, BsStarFill } from 'react-icons/bs'
import Rating from 'react-rating'

const GiveRatings = ({ color, size, star, setStar, value, setValue }) => {
  const handleRatingChange = (e) => {
    setStar(e)
  }

  return (
    <div className="grid gap-4 items-start justify-start mt-3">
      <input
        className="bg-black border text-lg text-white p-4 outline-none w-[350px] tracking-wider"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Write A Review!"
      />
      <span className="text-gray-300 text-left tracking-wider">
        Note: Maximum length in 110 letters!
      </span>
      <div className="flex justify-start items-end gap-2">
        <Rating
          initialRating={star}
          onChange={handleRatingChange}
          emptySymbol={
            <BsStar
              className="ratings-important"
              color={color || 'white'}
              size={size || 25}
            />
          }
          fullSymbol={
            <BsStarFill
              className="ratings-important"
              color={color || 'white'}
              size={size || 25}
            />
          }
        />
        <span className="text-lg pb-[1px] text-pink-300">{star} Star</span>
      </div>
    </div>
  )
}

export default GiveRatings
