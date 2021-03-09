import { useState } from 'react';
import './App.css';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Header from './components/Header';
import plants from './assets/plants.json';
import Favourites from './components/Favourites';

function App() {

  const [headerTitle, setHeaderTitle] = useState('Plant app');
  const [footerTitle, setFooterTitle] = useState('This is a footer');
  const [favouritePlants, setFavouritePlants] = useState([]);

  const addFavePlant = (plantId) => {
    const plantToAdd = plants.filter(plant => plant.id == plantId);

    setFavouritePlants(favouritePlants.concat(plantToAdd));
  }

  return (
    <div className="App">
      <Header title={headerTitle} />
      <Cards addFavePlant={addFavePlant} plants={plants} />
      <Favourites favPlants={favouritePlants} />
      <Footer title={footerTitle} />
    </div>
  );
}

export default App;
