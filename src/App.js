import './App.css';
import CakeComponent from './components/CakeComponent';
import CakeContainer from './containers/CakeContainer'
import CakeForm from './components/CakeForm';

function App() {
  return (
    <>
      <h1>BNTA Bakery</h1>
      <main>
      <CakeContainer/>
      <CakeForm/>
      </main>
    </>
  );
}

export default App;
