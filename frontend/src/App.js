import './App.css';
import Navbar from './Components/Navbar';
import Model from './Components/Model'
import Context from './Global/Context'
import Stories from './Components/Stories';
import Create from './Components/Create';
import Posts from './Components/Posts';

function App() {
  return (
    <Context>
      <Navbar/>
      <div className="container">
        <Stories/>
        <Create/>
        <Posts/>
      </div>
      <Model/>
    </Context>
  );
}

export default App;
