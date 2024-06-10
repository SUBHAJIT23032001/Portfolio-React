
import './App.css';
import Header from './Components/Header';
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Certificates from "./Components/Certificate";

function App() {
  return (
    
    <div className="App">
    <Header/>
    <main>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Education" element={<Education />}></Route>
        <Route path="/Skills" element={<Skills />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Certificate" element={<Certificates />}></Route>
      </Routes>
    </main>
    </div>
  );
}

export default App;
