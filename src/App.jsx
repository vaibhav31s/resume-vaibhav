import { useState } from "react";
import "./App.scss";
import Contact from "./Components/contact/Contact";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testinomials from "./Components/Testinomials/Testinomials";
import Topbar from "./Components/topBar/Topbar";
import Works from "./Components/works/Works";
import Menu from "./Components/menu/Menu";
function App() {
  const [menuOpen,setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}  />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} ></Menu>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testinomials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
