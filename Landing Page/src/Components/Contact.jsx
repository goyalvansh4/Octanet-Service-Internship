import React from 'react'
import Form from './Form';
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail,MdOutlineLocationOn } from "react-icons/md";
import Details from './Details';

const Contact = () => {
  return (
    <section  className="contact_container flex flex-col gap-12 items-center">
       <div className="contact_head flex flex-col gap-5 "> 
    <h3 className="text-3xl font-bold text-center">Get In Touch!</h3>
    <p className="text-md font-normal leading-relaxed">Obviously Im a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
    </div>
        <div className="contact_me flex gap-12 justify-center">
          <div className="form">
            <Form />
          </div>
          <div className="contact_details flex flex-col gap-9">
             <Details title={"Phone"} data={7668435747} icon={<LuPhoneCall className="text-xl   text-blue-700"/>} />
             <Details title={"Email"} data={"vanshgupta7668@gmail.com"} icon={<MdOutlineEmail className="text-xl   text-blue-700"/>} />
             <Details title={"Location"} data={"View on Google Map"} icon={<MdOutlineLocationOn className="text-xl   text-blue-700"/>} para={"Saharanpur,Uttar Pradesh,India,247001"} />
          </div>
        </div>
       </section>
  )
}

export default Contact;