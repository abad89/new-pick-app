export default function Header() {

  function handleScan(e) {
    e.preventDefault()
    console.log("scanned!")
    let currentBag = 1
    let bag = document.getElementsByClassName(`bag${currentBag}`)
    bag[0].classList.remove('not-picked')
    bag[0].classList.add('picked')
    currentBag =+ 1
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
