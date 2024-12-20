"use client";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const Lenis = ({ children }) => {
  return (
    <ReactLenis options={{ duration: 3 }} root>
      {children}
    </ReactLenis>
  );
};

export default Lenis;