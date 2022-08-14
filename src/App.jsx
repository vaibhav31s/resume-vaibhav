import "./App.scss";
import Contact from "./Components/contact/Contact";
import Intro from "./Components/intro/Intro";
import Portfolio from "./Components/Portfolio/Portfolio";
import Testinomials from "./Components/Testinomials/Testinomials";
import Topbar from "./Components/topBar/Topbar";
import Works from "./Components/works/Works";

function App() {
  return (
    <div className="app">
      <Topbar />
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
