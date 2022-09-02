import './App.css';
import { pickList } from './data/tempPickList';
import BagCard from './components/BagCard'
import Header from './components/Header';
import Director from './components/Director';

function App() {
  const bags = pickList[0].bagList

 
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
    <div className='app'>
      <Header />
      <Director />
      <ul className='bag-container'>
        {bagsItem}
      </ul>
    </div>

  );
}

export default App;
