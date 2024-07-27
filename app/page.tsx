'use client';

import React, { useEffect, useRef, useState } from 'react';
import Section from './components/section';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const isScrolling = useRef(false); // Menandai apakah sedang scroll
  const startTouchY = useRef<number | null>(null); // Untuk menyimpan posisi awal sentuhan

  const handleScroll = (event: WheelEvent) => {
    if (isScrolling.current) return; // Jika sedang scrolling, batalkan event

    isScrolling.current = true; // Tandai sebagai scrolling
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

        // Debouncing: Reset isScrolling setelah delay
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000); // Atur waktu delay sesuai kebutuhan
      } else {
        isScrolling.current = false; // Jika tidak ada perubahan, reset flag
      }
    });
  };

  const handleTouchStart = (event: TouchEvent) => {
    // Menyimpan posisi awal sentuhan
    startTouchY.current = event.touches[0].clientY;
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (isScrolling.current || startTouchY.current === null) return; // Jika sedang scrolling atau posisi awal tidak ada, batalkan event

    isScrolling.current = true; // Tandai sebagai scrolling
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

        // Debouncing: Reset isScrolling setelah delay
        setTimeout(() => {
          isScrolling.current = false;
        }, 1000); // Atur waktu delay sesuai kebutuhan
      } else {
        isScrolling.current = false; // Jika tidak ada perubahan, reset flag
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
    <div ref={containerRef}>
      <Section ref={(el) => {
        if (el) {
          sectionsRef.current[0] = el;
        }
      }} style={{ backgroundColor: '#ff6f61' }}>
        <About />
      </Section>
      <Section ref={(el) => {
        if (el) {
          sectionsRef.current[1] = el;
        }
      }} style={{ backgroundColor: '#ffcc5c' }}>
        <Services />
      </Section>
      <Section ref={(el) => {
        if (el) {
          sectionsRef.current[2] = el;
        }
      }} style={{ backgroundColor: '#88d8b0' }}>
        <Contact />
      </Section>
    </div>
  );
};

export default HomePage;
