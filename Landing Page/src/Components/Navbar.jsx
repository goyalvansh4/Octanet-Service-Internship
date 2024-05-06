import { FaFacebook,FaInstagramSquare,FaLinkedin } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className='w-100 flex py-5 h-18 items-center  justify-around'>
        <div className="logo">
          <h2 className='text-2xl uppercase'>Portfolio</h2>
        </div>
        <ul className='list flex  max-[750px]:hidden gap-x-7 items-center uppercase'>
          <li className='list-none '>
            <a className='no-underline' href="#">Home</a>
          </li>
          <li>
            <a href="#">Feature</a>
          </li>
          <li>
            <a href="#">Experince</a>
          </li>
          <li>
            <a href="#">Works</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <div className="icons flex gap-2 text-2xl">
           <FaFacebook className='bg-[#ffffff] text-blue-900'/>
           <FaInstagramSquare  className='bg-[#ffffff] text-blue-900'/>
           <FaLinkedin className='bg-[#ffffff] text-blue-900'/>
          </div>
        </ul>
      </nav>
  )
};


export default Navbar;