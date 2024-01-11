import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import blob1 from "./assets/Vector.png"
import blob2 from "./assets/Vector2.png"
import HeroSection from "./components/HeroSection.jsx";
import Question from "./components/Body.jsx";
import "./App.css";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/Navbar.jsx";
function App() {
  return (
    <>
    <img  className="blob1" src={blob1} alt="" />
    <img  className="blob2" src={blob2} alt="" />
    <Navbar/>
      <HeroSection />
      <Question />
      <Footer />
    </>
  );
}
export default App;
