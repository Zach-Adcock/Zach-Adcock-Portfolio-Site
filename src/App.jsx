import Navbar from "./components/navbar/Navbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import About from "./components/about/About";
import "./app.scss";
import { useState } from "react";


function App() {
  
  const [menuActive, setMenuActive] = useState(false)
  return (
    <div className="app">
      <Navbar menuActive={menuActive} setMenuActive={setMenuActive} />
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
      <div className="sections">
        <Intro />
        <About />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
