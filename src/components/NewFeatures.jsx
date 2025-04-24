import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { appleIntelligence } from "../utils";
import { useGSAP } from "@gsap/react";
import { appleIntelligenceVideo } from "../utils";

gsap.registerPlugin(ScrollTrigger);

const NewFeatures = () => {
  const imgRef = useRef(null);
  const turbulenceRef = useRef(null);
  const displacementRef = useRef(null);
  const videoRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
        once: true,
      },
    });

    // Animate the wave distortion (base frequency + displacement scale)
    tl.to(
      turbulenceRef.current,
      {
        attr: { baseFrequency: 0.008 },
        duration: 2,
        ease: "sine.inOut",
      },
      0
    );

    tl.to(
      displacementRef.current,
      {
        attr: { scale: 0 },
        duration: 2,
        ease: "power1.out",
      },
      1
    ); // Starts a bit after baseFrequency drop starts

    // Animate image fade-in + slide-up
    tl.fromTo(
      imgRef.current,
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 20,
        duration: 2,
        ease: "power2.out",
      },
      0.2
    );
  }, []);

  useEffect(() => {
    const gradientEl = document.getElementById("gradient-border");

    const gradientTl = gsap.timeline({
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
        once: true,
      },
    });

    gradientTl
      // Step 1: Fade in + grow height
      .to(gradientEl, {
        opacity: 1,
        height: "80px",
        duration: 1,
        ease: "power2.inOut",
      })

      // Step 2: Expand width from center
      .to(gradientEl, {
        width: "100%",
        duration: 1,
        ease: "power2.out",
      })

      // Step 3: Collapse height to 0 while keeping width
      .to(gradientEl, {
        height: "0px",
        duration: 1,
        ease: "power2.inOut",
      })

      // Step 4: Fade out for extra smoothness
      .to(gradientEl, {
        opacity: 0,
        duration: 0.5,
        ease: "power1.out",
      });
  }, []);

  useGSAP(() => {
    gsap.to("#appleIntelligenceVideo", {
      scrollTrigger: {
        trigger: "#appleIntelligenceVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
  }, []);

  return (
    <section className="h-full bg-black relative overflow-hidden">
      <div
        id="gradient-border"
        className="absolute top-0 left-1/2 translate-x-[-50%] h-[80px] z-10 overflow-hidden pointer-events-none"
        style={{
          width: "0px",
          height: "0px",
          background:
            "linear-gradient(90deg, #5182ec, #2d192a, #c261d3, #863557, #de5456, #334f90)",
          opacity: 0,
          transformOrigin: "center top",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      ></div>

      <div className="screen-max-width">
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mb-24 relative">
            {/* SVG filter */}
            <svg width="0" height="0">
              <filter id="wavey">
                <feTurbulence
                  ref={turbulenceRef}
                  type="turbulence"
                  baseFrequency="0.03"
                  numOctaves="1"
                  result="turbulence"
                />
                <feDisplacementMap
                  ref={displacementRef}
                  in="SourceGraphic"
                  in2="turbulence"
                  scale="20"
                  xChannelSelector="R"
                  yChannelSelector="G"
                />
              </filter>
            </svg>

            <img
              ref={imgRef}
              src={appleIntelligence}
              alt="apple intelligence"
              style={{ filter: "url(#wavey)" }}
              className="-translate-y-200"
            />
          </div>

          <div className="relative">
            <video
              playsInline
              id="appleIntelligenceVideo"
              className="w-full h-full object-cover object-center"
              preload="none"
              muted
              autoPlay
              ref={videoRef}
            >
              <source src={appleIntelligenceVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewFeatures;
