import React from 'react';

function About() {
  return (
    <section className="flex  w-100 gap-6  about_me  justify-center">
        <div className="about_image shadow img-fluid">

        </div>
        <div className="about_myself justify-center flex flex-col gap-2">
          <span className="text-xs text-blue-700">About Me</span>
          <h4 className="text-3xl text-[#3C4858] font-bold">Better Design</h4>
          <h4 className="text-3xl text-[#3C4858] font-bold">Better Experience</h4>
          <p className="text-lg text-[#8492A6] font-light leading-normal">
            Obviously Im a Web Designer. Experienced with all stages of the
            development cycle for dynamic web projects.
          </p>
          <div className=" flex flex-col gap-2 skills">
            <div className="skill_name">
              <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-[#FFCE17] ">
                  HTML
                </span>
                <span className="text-sm font-medium text-[#FFCE17]">
                  95%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-[#FFCE17] h-2.5 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>
            <div className="skill_name">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-[#7CEAD5] ">
                  CSS
                </span>
                <span className="text-sm font-medium text-[#7CEAD5]">
                  85%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-[#7CEAD5] h-2.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
            <div className="skill_name">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-[#2F6AA4] ">
                  JavaScript
                </span>
                <span className="text-sm font-medium text-[#2F6AA4]">
                  75%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-[#2F6AA4] h-2.5 rounded-full"
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className="skill_name">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-[#9533C8] ">
                 ReactJs
                </span>
                <span className="text-sm font-medium text-[#9533C8]">
                  55%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-[#9533C8] h-2.5 rounded-full"
                  style={{ width: "55%" }}
                ></div>
              </div>
            </div>
            <div className="skill_name">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-red-700 ">
                  NodeJs
                </span>
                <span className="text-sm font-medium text-red-700">
                  35%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-red-600 h-2.5 rounded-full"
                  style={{ width: "35%" }}
                ></div>
              </div>
            </div>
            <div className="skill_name">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-[#5EEC0B] ">
                   SQL
                </span>
                <span className="text-sm font-medium text-[#5EEC0B]">
                  35%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-[#5EEC0B] h-2.5 rounded-full"
                  style={{ width: "35%" }}
                ></div>
              </div>
            </div>
            <div className="skill_name">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-[#FF975E] ">
                 Github
                </span>
                <span className="text-sm font-medium text-[#FF975E]">
                  65%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-[#FF975E] h-2.5 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default About;