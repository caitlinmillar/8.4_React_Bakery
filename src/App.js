import './App.css';
import CakeContainer from './containers/CakeContainer'
import Cakes from './components/Cakes';
import CakeComponent from './components/CakeComponent';


function App() {
  return (
    <>
      <h1>BNTA Bakery</h1>
      <CakeContainer/>
      <CakeComponent/>
      <Cakes/>
      <cakeName/>
      {CakeComponent.Cakes}

    </>
  );
}

export default App;
