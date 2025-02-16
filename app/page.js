import React from "react";
import Hero from "./hero/Hero";
import Noisy from "./comp/NoisyBackground";
import About from "./hero/About";
import Detailed from "./hero/Detailed";
import Works from "./hero/Works";

export default function Home() {
  return (
    <>
      <Noisy />
      <Hero />
      <About />
      <Detailed />
      <Works />
    </>
  );
}
