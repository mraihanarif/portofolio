"use client";

import React from "react";
import Noisy from "../comp/NoisyBackground";
import { Tinos } from "next/font/google";
import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";
import gsap from "gsap";
import ScrollingTextComponent from "../comp/Marquee";


const Ogg = localFont({
  src: '../../public/fonts/Ogg-Regular.ttf',
});

const Ogg1 = localFont({
  src: '../../public/fonts/Ogg-RegularItalic.ttf',
});


const tinos = Tinos({
  subsets: ['latin'],
  weight: "400",
});

const bodoni = EB_Garamond({
  subsets: ['latin'],
});

const Hero = () => {
  return (
    <>
      <Noisy height="200vh" />
      <section className={`${Ogg.className} text-white relative w-[100vw] h-[100vh]`}>
          <div className="flex flex-col leading-tight text-[2.5rem] lg:text-[5rem] xl:text-[4rem] font-extrabold">
              <div className=" absolute top-[15vh] lg:top-[10vh] left-0 lg:left-[5vw] xl:left-[1vw] px-4  text-start">
                <h1><span className={`${Ogg1.className} text-[3rem] lg:text-[9rem] xl:text-[7rem]`}>D</span>EVELOPER</h1>
                <h1><span className={`${bodoni.className} text-[3rem] lg:text-[9rem] xl:text-[7rem] font-semibold`}>&nbsp;&&nbsp;&nbsp;</span><span className={`${Ogg1.className} text-[3rem] lg:text-[9rem] xl:text-[7rem]`}>D</span>ESIGNER</h1>
                <h1><span className={`${Ogg1.className} text-[3rem] lg:text-[9rem] xl:text-[7rem]`}>F</span>OR UR <span className={`text-[3rem] lg:text-[9rem] xl:text-[7rem]`}>W</span>EBSITE</h1>
              </div>
              <div className="absolute bottom-[15vh] lg:bottom-[10vh] xl:bottom-[1vh] right-0 lg:right-[5vw] text-end px-4 ">
                <h1><span className={`${Ogg1.className} text-[3rem] lg:text-[9rem] xl:text-[7rem]`}>B</span>ASED IN</h1>
                <h1><span className={`${Ogg1.className} text-[3rem] lg:text-[9rem] xl:text-[7rem]`}>I</span>NDONESIA</h1>
              </div>
          </div>
        <div className="absolute bottom-0 left-0 p-2 font-extrabold">
          <p>SCROLL</p>
        </div>
      </section>
      <section className={`${Ogg.className} text-white flex w-[100vw] h-[100vh] bg-transparent`}>
        <div className="pt-[10vh] xl:pt-[20vh]">
          <div>
          <ScrollingTextComponent />
          </div>
          <div className="">
            <h1>TEST</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
