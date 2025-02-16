"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const ShaderComponent = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // Setup Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Create Shader Material
    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        u_time: { value: 0 },
        u_resolution: {
          value: new THREE.Vector2(mount.clientWidth, mount.clientHeight),
        },
      },
      fragmentShader: `
            #ifdef GL_ES
            precision mediump float;
            #endif

            uniform float u_time;
            uniform vec2 u_resolution;

            float noise(vec2 uv) {
                return fract(sin(dot(uv.xy, vec2(12.9898, 78.233))) * 43758.5453);
            }

            void mainImage(out vec4 fragColor, in vec2 fragCoord) {
                vec2 uv = (2.0 * fragCoord - u_resolution.xy) / min(u_resolution.x, u_resolution.y);

                for(float i = 1.0; i < 10.0; i++) {
                    uv.x += 0.6 / i * cos(i * 2.5 * uv.y + u_time);
                    uv.y += 0.6 / i * cos(i * 1.5 * uv.x + u_time);
                }

                float n = noise(uv * 10.0 + u_time * 0.5);
                float blueValue = 0.1 / abs(sin(u_time - uv.y - uv.x)) + n * 0.9;
                blueValue *= 0.3;

                // Ganti warna merah menjadi biru
                fragColor = vec4(0.0, 0.0, blueValue, 1.0);
            }

            void main() {
                mainImage(gl_FragColor, gl_FragCoord.xy);
            }

            `,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    camera.position.z = 1;

    // Animation Loop
    const animate = () => {
      material.uniforms.u_time.value += 0.01;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    // Handle Resize to Fit Container
    const handleResize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;

      renderer.setSize(width, height);
      material.uniforms.u_resolution.value.set(width, height);
    };

    // Observe Resizing on Window or Container
    window.addEventListener("resize", handleResize);

    // Cleanup on Component Unmount
    return () => {
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute top-0 left-0 w-[100%] h-[100%] z[-1] rounded-2xl"
    />
  );
};

export default ShaderComponent;
