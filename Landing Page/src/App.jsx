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
      <section className="experince flex flex-col gap-5 p-5 items-center">
        <div className="expr_head text-center flex flex-col gap-4">
          <h4 className="text-3xl font-bold">Work Experience</h4>
          <p className="text-md font-normal leading-relaxed">Obviously Im a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
        </div>
        <div className="exp_company flex justify-center">
          <div className="comp_detail flex flex-col items-end gap-3">
            <img src="./shree-logo.webp" width={"48px"} alt="" />
            <h3 className="text-xl text-[#3c4858] font-semibold">Self Employed</h3>
            <p className="text-sm text-[#8492a6]">March/2024-Current</p>
          </div>
          <div className="empty"></div>
          <div className="my_role flex flex-col gap-3 ">
            <h4 className="text-lg text-[#3c4858] font-semibold">UX / UI Designer</h4>
            <p className="text-sm text-[#8492a6]">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
