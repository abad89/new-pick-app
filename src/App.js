import { useState } from "react";
import './App.css';
import { new_picklist } from './data/dynamicPickList';
import BagCard from './components/BagCard'
import Header from './components/Header';
import Director from './components/Director';

function App() {
  const [bagsState, setBagsState] = useState(new_picklist)
  // console.log("app.js line 10", bagsState)
  // console.log("app.js", bagsState)
  const bags = bagsState.bagList
 
  const bagsItem = bags?.map((bag) => (
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
      <Header bagsState={bagsState}/>
      <Director bagsState={bagsState} />
      <ul className='bag-container'>
        {bagsItem}
      </ul>
    </div>

  );
}

export default App;
