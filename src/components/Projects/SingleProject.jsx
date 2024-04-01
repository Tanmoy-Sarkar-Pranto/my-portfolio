import React from "react"
import "./SingleProject.css"

const SingleProject = ({ project }) => {
  const { name, image, description, techStack, liveLink, repoLink } = project
  return (
    <div className="flex flex-col gap-y-2 border-4 border-black px-2 py-2 elevation-hover">
      <h3 className="heroSectionSpecialFont text-center">{name}</h3>
      <img
        src={image}
        alt="project"
        className="rounded-[1rem] w-[20rem] self-center"
      />
      <p className="text-justify text-lg">{description}</p>
      <div className="flex gap-x-4 md:justify-center">
        {techStack.map((tech, index) => {
          return (
            <div
              className="w-[5rem] h-[3rem] flex justify-center items-center border-2 border-gray-800 rounded-lg hover:bg-black focus:bg-black hover:text-white focus:text-white"
              key={index}
            >
              <span className="text-sm">{tech}</span>
            </div>
          )
        })}
      </div>
      <div className="flex gap-x-4 mt-4 md:justify-center">
        <a
          href={liveLink}
          target="_blank"
          className="h-[2rem] w-[5rem] grid items-center rounded-sm cursor-pointer text-sm border-2 border-black bg-black text-white hover:text-black focus:text-black hover:bg-gray-400 focus:bg-gray-400 text-center"
        >
          Live Demo
        </a>
        <a
          href={repoLink}
          target="_blank"
          className="h-[2rem] w-[5rem] grid items-center rounded-sm cursor-pointer text-sm border-2 border-black bg-black text-white hover:text-black focus:text-black hover:bg-gray-400 focus:bg-gray-400 text-center"
        >
          Code
        </a>
      </div>
    </div>
  )
}

export default SingleProject
