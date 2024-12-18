import React from 'react'
import Image from "next/image";
import Test from "../../public/img/2.jpg";
import Background from '../comp/NoisyBackgroundAbout';


const About = () => {
  return (
<section className="h-auto w-auto md:w-screen md:h-screen xl:h-[100vh] xl:w-[100vw] text-white flex flex-col xl:flex-row gap-[3rem] xl:gap-[5rem] justify-center items-center relative pt-[9rem] xl:pt-[2rem]">
  <Background />
            <div className="w-64 h-64 xl:h-auto xl:w-auto">
                <Image src={Test} alt="test" width="400" height="500" />
            </div>
            <div className="text_bio px-2 m-2 backdrop-blur-3xl bg-transparent border-red-950 border-[1px]">
                <div className="uppercase tracking-widest text-xs xl:text-4xl hyphens-auto break-keep text-left text-white ">
                <p className=" max-w-lg mx-auto my-2 text-sm center relative">
                I am a fresh graduate from{" "}
                <span className="font-extrabold">Universitas Telkom</span>, majoring in{" "}
                <span>Computer Engineering</span> in 2024.{" "}
                With experience in several programming languages such as{" "}
                <span className="font-extrabold">HTML, PHP, CSS, React, and JavaScript </span>
                as well as experience in PHP Framework using{" "}
                <span className="font-extrabold">Laravel, CodeIgniter, and Next.JS.</span>
                </p>
                <p className=" max-w-lg mx-auto my-2 text-sm  relative ">
                I am passionate about exploring new concepts in{" "}
                <span>Web Development and Design</span>, and tackling
                complex challenges with the desire to find creative solutions. I believe that
                the combination of analytical thinking and artistic skills allows me
                to create interesting and powerful digital experiences for users.
                </p>
                <p className=" max-w-lg mx-auto my-2 text-sm  relative ">
                In addition, I believe in the importance of collaboration and idea exchange
                in a team. I am ready to be involved in projects that allow me to learn 
                from my colleagues while contributing to the achievement of our common goals.
                </p>
            </div>
            </div>
      </section>
  )
}

export default About