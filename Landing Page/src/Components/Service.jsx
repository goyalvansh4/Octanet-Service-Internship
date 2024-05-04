import React from 'react'
import Card from './Card';
import { MdOutlineDesktopMac,MdOutlineSettings,MdOutlineChatBubbleOutline } from "react-icons/md";
import { RiCodeBoxLine } from "react-icons/ri";
import { SiAppium,SiTaichigraphics } from "react-icons/si";
export const Service = () => {
  const cards=[
    {
      title:"UX / UI Design",
      icon:< MdOutlineDesktopMac/>
    },
    {
      title:"Web Designer",
      icon:<RiCodeBoxLine />
    },
    {
      title:"Web Devlopment",
      icon:<SiAppium />
    },
    {
      title:"Graphic Designer",
      icon:<SiTaichigraphics />
    },
    {
      title:"Web Security",
      icon:<MdOutlineSettings />

    },
    {
      title:"24/7 Support",
      icon:<MdOutlineChatBubbleOutline />

    },
  ]
  return (
  <section className="services flex flex-col gap-7 justify-center p-5 bg-[#f8f9fc]">
    <div className="about_serv flex flex-col gap-2 ">
    <h3 className="text-3xl font-bold">What do i offer ?</h3>
    <p className="text-md font-normal leading-relaxed">Obviously Im a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
    </div>
    <div className="cards_container justify-center flex-wrap flex gap-4">
     {cards.map((item)=>{
      return <Card title={item.title} icon={item.icon}/>
     })}
    </div>
    

  </section>
  )
}

export default Service;
