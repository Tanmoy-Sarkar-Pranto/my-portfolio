import React from "react"
import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <>
      <div className="font-titilliumWeb mx-2 md:mx-8 my-6 scroll-smooth ">
        <Header />
        <Hero />
        <main className="min-w-[30rem] max-w-[100%] pl-2 md:pl-8">
          <div className="flex justify-center items-center">
            <About />
          </div>
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
