import React from 'react'
import ScrollingTextComponent from '../comp/Marquee'

const Works = () => {
  return (
    <section className=" text-white bg-black w-[100vw] h-auto lg:h-[100vh]">
        <div className="pt-[2rem]">
          <div className="marquee">
          <ScrollingTextComponent />
          </div>
          <div className="flex flex-col gap-1 pt-[5rem]">
          <div className="container mx-auto p-4">
              <div className="border rounded-lg flex flex-col lg:flex-row text-white">
                  <div className="border-b xl:border-r xl:border-b-0 w-full lg:w-4/5"> {/* 80% lebar untuk bagian pertama */}
                      <div className="p-4">
                          <div>
                              <h1>Freelance</h1>
                              <h2 className="text-4xl py-[2rem]">Digital Queue Website</h2>
                          </div>
                          <p className="text-white text-2xl leading-loose tracking-wide max-w-[90vw]">Designed and developed a complete digital queue management system for the Disdukcapil in 
                          Merangin, Jambi.
                          Collaborated with Disdukcapil employee to gather requirements, implement key features, and 
                          ensure the system met organizational needs. 
                          </p>
                      </div>
                  </div>
                  <a href="/" className="w-full lg:w-1/5 p-4 rounded-lg items-end flex"> {/* 20% lebar untuk bagian kedua */}
                      <h2 className=" text-7xl">SEE ✦</h2>
                  </a>
              </div>
          </div>
          </div>
        </div>
      </section>
  )
}

export default Works