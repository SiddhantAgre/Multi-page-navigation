import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Header from "./components/Header";

function App() {
  return ( <div>
    {/* <h1 className="text-white">Siddhant</h1> */}
    <Header/>
    <Routes>
    <Route path="/home" element = { <Home/> }/>
    <Route path="/about" element = { <About/> }/>
    <Route path="/contact" element = { <Contact/> }/>
    <Route path="/product" element = { <Product/> }/>
    </Routes>
  </div> );
}

export default App;