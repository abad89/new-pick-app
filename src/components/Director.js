export default function Director( {bagsState} ) {


// console.log("director", bagsState)
console.log(bagsState)

  return (Object.keys(bagsState).length === 0)?undefined:(
    <div className="director">
      <p>Scan bag {bagsState.bagList[0].bagNumber}</p>
    </div>
  )
}
