import React from 'react'

function BagCard({ color, number, shelfLoc, cartLoc, weight }) {
  return (
    <li className={`bag${cartLoc}`}>
      <p>{shelfLoc}</p>
      <p>{number}</p>
    </li>
  )
}

export default BagCard