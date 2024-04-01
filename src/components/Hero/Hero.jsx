import React from "react"
import heroImage from "../../assets/images/hero-1.png"
import ContactLink from "./ContactLink"
import data from "../../../contactLinks.json"

const Hero = () => {
  return (
    <div className="flex flex-col mt-20 justify-center items-center md:flex-row-reverse">
      <img src={heroImage} alt="hero" className="w-[25rem]" />
      <div className="flex flex-col ">
        <h1 className="text-3xl mt-4 tracking-wider">
          Hello, I'm Pranto,{" "}
          <span className="font-bold text-justify">Full-stack Developer </span>
          based in <span className="heroSectionSpecialFont">Bangladesh</span>.
        </h1>
        <p className="mt-2 md:mt-8">
          I'm a full stack developer and have proficiency in{" "}
          <span className="heroSectionSpecialFont">React.js</span>,{" "}
          <span className="heroSectionSpecialFont">Express.js</span>,{" "}
          <span className="heroSectionSpecialFont">HTML</span>,{" "}
          <span className="heroSectionSpecialFont">CSS</span> and
          <span className="heroSectionSpecialFont"> Tailwind CSS</span>. Reach
          out to learn more about me.
        </p>
        <div className="flex justify-start mt-4 gap-x-4 md:gap-x-8 md:mt-8">
          {data.map((link, index) => {
            return <ContactLink key={index} contact={link} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Hero
