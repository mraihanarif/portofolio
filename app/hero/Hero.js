"use client";

import React from "react";
import styles from "./styles.module.css";
import { TypeAnimation } from "react-type-animation";
import Noisy from "../comp/NoisyBackground";


const Hero = () => {
  return (
      <section id="hero" className={`${styles.section} text-white relative`}>
        <Noisy />
        <div className="relative overflow-hidden h-[100vh] w-[100vw]">
          <div className="absolute bottom-0 ">
            <div
              className={`${styles.wrapper} w-screen lg:flex lg:flex-row lg:gap-[3rem] lg:items-center xl:px-[10rem] md:px-[1rem] md:pb-[10rem] pb-[1rem] lg:px-[4rem]
                xl:pb-[3rem]
                `}
            >
              <div className="pl-2 ">
                <h1 className="text-[20vw] lg:text-[13.5vw] font-extrabold text-white type-writter">
                  <TypeAnimation
                    sequence={[
                      "Hello",
                      1000,
                      "Bonjour",
                      1000,
                      "こんちは",
                      1000,
                      "你好",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                    className=""
                  />
                </h1>
              </div>
              <div className="px-3 lg:absolute lg:right-[15rem] bg-transparent backdrop-blur-3xl border border-red-950 p-2 m-2">
                <div className={` font-semibold text-white`}>
                  <h2 className="">My name is</h2>
                </div>
                <p className="text-2xl font-semibold uppercase text-white">
                  Muhammad Raihan Arif
                </p>
                <div className={`text-start lg:text-justify max-w-sm lg:w-[20vw] text-white/90`}>
                  <p>
                    I'd have an interest on Web Designer, Web Developer,
                    UI/UX Design, Full-Stack Developer, and more.
                    <br />
                    and I also be able to work full-time in Indonesia.
                  </p>
                </div>
                <div
                  className="w-[150px] h-[40px] border text-black bg-white flex items-center justify-center mt-2
                              duration-1000 hover:text-black hover:bg-white font-bold
                            "
                >
                  <a
                    href="./Resume.pdf"
                    download
                    className="text-center bg-transparent"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
