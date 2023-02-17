import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Burguers from "./components/Burguers/Burguers";
import About from "./components/About/About";
import Contact from "./components/Contato/Contact";
import Footer from './components/Footer/Footer';

function App() {
  const [showNavbar, setShowNavbar] = useState(false)
  const handleShowNavbar = () => setShowNavbar(!showNavbar)

  const hideNav = () => {
    if (showNavbar) {
      setShowNavbar(false)
    }
  }

  return (
    <div className="App">
      <header>
        <Header
        showNavbar={showNavbar}
        handleShowNavbar={handleShowNavbar}
        hideNav={hideNav}
        />
      </header>
      <main onClick={hideNav}>
        <Intro/>
        <Burguers/>
        <About/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;
