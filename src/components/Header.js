import React from "react"
import { useState } from "react";

export default function Header( {bagsState} ) {
  
  
  const [directorStage, setDirectorStage] = useState(0)
  const [currentBag, setCurrentBag] = useState(1)

 

  function handleScan(e) {
    e.preventDefault()
    // const cartNumber = bagsState.cartNumber
    switch(directorStage) {
      case 0:
        // let bag = document.getElementsByClassName(`bag${currentBag}`)
        // let currentBagNumber = bagsState.bagList[0].bagNumber
        // bag[0].classList.remove('not-picked')
        // bag[0].classList.add('picked')
        // setCurrentBag(currentBag+1)
        document.querySelector("#root > div > div.director > p").innerHTML = `Place bag ${currentBag.bagNumber} on cart as shown and scan cart`
        setDirectorStage(directorStage + 1)
        break;
      case 1:
        

    }
  }




  return (
    <div className='header'>
      <a href="home">New Pick App</a>
      <a href="http://antgbad.com">About</a>
      {/* <span> */}
        <button onClick={handleScan}>Scan!</button>
      {/* </span> */}
    </div>
  )
}
