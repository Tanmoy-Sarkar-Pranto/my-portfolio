import React from "react"
import projectLinks from "../../../projectLinks.json"
import SingleProject from "./SingleProject"
import ContactLink from "../Hero/ContactLink"

const Projects = () => {
  //   console.log(projectLinks)
  const github = {
    name: "github",
    link: "https://github.com/Tanmoy-Sarkar-Pranto",
  }
  return (
    <section className="mt-16 flex justify-center items-center">
      <div className="w-[60rem]">
        <h2 className="text-4xl mb-8 mt-4 text-center" id="Projects">
          My <span className="font-bold">Projects</span>
        </h2>
        <div className="mt-8 flex flex-col px-6 py-6 gap-y-8">
          {projectLinks.map((project, index) => {
            return <SingleProject project={project} key={index} />
          })}
        </div>
        <p className="flex justify-center items-center font-bold">
          More on
          <a
            href="https://github.com/Tanmoy-Sarkar-Pranto"
            target="_blank"
            className="ml-2"
          >
            <button>
              <ContactLink contact={github} />
            </button>
          </a>
        </p>
      </div>
    </section>
  )
}

export default Projects
