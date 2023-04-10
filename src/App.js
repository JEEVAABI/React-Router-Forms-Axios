import {BrowserRouter as Router,Link,Routes,Route } from "react-router-dom";
import './App.css';
import CV from "./components/CvCompoenent/CV";
import Calcula from "./components/CalculatorComponent/Calcula";
import GetComponent from "./components/GetComponent/GetComponent";

function App() {
  return (
    <Router>
    <div className="App">
      
          <Link to="/cv">Portfolio</Link>
          <Link to="/calcula">Calculator</Link>
          <Link to="/GetCom>">Rick&Morty</Link>
        

      <Routes>
        <Route exact path='/cv' element={<CV/>}></Route>
        <Route exact path='/calcula' element={<Calcula/>}></Route>
        <Route exact path='/GetCom' element={<GetComponent/>}></Route>

        
      </Routes>
    </div>
    </Router>
  );
}

export default App;



    
