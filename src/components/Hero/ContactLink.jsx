import React, { useState } from "react"
import { FaFacebook, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa"
import { SiFrontendmentor } from "react-icons/si"

const ContactLink = ({ contact }) => {
  const { name, link } = contact
  const [isHovered, setIsHovered] = useState(false)
  let icon
  switch (name) {
    case "facebook":
      icon = <FaFacebook size={25} color={isHovered ? "white" : "black"} />
      break
    case "github":
      icon = <FaGithub size={25} color={isHovered ? "white" : "black"} />
      break
    case "linkedin":
      icon = <FaLinkedin size={25} color={isHovered ? "white" : "black"} />
      break
    case "frontendMentor":
      icon = (
        <SiFrontendmentor size={25} color={isHovered ? "white" : "black"} />
      )
      break
  }
  //   console.log(name, link)
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      className="h-12 w-12 border-black border-[3px] rounded-md flex justify-center items-center  bg-white hover:bg-black cursor-pointer focus:bg-black"
    >
      <a href={link} target="_blank" tabIndex={-1}>
        {icon}
      </a>
    </button>
  )
}

export default ContactLink
