import React from 'react';
import { MdOutlineDesktopMac } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

const Cards = ({title}) => {
  return (
    <div className="cards flex flex-col py-6 justify-center rounded-xl bg-white">
      <div className="logo_img p-5">
      < MdOutlineDesktopMac className="text-3xl text-[#2a52c3] bg-white" />
      </div>
      <div className="service_content flex flex-col gap-2 px-5 py-2">
        <div className="title">
          <h5 className="text-2xl font-bold">{title}</h5>
        </div>
        <p className="text-lg text-[#8492a6]">The phrasal sequence of the Lorem Ipsum text is now so that many DTP programmes can generate</p>
        <div className="navigate flex items-center gap-1">
        <a className="text-[#2a52c3]">Read More  </a>
        <FaLongArrowAltRight className="text-[#2a52c3]" />
        </div>
      </div>
    </div>
  )
}

export default Cards;