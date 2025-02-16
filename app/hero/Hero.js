"use client";

import React, { useRef, useEffect } from "react";
import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";
import ShaderComponent from "../comp/NoisyBackground";

const Ogg1 = localFont({
  src: "../../public/fonts/Ogg-RegularItalic.ttf",
});

const bodoni = EB_Garamond({
  subsets: ["latin"],
});

const Hero = () => {
  const preloaderRef = useRef(null);
  const progressBarRef = useRef(null);
  const loadingTextRef = useRef(null);
  const containerRef = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    // document.body.classList.add("no-scroll");

    // Timeline for preloader animation
    // const tl = gsap.timeline({
    //   onComplete: () => {
    //     document.body.classList.remove("no-scroll");
    //     preloaderRef.current.style.display = "none";
    //   },
    // });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "50% 50%",
        scrub: true,
      },
    });

    timeline.to(containerRef.current, {
      y: 300,
    });

    // Preloader animations
    //   tl.to(loadingTextRef.current, { text: "UR PAGE BEING LOADED", duration: 3 })
    //     .to(progressBarRef.current, {
    //       scaleX: 1,
    //       transformOrigin: "left",
    //       duration: 3, // Adjust duration for bar animation
    //       ease: "power1.inOut",
    //     })
    //     .to(
    //       loadingTextRef.current,
    //       {
    //         opacity: 0,
    //         duration: 0.5,
    //         ease: "power1.inOut",
    //       },
    //       "-=1"
    //     ) // Fade out loading text while bar animation is finishing
    //     .to(preloaderRef.current, {
    //       y: "-100%",
    //       duration: 1,
    //       ease: "power2.inOut",
    //     })
    //     .from(
    //       containerRef.current,
    //       {
    //         opacity: 0,
    //         y: 100,
    //         duration: 1,
    //         ease: "power2.out",
    //       },
    //       "-=0.5"
    //     ); // Hero section slides up as preloader goes away
  }, []);

  return (
    <>
      {/* <div
        ref={preloaderRef}
        className="fixed top-0 left-0 w-full h-full bg-black z-[1000] flex items-center justify-center"
      >
        <p
          ref={loadingTextRef}
          className="text-white text-2xl font-semibold"
        ></p>
        <div
          ref={progressBarRef}
          className="absolute bottom-0 left-0 w-full h-[1rem] bg-white transform scale-x-0"
        ></div>
      </div> */}

      <section
        ref={containerRef}
        id="hero"
        className="text-white relative w-[100vw] h-[100vh] bg-transparent"
      >
        <div className="flex flex-col leading-tight text-[2.5rem] lg:text-[5rem] xl:text-[4rem] font-extrabold">
          <div
            ref={text1}
            className="absolute top-[15vh] lg:top-[10vh] left-0 lg:left-[5vw] xl:left-[3vw] px-4 text-start"
          >
            <h1>
              <span
                className={`${Ogg1.className} text-[3rem] lg:text-[9rem] xl:text-[7rem]`}
              >
                D
              </span>
              EVELOPER
            </h1>

            <h1>
              <span
                className={`${bodoni.className} text-[3rem] lg:text-[9rem] xl:text-[7rem] font-semibold`}
              >
                &nbsp;&&nbsp;&nbsp;
              </span>
              <span
                className={`${Ogg1.className} text-[3rem] lg:text-[9rem] xl:text-[7rem]`}
              >
                D
              </span>
              ESIGNER
            </h1>
            <h1>
              <span
                className={`${Ogg1.className} text-[3rem] lg:text-[9rem] xl:text-[7rem]`}
              >
                F
              </span>
              OR UR{" "}
              <span className={`text-[3rem] lg:text-[9rem] xl:text-[7rem]`}>
                W
              </span>
              EBSITE
            </h1>
          </div>
          <div
            ref={text2}
            className="absolute bottom-[15vh] lg:bottom-[10vh] xl:bottom-[1vh] right-0 lg:right-[5vw] xl:right-[6vw] text-end px-4"
          >
            <h1>
              <span
                className={`${Ogg1.className} text-[3rem] lg:text-[9rem] xl:text-[7rem]`}
              >
                B
              </span>
              ASED IN
            </h1>
            <h1>
              <span
                className={`${Ogg1.className} text-[3rem] lg:text-[9rem] xl:text-[7rem]`}
              >
                I
              </span>
              NDONESIA
            </h1>
          </div>
        </div>
        <div
          ref={text3}
          className="absolute bottom-0 left-0 p-2 font-extrabold"
        >
          <p>SCROLL</p>
        </div>
      </section>
    </>
  );
};

export default Hero;
