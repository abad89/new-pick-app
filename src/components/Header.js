import React from "react"
import { useState } from "react";

export default function Header( {bagsState} ) {
  
  
  const [directorStage, setDirectorStage] = useState(0)

  function directorText(text) {
    return document.querySelector("#root > div > div.director > p").innerHTML = `${text}`
  }

 

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
        // document.querySelector("#root > div > div.director > p").innerHTML = `Scan cart`
        directorText("Scan cart")
        setDirectorStage(directorStage + 1)
        break;
      case 1:
        let bag = document.getElementsByClassName('bag1')
        bag[0].classList.remove('not-picked')
        bag[0].classList.add('picked')
        document.querySelector("#root > div > div.director > p").innerHTML = `Scan bag ${bagsState.bagList[1].bagNumber}`
        setDirectorStage(directorStage+1)
        break;
      case 2:
        // document.querySelector("#root > div > div.director > p").innerHTML = `Scan cart`
        directorText("Scan cart")
        setDirectorStage(directorStage + 1)
        break;
      case 3:
        let bag2 = document.getElementsByClassName('bag2')
        bag2[0].classList.remove('not-picked')
        bag2[0].classList.add('picked')
        document.querySelector("#root > div > div.director > p").innerHTML = `Scan bag ${bagsState.bagList[2].bagNumber}`
        setDirectorStage(directorStage+1)
        break;
      case 4:
        // document.querySelector("#root > div > div.director > p").innerHTML = `Scan cart`
        directorText("Scan cart")
        setDirectorStage(directorStage + 1)
        break;
      case 5:
        let bag3 = document.getElementsByClassName('bag3')
        bag3[0].classList.remove('not-picked')
        bag3[0].classList.add('picked')
        document.querySelector("#root > div > div.director > p").innerHTML = `Scan bag ${bagsState.bagList[3].bagNumber}`
        setDirectorStage(directorStage+1)
        break;
      case 6:
        // document.querySelector("#root > div > div.director > p").innerHTML = `Scan cart`
        directorText("Scan cart")
        setDirectorStage(directorStage + 1)
        break;
      case 7:
        let bag4 = document.getElementsByClassName('bag4')
        bag4[0].classList.remove('not-picked')
        bag4[0].classList.add('picked')
        document.querySelector("#root > div > div.director > p").innerHTML = `Scan bag ${bagsState.bagList[4].bagNumber}`
        setDirectorStage(directorStage+1)
        break;
      case 8:
        // document.querySelector("#root > div > div.director > p").innerHTML = `Scan cart`
        directorText("Scan cart")
        setDirectorStage(directorStage + 1)
        break;
      case 9:
        let bag5 = document.getElementsByClassName('bag5')
        bag5[0].classList.remove('not-picked')
        bag5[0].classList.add('picked')
        document.querySelector("#root > div > div.director > p").innerHTML = `Scan bag ${bagsState.bagList[5].bagNumber}`
        setDirectorStage(directorStage+1)
        break;
      case 10:
        // document.querySelector("#root > div > div.director > p").innerHTML = `Scan cart`
        directorText("Scan cart")
        setDirectorStage(directorStage + 1)
        break;
      case 11:
        let bag6 = document.getElementsByClassName('bag6')
        bag6[0].classList.remove('not-picked')
        bag6[0].classList.add('picked')
        document.querySelector("#root > div > div.director > p").innerHTML = `Scan bag ${bagsState.bagList[6].bagNumber}`
        setDirectorStage(directorStage+1)
        break;
      case 12:
        // document.querySelector("#root > div > div.director > p").innerHTML = `Scan cart`
        directorText("Scan cart")
        setDirectorStage(directorStage + 1)
        break;
      case 13:
        let bag7 = document.getElementsByClassName('bag7')
        bag7[0].classList.remove('not-picked')
        bag7[0].classList.add('picked')
        document.querySelector("#root > div > div.director > p").innerHTML = `Scan bag ${bagsState.bagList[7].bagNumber}`
        setDirectorStage(directorStage+1)
        break;
      case 14:
        // document.querySelector("#root > div > div.director > p").innerHTML = `Scan cart`
        directorText("Scan cart")
        setDirectorStage(directorStage + 1)
        break;
      case 15:
        // first tells you to scan last bag
        let bag8 = document.getElementsByClassName('bag8')
        bag8[0].classList.remove('not-picked')
        bag8[0].classList.add('picked')
        document.querySelector("#root > div > div.director > p").innerHTML = `Scan bag ${bagsState.bagList[8].bagNumber}`
        setDirectorStage(directorStage+1)
        console.log("case 15")
        break;
      case 16:
        // just says to scan cart
        // document.querySelector("#root > div > div.director > p").innerHTML = `Scan cart`
        directorText("Scan cart")
        setDirectorStage(directorStage + 1)
        console.log("case 16")
        break;
      case 17:
        // changes last bag to solid and says scan bag 540
        let bag9 = document.getElementsByClassName('bag9')
        bag9[0].classList.remove('not-picked')
        bag9[0].classList.add('picked')
        // we do not need to change the director again
        // document.querySelector("#root > div > div.director > p").innerHTML = `Scan bag ${bagsState.bagList[8].bagNumber}`
        setDirectorStage(directorStage+1)
        console.log("case 17")
        break;
        case 18:
        directorText(`Scan staging location ${bagsState.stagingLoc}`)
        // console.log("case 18")
        setDirectorStage(directorStage+1)
          break;
        case 19:
          directorText("Refresh for new picklist")
          break;
        
        default:
          document.querySelector("#root > div > div.director > p").innerHTML = `Something hase gone wrong.`
          break;
    }
  }




  return (
    <div className='header'>
      <a href="home">New Pick App</a>
      <a href="mailto:anthony@antgbad.com">anthony@antgbad.com</a>
      {/* <span> */}
        <button onClick={handleScan}>Scan!</button>
      {/* </span> */}
    </div>
  )
}
