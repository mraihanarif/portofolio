'use client';

import React, { useEffect, useRef } from 'react';
import GlslCanvas from 'glslCanvas';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const sandbox = new GlslCanvas(canvas);
        
        // Load the shader with noise effect
        sandbox.load(`
            #ifdef GL_ES
            precision mediump float;
            #endif

            uniform float u_time;
            uniform vec2 u_resolution;

            // Simplex noise function (or any noise function can be used)
            float noise(vec2 uv) {
                return fract(sin(dot(uv.xy, vec2(12.9898, 78.233))) * 43758.5453);
            }

            void mainImage(out vec4 fragColor, in vec2 fragCoord) {
                vec2 uv = (2.0 * fragCoord - u_resolution.xy) / min(u_resolution.x, u_resolution.y);
                
                // Apply some distortion to the UV coordinates
                for(float i = 1.0; i < 10.0; i++) {
                    uv.x += 0.6 / i * cos(i * 2.5 * uv.y + u_time);
                    uv.y += 0.6 / i * cos(i * 1.5 * uv.x + u_time);
                }

                // Generate noise based on the UV coordinates
                float n = noise(uv * 10.0 + u_time * 0.5); // Scale and animate the noise

                // Calculate the red value with noise
                float redValue = 0.1 / abs(sin(u_time - uv.y - uv.x)) + n * 0.9; // Add noise to the red value
                
                // Scale down the red value to reduce brightness
                redValue *= 0.3; // Adjust this value to control brightness (0.0 to 1.0)

                fragColor = vec4(redValue, 0.0, 0.0, 1.0);
            }

            void main() {
                mainImage(gl_FragColor, gl_FragCoord.xy);
            }
        `);

        // Resize canvas to fill the window
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            sandbox.setUniform('u_resolution', [canvas.width, canvas.height]);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas(); // Initial resize

        return () => {
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default Background;