import { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "../src/components/intro/intro";
import Portfolio from "../src/components/portfolio/portfolio";
import Works from "../src/components/works/works";
import Testimonials from "../src/components/testimonials/testimonials";
import Contact from "./components/contact/contact";
import "./app.scss";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
