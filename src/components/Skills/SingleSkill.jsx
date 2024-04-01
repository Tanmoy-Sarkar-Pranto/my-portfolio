import React, { useState } from "react"
import { FaFacebook } from "react-icons/fa"

const SingleSkill = ({ skill }) => {
  //   console.log(skill)
  const { name, icon } = skill
  //   console.log(name, icon)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="w-[6rem] h-[7rem] border-[2px] border-black text-5xl   flex flex-col  justify-center items-center cursor-text hover:bg-black focus:bg-black"
    >
      <div className={`${isHovered ? "text-white" : "text-black"}`}>{icon}</div>
      <p className={`text-sm mt-2 ${isHovered ? "text-white" : "text-black"}`}>
        {name}
      </p>
    </div>
  )
}

export default SingleSkill
