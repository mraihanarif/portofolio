"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";

export function About() {
  return (
    <div className="h-full w-full rounded-md bg-zinc-900 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p></p>
        <div className="uppercase tracking-widest text-xs">
          <p className="text-gray-300 max-w-lg mx-auto my-2 text-sm text-center relative z-10 ">
            I'm a fresh graduate from{" "}
            <span className="text-purple-400">Telkom University</span>, majoring in {" "}
            <span >Computer Engineering</span> in 2024.{" "}
            With experience in several programming language  such as{" "}
            <span className="text-purple-400">HTML, PHP, CSS, and JavaScript </span>
            as well as experience in PHP Framework using{" "}
            <span className="text-purple-400">Laravel and CodeIgniter.</span>
          </p>
          <p className="text-gray-300 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
              I enjoy exploring new concepts in {" "}
              <span >Web Development and Design</span>, and facing
              complex challenges with a desire to find creative solutions. I believe that
              the combination of my analytical thinking and artistic skills allows me
              to create engaging and powerful digital experiences for users
          </p>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
