import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
 
  const projects=[
    { 
      src:"./Project2.png",
      title:"Shopping Cart",
      desc:"Buy Your Favourite Dessert",
      link:"https://goyalvansh4.github.io/Shopping-Cart/",
    },
    { 
      src:"./Project8.png",
      title:"Veggie King",
      desc:"A Resturant Website",
      link:"https://goyalvansh4.github.io/Veggie_King/",
    },
    { 
      src:"./Project3.png",
      title:"Authentication System",
      desc:"Login,SignUp,Update Profile Pic",
      link:"https://goyalvansh4.github.io/-Web-App-Authentication/",
    },
    { 
      src:"./Project1 (1).png",
      title:"Random Quote Generator",
      desc:"Generate random quote using an API",
      link:"https://goyalvansh4.github.io/Random-Quote-Generator-Using-React/",
    },
    { 
      src:"./Project4.png",
      title:"Readme.Md File Generator",
      desc:"write in editor and see live preview",
      link:"https://master--bucolic-sable-07da3d.netlify.app/",
    },
    { 
      src:"./Project5.png",
      title:"A Blog App",
      desc:"Write an blog,upload image,and many more...",
      link:"https://myblogproject22.netlify.app/",
    },
    { 
      src:"./Project6.png",
      title:"Sorting Visualizer",
      desc:"See live sorting on elements",
      link:"https://goyalvansh4.github.io/Sorting-Visualizer/",
    },
    { 
      src:"./Project7.png",
      title:"Todo List App",
      desc:"Add task,remove task,mark as complete,etc",
      link:"https://goyalvansh4.github.io/Todo-App/",
    }
  ]

  return (
    <section className="projects flex flex-col gap-7 items-center justify-center bg-[#f8f9fc]">
    <div className="project_head flex flex-col gap-5 "> 
    <h3 className="text-3xl font-bold">My Projects</h3>
    <p className="text-md font-normal leading-relaxed">Obviously Im a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
    </div>
    <div className="project_desc flex flex-wrap justify-center rounded-lg gap-x-5 gap-y-9 p-6">
      {projects.map((project)=>{
        return <ProjectCard title={project.title} src={project.src} desc={project.desc} link={project.link}/>
      })}
    </div>
  </section>
  )
}

export default Projects