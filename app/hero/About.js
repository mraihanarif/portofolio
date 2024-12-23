"use client";

import React from 'react'

const About = () => {
  return (
        <section className="text-white w-[100vw] h-[100vh] bg-black overflow-hidden">
                <div>
                <div className="text__about font-semibold max-w-none p-2 text-[3.6vh] md:max-w-[45rem] 2xl:max-w-[70rem] md:p-4 2xl:text-[5.1vh] tracking-loose">
                    <p>Passionate about Web Development and Design, and tackling complex challenges with desire to find creative solutions.</p>
                    <br />
                    <p>the combination of analytical thinking and artistic skills allows me to create interesting and powerful digital experiences for users.</p>
                    <br />
                    <p>With Experienced such as HTML, CSS, PHP, JavaScript, SQL and some Frameworks like Laravel, Codeigniter, and Next.js </p>
                    <p>[ Lets work with me :) ]</p>
                </div>
                <a
                    href="./Resume.pdf"
                    download
                    className="w-64 h-[2.5rem] border mx-2 mt-4 p-2 2xl:m-0 2xl:ml-4 flex cursor-pointer bg-black hover:bg-white hover:text-black text-white font-bold hover:font-extrabold duration-500 transition-all" 
                >
                    Download CV
                </a>
                </div>
            </section>
  )
}

export default About