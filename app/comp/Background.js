'use client';

import React, { useEffect, useRef } from 'react';   

const Background = () => {
    const bubbleRef = useRef(null); // No type annotation in JavaScript
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    useEffect(() => {
        const interBubble = bubbleRef.current;

        const move = () => {
            curX += (tgX - curX) / 20;
            curY += (tgY - curY) / 20;
            if (interBubble) {
                interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
            }
            requestAnimationFrame(move);
        };

        const handleMouseMove = (event) => { // No type annotation
            tgX = event.clientX;
            tgY = event.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);
        move();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); 

    return (
        <div>
            <div className="gradient-bg z-0 absolute">
                <svg 
                    viewBox="0 0 100vw 100vw"
                    xmlns='http://www.w3.org/2000/svg'
                    className="noiseBg"
                >
                    <filter id='noiseFilterBg'>
                        <feTurbulence 
                            type='fractalNoise'
                            baseFrequency='0.6'
                            stitchTiles='stitch' 
                        />
                    </filter>

                    <rect
                        width='100%'
                        height='100%'
                        preserveAspectRatio="xMidYMid meet"
                        filter='url(#noiseFilterBg)' 
                    />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="svgBlur">
                    <defs>
                        <filter id="goo">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                            <feBlend in="SourceGraphic" in2="goo" />
                        </filter>
                    </defs>
                </svg>
                <div className="gradients-container ">
                    <div className="g1"></div>
                    <div className="g2"></div>
                    <div className="g3"></div>
                    <div className="g4"></div>
                    <div className="g5"></div>
                    <div className="interactive" ref={bubbleRef}></div>
                </div>
            </div>
        </div>
    );
}

export default Background;