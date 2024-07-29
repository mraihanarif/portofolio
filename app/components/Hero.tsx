'use client'

import React from 'react';
import { AuroraBackground } from "./ui/aurora-background";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 max-w-[69vw] md:max-w-2xl lg:max-w-[60vw]"
      >
        <h2 className='uppercase tracking-widest text-xs text-black dark:text-white max-w-80'>
        Welcome to my Portofolio Website
        </h2>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;
