import "./App.css";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Burguers from "./components/Burguers/Burguers";
import { useState } from "react";

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
      </main>
    </div>
  );
}

export default App;
