import React from "react"
import aboutImage from "../../assets/images/about me.png"

const About = () => {
  return (
    <section
      className="mt-8 max-w-[100rem] flex flex-col md:flex-row md:gap-x-8 justify-center scroll-smooth"
      id="About Me"
    >
      <img
        src={aboutImage}
        alt="about"
        className="min-w-[18rem] max-w-[22rem] max-h-[28rem]"
      />
      <div className="flex flex-col ">
        <p className="font-medium text-gray-900 text-justify md:text-lg">
          I'm Tanmoy Sarkar Pranto, a motivated and enthusiastic freshman
          pursuing computer science with a focus on full-stack web development.
          Having a background in technologies such as React, Node, Express, and
          MongoDB, I enjoy creating dynamic and appealing web applications.
          Curiosity about all the possibilities technology presents has driven
          my journey into its domain.
          <br />
          Apart from my expertise in web development, I have a strong interest
          in computer vision and am always looking for new ways to contribute to
          its progress and decipher its mysteries. I get great joy from using
          technology to address problems in the real world, whether I'm working
          on image recognition algorithms or exploring the complexities of
          machine learning models.
          <br />
          Aside from coding, I love to learn new things and solve problems.
          Whether it's learning a new programming language or researching the
          most recent advancements in the IT sector, I enjoy diving deeply into
          new concepts. Acquiring knowledge is not my only objective; I also
          want to use it creatively and efficiently in projects that have a
          positive impact. I'm eager to work with others, be creative, and
          contribute significantly as I start my career in the tech industry.
        </p>
        <div className="mt-2 font-bold tracking-widest text-xl">
          To learn more about me or have a chat...
          <br />
          <button className="mt-4 w-[11rem] h-[3rem] border-[2px] border-black hover:bg-black hover:text-white focus:text-white focus:bg-black">
            <a href="#Contact Me" tabIndex={-1}>
              Contact Me
            </a>
          </button>
        </div>
      </div>
    </section>
  )
}

export default About
