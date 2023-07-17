import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
function App() {
  const [mouseX, setMouseX] = useState();
  const [mouseY, setMouseY] = useState();

  useEffect(() => {
    const cursorHandler = (e) => {
      if (e.pageX + 45 < window.innerWidth) {
        setMouseX(e.pageX);
        setMouseY(e.pageY);
      }
    };
    window.addEventListener("mousemove", cursorHandler);
    return () => {
      window.removeEventListener("mousemove", cursorHandler);
    };
  }, []);
  useEffect(() => {
    AOS.init({
      debounceDelay: 10,
      throttleDelay: 10,
      duration: 1000,
      easing: "ease",
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <Cursor mouseX={mouseX} mouseY={mouseY} />
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
}

export default App;
