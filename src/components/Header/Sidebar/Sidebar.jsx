import React from "react"
import { MdClose } from "react-icons/md"

const Sidebar = ({ setIsSidebarOpen }) => {
  const links = ["About Me", "Skills", "Projects", "Contact Me"]
  return (
    <div className="flex flex-col z-50  md:items-center md:justify-center md:pb-16">
      <div className=" relative">
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="right-4 top-4 absolute md:hidden"
        >
          <MdClose size={50} />
        </button>
      </div>
      <ul className="mt-24 md:mt-4 flex flex-col md:flex-row z-50 justify-between md:gap-x-8 md:items-center">
        {links.map((link, index) => {
          return (
            <li key={index} className="mb-4 ">
              <a
                href={`#${link}`}
                className=" font-inter font-bold text-slate-950 focus:text-orange-500 hover:text-orange-500 "
              >
                {link}
              </a>
            </li>
          )
        })}
        <li className="mb-4">
          <a
            href={`https://drive.google.com/file/d/1kKDnwmkkmOVLQE8tWQbY7Uwo0S7l45Bx/view?usp=drive_link`}
            target="_blank"
            className=" font-inter font-bold text-slate-950 focus:text-orange-500 hover:text-orange-500 "
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
