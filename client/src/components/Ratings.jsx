'use client'

import Rating from 'react-rating'
import { BsStarFill, BsStar } from 'react-icons/bs'

const Ratings = ({ item, color, size }) => {
  return (
    <div className="text-center">
      <Rating
        initialRating={item?.toString()}
        readonly
        emptySymbol={
          <BsStar
            className="ratings-important"
            size={size || 25}
            color={color || 'white'}
          />
        }
        fullSymbol={
          <BsStarFill
            className="ratings-important"
            size={size || 25}
            color={color || 'white'}
          />
        }
      />
    </div>
  )
}

export default Ratings
