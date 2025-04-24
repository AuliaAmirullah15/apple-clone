import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import { exploreVideo } from "../utils";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef();
  const titaniumRef = useRef();

  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause reverse restart",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    const glow = { strength: 0 };

    gsap.to(glow, {
      strength: 1,
      scrollTrigger: {
        trigger: titaniumRef.current,
        start: "top 80%", // when bottom of screen reaches the element
        end: "top 20%",
        scrub: true,
      },
      onUpdate: () => {
        const intensity = glow.strength;

        const shadow =
          intensity === 0
            ? "none"
            : `
            /* Core glow around text */
            0 0 ${5 * intensity}px #FADADD,     /* light rose */
            0 0 ${10 * intensity}px #F4B6B6,    /* muted coral */
            0 0 ${20 * intensity}px #E89A9A,    /* rosewood */
            0 0 ${30 * intensity}px #D47B7B,    /* deeper blush */

            /* Linear vertical trail */
            0 ${10 * intensity}px ${15 * intensity}px #FADADD,
            0 ${20 * intensity}px ${25 * intensity}px #F4B6B6,
            0 ${30 * intensity}px ${35 * intensity}px #E89A9A,
            0 ${40 * intensity}px ${45 * intensity}px #D47B7B
        `;

        titaniumRef.current.style.textShadow = shadow;
      },
    });

    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { scale: 1, opacity: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      y: 0,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);

  return (
    <section className="h-full bg-black relative overflow-hidden">
      <div className="screen-max-wdith">
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24">
            <h2 className="text-center text-5xl lg:text-7xl font-semibold text-fadedwhite-200">
              Strength. Beauty.
            </h2>
            <h2
              ref={titaniumRef}
              className="text-center text-5xl lg:text-7xl font-semibold text-fadedwhite-200 neon-text"
            >
              Titanium.
            </h2>
          </div>

          <div className="flex-center flex-col w-full">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              {/* <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-video g_grow"
                  />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img
                    src={explore2Img}
                    alt="titanium 2"
                    className="feature-video g_grow"
                  />
                </div>
              </div> */}

              <div className="feature-text-container sm:p-10">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    New display technology allows us to route display data under
                    active pixels with no distortion, resulting in thinner
                    borders for larger 6.3-inch and 6.9-inch{" "}
                    <span className="text-white">
                      Super Retina XDR displays
                    </span>
                    that feel great in your hand.
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                    iPhone 16 Pro is splash, water and dust resistant.3 It also
                    has our latest-generation Ceramic Shield material that’s{" "}
                    <span className="text-white">
                      two times tougher than any smart­phone glass.
                    </span>
                    Talk about durable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
