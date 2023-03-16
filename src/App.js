import { useState } from 'react';
import Header from './components/Header/Header';
import Promo from "./components/Promo/Promo";
import FoodList from './components/FoodList/FoodList';
import CardContextProvider from './store/CardContextProvider';

import './App.css';
import Cart from './components/Cart/Cart';

const App = () => {

  const [cartIsVisible, setCartIsVisible] = useState(false)

  return (
    <CardContextProvider>
      {cartIsVisible && <Cart setCartIsVisible={setCartIsVisible} />}
      <Header setCartIsVisible={setCartIsVisible} />
      <div className='main'>
        <Promo />
        <FoodList />
      </div>
    </CardContextProvider>
  );
}

export default App;
