import "./App.css";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/NavBar";
import Offers from "./components/Offers";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Offers/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
