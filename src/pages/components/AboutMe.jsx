import React from 'react'

const AboutMe = ({aboutRef}) => {
  return (
    <section ref={aboutRef} id='about' className=" space-y-6 min-h-screen snap-start p-8 lg:p-12 shadow-inner rounded-md">
      <h2 className="text-2xl font-bold">About Me</h2>
      <div className='px-10 pt-10'>
        <p className="text-lg leading-relaxed text-base-content/80 text-justify">
          A frontend developer with over two years of experience specializing in creating user-friendly web applications. My journey began with a solid foundation in HTML, CSS, and JavaScript, which paved the way for my expertise in ReactJS.
        </p>
        <br />
        <p className="text-lg leading-relaxed text-base-content/80 text-justify">
          I excel at translating design concepts into functional, utilizing UI libraries like MaterialUI, TailwindCSS, and PrimeFlex to enhance user experience. My experience includes integrating APIs to create seamless interactions and collaborating with backend teams to ensure efficient data management. I value open communication and teamwork, striving to align technical solutions with business objectives.
        </p>
        <br />
        <p className="text-lg leading-relaxed text-base-content/80 text-justify">
          I am committed to producing high-quality, maintainable code and continually seek to improve my skills by exploring new technologies and best practices. My goal is to develop applications that are not only effective but also enjoyable for users, and I look forward to tackling new challenges that allow me to innovate and grow as a developer.
        </p>
      </div>
    </section>
  )
}

export default AboutMe