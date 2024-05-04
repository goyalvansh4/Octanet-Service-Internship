import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About";
import Service from "./Components/Service";
function App() {
  return (
    <>
      <Navbar />
      <Header />
      <About/>
      <Service/>
    </>
  );
}

export default App;
