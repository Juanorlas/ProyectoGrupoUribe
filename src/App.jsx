import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Home from "./components/layouts/pages/Home"
import { AmericanEagles } from "./components/layouts/pages/AmericanEagles";
import Chevignon from "./components/layouts/pages/Chevignon";
import Esprit from "./components/layouts/pages/Esprit";
import GstarRaw from "./components/layouts/pages/GstarRaw";
import NavBar from "./components/NavBar";


  function App() {
    
  

  return (
    <div className="bg-slate-500">
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home/>}/>

      <Route path="Americaneagle" element={<AmericanEagles/>}/>

      <Route path="Chevignon" element={<Chevignon/>}/>

      <Route path="Esprit" element={<Esprit/>}/>

      <Route path="Gstarraw" element={<GstarRaw/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;