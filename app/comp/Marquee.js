"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Kumar_One_Outline } from "next/font/google";

const bungee = Kumar_One_Outline({
  subsets: ["latin"],
  weight: "400",
});

// Daftarkan plugin ScrollTrigger ke GSAP
gsap.registerPlugin(ScrollTrigger);

const ScrollingTextComponent = () => {
  useEffect(() => {
    // Pastikan kode ini hanya dijalankan di sisi klien
    if (typeof window !== "undefined") {
      const scrollingText = gsap.utils.toArray(".rail h4");

      if (scrollingText.length > 0) {
        const tl = horizontalLoop(scrollingText, { repeat: -1 });

        let speedTween;

        ScrollTrigger.create({
          trigger: ".scrolling-text",
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            if (speedTween) speedTween.kill();
            speedTween = gsap.timeline()
              .to(tl, {
                timeScale: 3 * self.direction,
                duration: 0.25,
              })
              .to(tl, {
                timeScale: 1 * self.direction,
                duration: 1.5,
              }, "+=0.5");
          },
        });
      }
    } 
  }, []);

  return (
    <div suppressHydrationWarning className="scrolling-text uppercase bg-transparent z-1 text-border">
      <div className={`${bungee.className} rail text-[3rem] xl:text-[9rem] bg-transparent `}>
        <h4>&nbsp;my works so far</h4>
        <h4>my works so far</h4>
        <h4>my works so far</h4>
      </div>
    </div>
  );
};

// Fungsi untuk membuat animasi horizontal loop
function horizontalLoop(items, config) {
  items = gsap.utils.toArray(items);
  config = config || {};
  let tl = gsap.timeline({ repeat: config.repeat, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100) }),
    length = items.length,
    startX = items[0].offsetLeft,
    times = [],
    widths = [],
    xPercents = [],
    curIndex = 0,
    pixelsPerSecond = (config.speed || 1) * 100,
    snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1),
    totalWidth, curX, distanceToStart, distanceToLoop, item, i;

  gsap.set(items, {
    xPercent: (i, el) => {
      let w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
      xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / w * 100 + gsap.getProperty(el, "xPercent"));
      return xPercents[i];
    },
  });

  gsap.set(items, { x: 0 });
  totalWidth = items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0);

  for (i = 0; i < length; i++) {
    item = items[i];
    curX = xPercents[i] / 100 * widths[i];
    distanceToStart = item.offsetLeft + curX - startX;
    distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
    tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
      .fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
      .add("label" + i, distanceToStart / pixelsPerSecond);

    times[i] = distanceToStart / pixelsPerSecond;
  }

  function toIndex(index, vars) {
    vars = vars || {};
    Math.abs(index - curIndex) > length / 2 && (index += index > curIndex ? -length : length);
    let newIndex = gsap.utils.wrap(0, length, index),
      time = times[newIndex];
    if (time > tl.time() !== index > curIndex) {
      vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
      time += tl.duration() * (index > curIndex ? 1 : -1);
    }
    curIndex = newIndex;
    vars.overwrite = true;
    return tl.tweenTo(time, vars);
  }

  tl.next = (vars) => toIndex(curIndex + 1, vars);
  tl.previous = (vars) => toIndex(curIndex - 1, vars);
  tl.current = () => curIndex;
  tl.toIndex = (index, vars) => toIndex(index, vars);
  tl.times = times;
  tl.progress(1, true).progress(0, true);

  if (config.reversed) {
    tl.vars.onReverseComplete();
    tl.reverse();
  }

  return tl;
}

export default ScrollingTextComponent;
