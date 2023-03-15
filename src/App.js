import Header from './components/Header/Header';
import Promo from "./components/Promo/Promo";
import FoodList from './components/FoodList/FoodList';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        <Promo />
        <FoodList />
      </div>
    </div>
  );
}

export default App;
