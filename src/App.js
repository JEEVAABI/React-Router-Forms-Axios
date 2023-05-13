import {BrowserRouter as Router,Link,Routes,Route } from "react-router-dom";
import './App.css';

import CV from "./components/CvCompoenent/CV";
import Calcula from "./components/CalculatorComponents/calcula";
import Getcomponent from "./components/GetComponents/Getcomponent";
import ServicePage from "./components/ServiceComponent/ServicePage";
import ContactPage from "./components/ContactComponent/ContactPage";
import AboutPage from "./components/AboutComponent/AboutPage";
import HomePage from "./components/HomeComponent/HomePage";
import LoginPage from "./components/LoginComponent/LoginPage";

function App() {
  return (
    <Router>
    <div className="App">
      
          <Link to="/cv">Portfolio</Link>
          <Link to="/calcula">Calculator</Link>
          <Link to="/GetCom">Rick&Morty</Link>
          <Link to="/servicePage">servicePage</Link>
          <Link to="/contactPage">contactUsPage</Link>
          <Link to="/aboutPage">AboutUsPage</Link>
          <Link to="/homePage">HomePage</Link>
          <Link to="/loginPage">LoginPage</Link>

        

      <Routes>

        <Route exact path='/cv' element={<CV/>}></Route>
        <Route exact path='/calcula' element={<Calcula/>}></Route>
        <Route exact path='/GetCom' element={<Getcomponent/>}></Route>
        <Route exact path='/servicePage' element={<ServicePage/>}></Route>
        <Route exact path ='/contactPage' element={<ContactPage/>}></Route>
        <Route exact path ='/aboutPage' element={<AboutPage/>}></Route>
        <Route exact path='/homePage' element={<HomePage/>}></Route>
        <Route exact path='/loginPage' element={<LoginPage/>}></Route>
        
      </Routes>
    </div>
    </Router>
  );
}

export default App;



    
