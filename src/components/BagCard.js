import React from 'react'

function BagCard({ color, number, shelfLoc, cartLoc, weight }) {
  return (
    <li className={`bag bag${cartLoc} ${color}`}>
      <div className='shelf-loc'>
        <p>{shelfLoc}</p>
      </div>
      <div className='bag-number'>
        <p>{number}</p>
      </div>
    </li>
  )
}

export default BagCard