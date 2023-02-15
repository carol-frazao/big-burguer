import "./App.css";
import Header from "./components/Header/Header";
import Inicio from "./components/Inicio/Inicio";
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
        <Inicio />
      </main>
    </div>
  );
}

export default App;
