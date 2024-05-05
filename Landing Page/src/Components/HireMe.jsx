import React from "react";

const HireMe = () => {
  return (
    <section class="bg_transprent flex flex-col justify-center bg-blend-multiply py-12">
      <div class="row py-4">
        <div class="col-12 text-center flex flex-col gap-8">
          <div class="section-title flex flex-col gap-4">
            <h4 class="text-bold text-3xl title-dark title mb-2">
              I Am Available For Freelancer Projects.
            </h4>
            <p class="text-medium text-lg title-dark mx-auto mb-0 para-desc">
              Obviously Im a Web Designer. Experienced with all stages of the
              development cycle for dynamic web projects.
            </p>
            <div class="mt-4 pt-2">
              {/* <a
                class="bg-[#fa6e39] text-lg text-[#fff] px-6 py-4 rounded-lg"
                href="#"
              >
                Hire me
              </a> */}
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-lg font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-500 to-[#fa6e39] group-hover:from-orange-500 group-hover:to-[#fa6e39] hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-orange-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-black rounded-md group-hover:bg-opacity-0">
                Hire me
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
