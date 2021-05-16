import './App.css';
import Navbar from './Components/Navbar';
import Model from './Components/Model'
import Context from './Global/Context'

function App() {
  return (
    <Context>
      <Navbar/>
      <Model/>
    </Context>
  );
}

export default App;
