import React from "react"
import SingleSkill from "./SingleSkill"
// import {FaHtml5, FaCss3, FaRea} from 'react-icons/fa'
import { skillData } from "./skillsSet"

const Skills = () => {
  return (
    <section className="mt-8 flex flex-col" id="Skills">
      <h2 className="text-4xl mb-8 mt-4 text-center">
        My <span className="font-bold">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-x-4 gap-y-4 justify-center">
        {skillData.map((skill, index) => {
          return <SingleSkill skill={skill} key={index} />
        })}
      </div>
    </section>
  )
}

export default Skills
