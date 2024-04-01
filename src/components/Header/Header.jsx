import React, { useState } from "react"
import logoImage from "../../assets/images/Vector.png"
import { MdMenu, MdClose } from "react-icons/md"
import Sidebar from "./Sidebar/Sidebar"
import classNames from "classnames"

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  return (
    <nav className="flex justify-between items-center md:items-start">
      <div className="flex min-w-[17rem] max-w-[100%] justify-between md:justify-evenly items-center">
        <img src={logoImage} alt="lgoo" className="w-[2rem] h-[3rem]" />
        <p className="font-extrabold text-[40px]">Pranto</p>
      </div>
      <div className="hidden md:flex md:pb-4 md:justify-center md:items-center ">
        <Sidebar />
      </div>
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="md:hidden"
      >
        <MdMenu size={50} />
      </button>
      <div
        className={classNames(
          "fixed inset-y-0 right-0 w-[40%] bg-white z-50 transition-transform duration-500 ease-in-out",
          {
            "translate-x-0": isSidebarOpen,
            "translate-x-full": !isSidebarOpen,
          }
        )}
      >
        {/* Sidebar content */}
        <nav className="p-4 ">
          {isSidebarOpen && (
            <div className="fixed inset-0 z-70 bg-white opacity-50" />
          )}
          <Sidebar setIsSidebarOpen={setIsSidebarOpen} />
        </nav>
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900 opacity-50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />
      )}
    </nav>
  )
}

export default Header
