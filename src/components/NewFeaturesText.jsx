import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";

const NewFeaturesText = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    if (!textRef.current) return;

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom top",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center mb-8">
      <p ref={textRef} className="feature-text text-center">
        iPhone 16 Pro is built for Apple In­telli­gence, the personal
        intelligence system that helps you{" "}
        <span className="text-white">
          write, express yourself and get things done effortlessly.
        </span>
        With groundbreaking privacy protections, it gives you peace of mind that
        no one else can access your data — not even Apple.
      </p>
    </div>
  );
};

export default NewFeaturesText;
