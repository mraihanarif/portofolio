"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import "./menu.css";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import Logo from "../public/img/RA.png";
import Image from "next/image";
import { Questrial } from "next/font/google";
import { Tinos } from "next/font/google";

const questrial = Questrial({
  subsets: ["latin"],
  weight: "400",
});

const tinos = Tinos({
  subsets: ["latin"],
  weight: "400",
});

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/work", label: "Work" },
];

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const tl = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useGSAP(() => {
    gsap.set(".menu-link-item-holder", { y: 75 });

    tl.current = gsap.timeline({ paused: true })
      .to(".menu-overlay", {
        duration: 1.25,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
      })
      .to(".menu-link-item-holder", {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power4.inOut",
        delay: -0.75,
      });
  }, { scope: container });

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide navbar
      } else {
        setIsVisible(true); // Show navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className={`${tinos.className}`} ref={container}>
      {/* Navbar */}
      <div
        className={`menu-bar transition-transform duration-500 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="menu-logo" onClick={toggleMenu}>
          <Link href={"/"}>
            <Image src={Logo} alt="Logo" width="40" height="40" />
          </Link>
        </div>
        <div className="text-white/50 absolute right-[5rem]">
          <p>[ open to work ]</p>
        </div>
        <div className="menu-open cursor-pointer " onClick={toggleMenu}>
          <div className="bar1"></div>
          <div className="bar2"></div>
        </div>
      </div>

      {/* Menu Overlay */}
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="">
            <Link href={"/"}>
              <Image src={Logo} alt="Logo" width="40" height="40" />
            </Link>
          </div>
          <div
            className="menu-close font-bold text-[1.5rem]"
            onClick={toggleMenu}
          >
            <p>&#x2715;</p>
          </div>
        </div>
        <div className="menu-close-icon text-black">
          <p>&#x2715;</p>
        </div>
        <div className="menu-copy mt-[3rem]">
          <div className="menu-links">
            {menuLinks.map((link, index) => (
              <div className="menu-link-item" key={index}>
                <div
                  className="menu-link-item-holder"
                  onClick={toggleMenu}
                >
                  <Link href={link.path} className="menu-link">
                    {link.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div
            className={`${questrial.className} menu-info relative text-black `}
          >
            <div className="flex flex-col text-sm xl:text-xl xl:flex-row xl:gap-[5rem] gap-[0.25rem]">
              <a href="https://www.instagram.com/mraihan_arif/">
                Instagram &#8599;
              </a>
              <a href="https://www.linkedin.com/in/mraihanarif/">LinkeIn &#8599;</a>
              <a href="https://github.com/mraihanarif">Github &#8599;</a>
              <a href="https://www.facebook.com/chuizdraw123">Facebook &#8599;</a>
            </div>
            <div className="text-sm absolute bottom-0 right-0 xl:text-lg text-end">
              <p>mraihanarif666@gmail.com</p>
              <p>+62 82383978374</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
