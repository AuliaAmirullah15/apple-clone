import React, { useRef, useEffect } from "react";
import { frameImg, videoFeatures } from "../utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";

gsap.registerPlugin(ScrollTrigger);

const CameraFeature = () => {
  const containerRef = useRef(null);
  const overlayRef = useRef(null);
  const textRef = useRef(null);
  const belowContentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom+=100% top", // extend the pin distance!
          scrub: 1.2,
          pin: true,
        },
      });

      // Animate overlay and text fade out
      timeline.to(overlayRef.current, {
        opacity: 0,
        ease: "power2.out",
        duration: 1,
      });

      timeline.to(
        textRef.current,
        {
          opacity: 0,
          ease: "power2.out",
          duration: 1,
        },
        "<"
      );

      // Animate zoom
      timeline.fromTo(
        containerRef.current,
        { scale: 4 },
        { scale: 1, ease: "power3.out", duration: 2 }
      );

      gsap.set(belowContentRef.current, { y: 100, opacity: 0 });
      timeline.to(
        belowContentRef.current,
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
          duration: 1,
        },
        "+=0.5"
      );
    });

    return () => ctx.revert();
  }, []);

  useGSAP(() => {
    animateWithGsap(".g_fadeIn2", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="w-full overflow-hidden bg-black">
      {/* CameraFeature section */}
      <div
        ref={containerRef}
        className="relative w-full flex justify-center items-center"
        style={{ transformOrigin: "center center" }}
      >
        <div className="relative w-full max-w-[600px] h-full flex-center inset-0">
          <div className="overflow-hidden">
            <img
              src={frameImg}
              alt="frame"
              className="z-10 relative bg-transparent"
            />
          </div>

          <div className="feature-camera">
            <video
              className="pointer-events-none"
              playsInline
              preload="none"
              muted
              autoPlay
            >
              <source src={videoFeatures} type="video/mp4" />
            </video>
          </div>

          <div
            ref={overlayRef}
            className="absolute inset-0 bg-black opacity-50 pointer-events-none"
          />
          <div
            ref={textRef}
            className="absolute text-center text-white text-xs md:text-xl font-bold opacity-100 pointer-events-none px-4 pt-16"
          >
            4K 120 fps Dolby Vision.
            <br />
            Cinemasterful.
          </div>
        </div>
      </div>

      <div ref={belowContentRef} className="mt-0">
        <p className="text-gray font-semibold text-center mt-3">
          A herd of Icelandic horses, captured in stunning 4K 120 fps Dolby
          Vision
        </p>

        <div className="flex flex-col items-center mt-8 mx-4">
          <p className="camera-feature-text g_fadeIn2">
            iPhone 16 Pro takes video capture to a whole new level with{" "}
            <span className="text-white">4K 120 fps Dolby Vision </span>— our
            highest resolution and frame rate combo yet. Enabled by the new 48MP
            Fusion camera with second-generation quad-pixel sensor and our
            powerful A18 Pro chip, iPhone 16 Pro lets you record 4K 120 fps
            Dolby Vision in video mode or slo-mo. <br />
            <br />
            And now you can{" "}
            <span className="text-white">
              adjust the playback speed after capture{" "}
            </span>{" "}
            in the redesigned Photos app, giving you greater editing
            capabilities. To add a dreamy quality to your shot, try out the new
            half-speed option. Or for a cinematic effect, slow it right down to
            24 fps playback.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CameraFeature;
