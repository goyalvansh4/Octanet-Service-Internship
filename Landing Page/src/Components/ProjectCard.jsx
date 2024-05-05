import React from 'react';
import { FiCamera } from "react-icons/fi";
const ProjectCard = ({title,src,desc,link}) => {
  return (
  <div className='project_crd flex flex-col gap-4'>
    <div className="pjt_img rounded-lg">
      <span className='overlay'>
        
        <a target='_blank' href={link}><FiCamera/></a>
        </span>
      <img className='rounded-lg' src={src} alt="" />
    </div>
    <div className="prt_content flex flex-col gap-6">
      <h4 className='text-xl font-semibold'>{title}</h4>
      <p className='capitalize text-sm font-extralight leading-7'>{desc}</p>
     
    </div>
  </div>
  )
}

export default ProjectCard;