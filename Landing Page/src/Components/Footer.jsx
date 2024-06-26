import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white   shadow p-8">
      <div className="w-full footer mx-auto max-w-screen-xl  md:flex md:items-center md:justify-between">
        <span className="text-lg flex flex-col gap-10 text-gray-500 sm:text-center dark:text-gray-400">
          <a className="text-xl uppercase">&lt; Portfolio / &gt;</a>
          <a>Made with ❤️ by Vansh © 2024 </a>
        </span>
        <ul className="list py-3 flex flex-wrap gap-4 items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/vansh-gupta-b220961b7/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/goyalvansh4">
              Github
            </a>
          </li>
          <li>
            <a
              className="gfg"
              target="_blank"
              href="https://www.geeksforgeeks.org/user/vanshgupta7668/"
            >
              GeeksforGeeks
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://drive.google.com/file/d/1KMgcV6iHu4oWklUqGBkFLF-waW6NGeWY/view?usp=sharing"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
