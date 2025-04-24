import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroAppleIntelligence, iPhone16 } from "../utils";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero-title", {
      opacity: 1,
      y: 20,
      delay: 2,
    });
    gsap.from("#hero", {
      opacity: 0,
      delay: 1,
      scale: 1.5,
      duration: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
    });
  }, []);

  return (
    <section className="w-full nav-height relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero-title" className="hero-title -translate-y-100">
          iPhone 16 Pro
        </p>
        <img
          src={heroAppleIntelligence}
          id="hero"
          width={600}
          height={300}
          className="mb-[-20px] mt-[-20px] opacity-1"
        />
        <img
          src={iPhone16}
          id="hero"
          width={800}
          height={500}
          className="opacity-1"
        />
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-semibold text-md text-black">
          From £799 or £33.29/mo. for 24 mo.
        </p>
        <p className="font-light text-md text-black">
          Apple Intelligence available now
        </p>
      </div>
    </section>
  );
};

export default Hero;
