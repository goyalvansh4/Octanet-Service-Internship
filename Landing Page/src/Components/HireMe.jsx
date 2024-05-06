import React from "react";

const HireMe = () => {
  return (
    <section className="bg_transprent flex flex-col justify-center bg-blend-multiply">
      <div className="row py-4">
        <div className="col-12 text-center flex flex-col gap-8">
          <div className="section-title flex flex-col gap-4">
            <h4 className="text-bold text-white leading-normal text-3xl title-dark title mb-2">
              I Am Available For Freelancer Projects.
            </h4>
            <p className="text-medium text-white text-lg title-dark mx-auto mb-0 para-desc">
              Obviously Im a Web Designer. Experienced with all stages of the
              development cycle for dynamic web projects.
            </p>
            <div className="mt-4 pt-2">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-500 to-[#fa6e39] group-hover:from-orange-500 group-hover:to-[#fa6e39] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-orange-800">
                <a href="mailto:vanshgupta7668@gmail.com" target="_blank" className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
                  Hire me
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
