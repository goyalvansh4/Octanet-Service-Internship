import { useEffect, useState } from "react";

const Header = ()=>{
  const [isGupta, setIsGupta] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsGupta(prevIsGupta => !prevIsGupta);
    }, 2000); // Toggle between "Gupta" and "Developer" every 4 seconds

    return () => clearInterval(intervalId);
  }, []);
   
  return(
  <header className='w-100 flex justify-center '>
      <div className="hero_content gap-5 absolute flex flex-col justify-center p-2">
            <h3 className='text-lg font-bold'>Im Professional Frontend Developer</h3>
            <h4 className='text-base leading-8 font-light'>Obviously Im a Web Designer.<br/> Web Developer and Designer with over 1 years of experience.</h4>
            <button className="btn btn-primary">Hire Me</button>
        </div>
        {/* <div className="bg-img-color flex justify-center items-center"></div> */}
       <div className="container flex items-end justify-center p-2 gap-x-2.5"  >
           
      <div className="bg-img">
             {/* <img className='w-100 object-cover' src="https://i.pinimg.com/736x/7e/c7/0d/7ec70d2eeb224de2f13815b018b213de.jpg" alt="bg-img" /> */}
      </div>
      </div>
      <div className="name flex flex-col gap-2 justify-center">
            <h2 className={` text-6xl font-bold text-[#3C4858] (isGupta) ? "gupta-animation" : "developer-animation"`} > {isGupta ? "Vansh" : "Frontend"}</h2>
            <span className={` text-6xl font-bold text-[#3C4858] (isGupta) ? "gupta-animation" : "developer-animation"`} > {isGupta ? "Gupta" : "Developer"}</span>
           </div>
      </header>
  )
}

export default Header;