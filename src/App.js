import './App.css';
import { pickList } from './data/tempPickList';
import BagCard from './components/BagCard'
function App() {
  const bags = pickList[0].bagList

  // When mapping over the bags array, make sure to sort it by cart location to be in the proper order.
  const bagsItem = bags.map((bag) => (
    <BagCard
      key={bag.bagNumber}
      color={bag.bagColor}
      number={bag.bagNumber}
      shelfLoc={bag.bagShelfLoc}
      cartLoc={bag.bagCartLoc}
      weight={bag.weight}
      />
  ))



  return (
    <div>
      <p>Hello World.app.js</p>
      <ul className='grid-container'>
        {bagsItem}
      </ul>
    </div>

  );
}

export default App;
