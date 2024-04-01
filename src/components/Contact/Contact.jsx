import React, { useRef } from "react"

const Contact = () => {
  const formRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Submit the form
    formRef.current.submit()
    // Reset the form fields after a short delay
    setTimeout(() => {
      formRef.current.reset()
    }, 100)
  }
  return (
    <div
      className="flex flex-col gap-y-4 md:justify-center md:items-center mt-12"
      id="Contact Me"
    >
      <h1 className="text-4xl mb-8 mt-4 text-center font-bold md:text-5xl">
        Contact Me
      </h1>
      <form
        ref={formRef}
        action="https://formspree.io/f/xyyrnbbd"
        method="POST"
        className="flex flex-col justify-start w-[30rem] "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-y-2">
          <label htmlFor="name" className="text-xl font-bold">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            id="name"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 mt-2">
          <label htmlFor="email" className="text-xl font-bold">
            Email
          </label>
          <input
            type="email"
            name="_replyto"
            placeholder="Your Email"
            id="email"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex flex-col gap-y-2 mt-2">
          <label htmlFor="message" className="text-xl font-bold">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            className="block p-2.5 w-full resize-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          ></textarea>
        </div>
        <button
          className="mt-4 w-[11rem] h-[3rem] border-[2px] border-black hover:bg-black hover:text-white focus:text-white focus:bg-black text-2xl"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
