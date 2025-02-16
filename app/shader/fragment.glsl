precision mediump float;

uniform float time;
uniform float progress;
uniform sampler2D uDataTexture;
uniform sampler2D uTexture;

uniform vec4 resolution;
varying vec2 vUv;
varying vec3 vPosition;
float PI = 3.141592653589793238;

void main()	{

	vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
	vec4 color = texture2D(uTexture,newUV);
	vec4 offset = texture2D(uDataTexture,vUv);
	
   

    float pixelSize = 0.01;
    vec2 pixelatedUV = floor(vUv / pixelSize) * pixelSize;

    // Apply pixelation
    vec4 pixelatedColor = texture2D(uTexture, pixelatedUV);

    // Apply static distortion to the pixelated color
    float distortion = 0.02;
    vec2 distortedUV = pixelatedUV + distortion * sin(pixelatedUV.y * 10.0);

    // Sample the distorted color
    color = texture2D(uTexture, distortedUV);

    // Output the final color
	gl_FragColor = vec4(vUv,0.0,1.);
	gl_FragColor = vec4(offset.r,0.,0.,1.);
   // gl_FragColor = color;
gl_FragColor = texture2D(uTexture,distortedUV - 0.02*offset.rg);	
}