import React from 'react'
import Card from './Card';
export const Service = () => {
  const cards=[
    {
      title:"UX / UI Design"
    },
    {
      title:"Web Designer"
    },
    {
      title:"Web Devlopment"
    },
    {
      title:"Graphic Designer"
    },
    {
      title:"Web Security"
    },
    {
      title:"24/7 Support"
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
      return <Card title={item.title}/>
     })}
    </div>
    

  </section>
  )
}

export default Service;
