'use client';

import React, { useEffect, useRef, useState } from 'react';
import Section from './components/section';
import Hero from './components/Hero';
import {About} from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';



const HomePage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isScrolling = useRef(false);
  const startTouchY = useRef<number | null>(null);

  const handleScroll = (event: WheelEvent) => {
    if (isScrolling.current) return;

    isScrolling.current = true;
    event.preventDefault();

    const delta = event.deltaY;

    requestAnimationFrame(() => {
      let nextSectionIndex = currentSectionIndex;

      if (delta > 0) {
        nextSectionIndex = Math.min(sectionsRef.current.length - 1, currentSectionIndex + 1);
      } else if (delta < 0) {
        nextSectionIndex = Math.max(0, currentSectionIndex - 1);
      }

      if (nextSectionIndex !== currentSectionIndex) {
        setCurrentSectionIndex(nextSectionIndex);
        sectionsRef.current[nextSectionIndex]?.scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      } else {
        isScrolling.current = false;
      }
    });
  };

  const handleTouchStart = (event: TouchEvent) => {
    startTouchY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (isScrolling.current || startTouchY.current === null) return;

    isScrolling.current = true;
    const touchY = event.touches[0].clientY;
    const delta = touchY - (startTouchY.current || 0);

    requestAnimationFrame(() => {
      let nextSectionIndex = currentSectionIndex;

      if (delta > 0) {
        nextSectionIndex = Math.max(0, currentSectionIndex - 1);
      } else if (delta < 0) {
        nextSectionIndex = Math.min(sectionsRef.current.length - 1, currentSectionIndex + 1);
      }

      if (nextSectionIndex !== currentSectionIndex) {
        setCurrentSectionIndex(nextSectionIndex);
        sectionsRef.current[nextSectionIndex]?.scrollIntoView({ behavior: 'smooth' });

        setTimeout(() => {
          isScrolling.current = false;
        }, 1000);
      } else {
        isScrolling.current = false;
      }
    });
  };

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener('wheel', handleScroll, { passive: false });
      container.addEventListener('touchstart', handleTouchStart, { passive: true });
      container.addEventListener('touchmove', handleTouchMove, { passive: false });

      return () => {
        container.removeEventListener('wheel', handleScroll);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, [currentSectionIndex]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <Navbar />
      <Section
        sectionType="1"
         id="hero"
        ref={(el) => {
          if (el) sectionsRef.current[0] = el;
        }}
      >
        <Hero />
      </Section>
      <Section
        sectionType="2"
        id="about"
        ref={(el) => {
          if (el) sectionsRef.current[1] = el;
        }}
      >
        <About />
      </Section>
      <Section
        sectionType="3"
         id="project"
        ref={(el) => {
          if (el) sectionsRef.current[2] = el;
        }}
      >
        <Projects />
      </Section>
      <Section
        sectionType="4"
         id="skills"
        ref={(el) => {
          if (el) sectionsRef.current[3] = el;
        }}
      >
        <Skills />
      </Section>
      <Section
        sectionType="5"
         id="contact"
        ref={(el) => {
          if (el) sectionsRef.current[4] = el;
        }}
      >
        <Contact />
      </Section>
    </div>
  );
};

export default HomePage;
