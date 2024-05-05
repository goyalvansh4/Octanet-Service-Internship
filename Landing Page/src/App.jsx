import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Service from "./Components/Service";
import Experince from "./Components/Experince";
import HireMe from "./Components/HireMe";
import Projects from "./Components/Projects";
function App() {
  return (
    <>
       <Navbar />
       <Header />
       <About />
       <Service />
       <Experince />
       <section className="hire_me"></section>
       <HireMe/>
       <Projects />
    </>
  );
}

export default App;
