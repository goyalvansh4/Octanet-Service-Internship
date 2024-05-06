import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { FaGithub,FaInstagramSquare,FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  const [show,setShow] =useState(false);
  const handleClick=()=>{
    setShow(prevState => !prevState);
  }
  return (
    <nav className='w-100 flex py-5 h-18 items-center  justify-around'>
        <div className="logo">
          <h2 className='text-2xl uppercase'> &lt; Portfolio /&gt;</h2>
        </div>
        <ul className={`${(show) && "list"} flex  max-[750px]:hidden gap-x-7 items-center uppercase`}>
          <li className='list-none '>
            <NavLink  to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" >About</NavLink>
          </li>
          <li>
            <NavLink to="/experince" >Experince</NavLink>
          </li>
          <li>
            <NavLink to="/work" >Works</NavLink>
          </li>
          <li>
            <NavLink  to="/contact">Contact</NavLink>
          </li>
          <div className="icons flex gap-2 text-2xl">
           <Link to="https://github.com/goyalvansh4" target="_blank" ><FaGithub  className='bg-[#ffffff] hover:text-gray-800 text-blue-900'/></Link>
           <Link to="https://www.instagram.com/guptavansh_11/" target="_blank"><FaInstagramSquare  className='bg-[#ffffff] hover:text-gray-800 text-blue-900'/></Link>
           <Link to="https://www.linkedin.com/in/vansh-gupta-b220961b7/" target="_blank"><FaLinkedin className='bg-[#ffffff] hover:text-gray-800 text-blue-900'/></Link>
          </div>
        </ul>
        <button className={`menu show text-xl`} onClick={handleClick} style={{display:"none"}}>{(show) ? <RxCross1 />  : <IoMenu/> }</button>
      </nav>
  )
};


export default Navbar;