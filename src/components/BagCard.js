import React from 'react'

// if weight > 


function BagCard({ color, number, shelfLoc, cartLoc, weight }) {

  let weightRating
  let picked = "not-picked"

  if (weight < 30) {
    weightRating = "not-heavy"
  } else {
     weightRating = "heavy"
  }

  return (
    <li className={`bag bag${cartLoc} ${color} ${weightRating} ${picked}`}>
      <div className='shelf-loc'>
        <p>{shelfLoc}</p>
      </div>
      <div className='bag-number'>
        <p>{number}</p>
      </div>
      <div className="weight">
        <p>{weight}lbs</p>
      </div>
    </li>
  )
}

export default BagCard