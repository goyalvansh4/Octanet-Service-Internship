import React from 'react'

const Experince = () => {
  return (
    <section className="experince flex flex-col gap-5 p-5 items-center">
        <div className="expr_head text-center flex flex-col gap-4">
          <h4 className="text-3xl font-bold">Work Experience</h4>
          <p className="text-md font-normal leading-relaxed">Obviously Im a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.</p>
        </div>
        <div className="my_experince my-10 flex flex-col gap-7">
        <div className="exp_company flex justify-center gap-9">
          <div className="comp_detail flex flex-col items-end gap-3">
            <img src="./shree-logo.webp" width={"48px"} alt="" />
            <h3 className="text-xl text-[#3c4858] font-semibold">Self Employed</h3>
            <p className="text-sm text-[#8492a6]">March/2024-Current</p>
          </div>
          <div className="empty"><div className="middle"><span></span></div></div>
          <div className="my_role flex flex-col gap-3 ">
            <h4 className="text-lg text-[#3c4858] font-semibold">MERN Developer</h4>
            <p className="text-sm text-[#8492a6]">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
          </div>
        </div>
        <div className="exp_company flex justify-center gap-9">
          <div className="comp_detail  flex flex-col items-end gap-3">
          <h4 className="text-lg text-[#3c4858] font-semibold">Frontend Developer</h4>
            <p className="text-sm text-[#8492a6] text-right">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
          </div>
          <div className="empty"><div className="middle"><span></span></div></div>
          <div className="my_role flex flex-col gap-3 ">
            <img src="./WSA-Logo2.webp" width={"48px"} alt="" />
            <h3 className="text-xl text-[#3c4858] font-semibold">Intern</h3>
            <p className="text-sm text-[#8492a6]">Jan/2024-Mar/2024</p>
          </div>
        </div>
        <div className="exp_company flex justify-center gap-9">
          <div className="comp_detail flex flex-col items-end gap-3">
            <img src="./download.png" width={"48px"} alt="" />
            <h3 className="text-xl text-[#3c4858] font-semibold">Web Designer Intern</h3>
            <p className="text-sm text-[#8492a6]">Nov/2023-Dec/2023</p>
          </div>
          <div className="empty"><div className="middle"><span></span></div></div>
          <div className="my_role flex flex-col gap-3 ">
            <h4 className="text-lg text-[#3c4858] font-semibold">UX / UI Designer</h4>
            <p className="text-sm text-[#8492a6]">The generated injected humour, or non-characteristic words etc. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,</p>
          </div>
        </div>
        
        </div>
      </section>
  )
}

export default Experince;