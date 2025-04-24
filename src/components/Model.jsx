import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { useRef, useState, useEffect } from "react";
import { yellowImg } from "../utils";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constants";
import { animateWithGsapTimeline } from "../utils/animations";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    id: 1,
    title: "iPhone 16 Pro in Natural Titanium",
    color: ["#C2BCB2", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();

  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2,
      });
    }

    if (size === "small") {
      animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 2,
      });
    }
  });

  useEffect(() => {
    const slider = document.getElementById("size-slider");

    if (slider) {
      const xVal = size === "large" ? "100%" : "0%";

      gsap.to(slider, {
        x: xVal,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [size]);

  useGSAP(() => {
    gsap.to("#heading", { y: 0, opacity: 1 });
  }, []);
  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-md font-light text-center mb-5">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => {
                  const isSelected = item.id === model.id;
                  return (
                    <li
                      key={i}
                      onClick={() => setModel(item)}
                      className="mx-2 cursor-pointer flex items-center justify-center"
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        backgroundColor: isSelected ? "#2997FF" : "#42424570",
                        padding: isSelected ? "2px" : "2px",
                      }}
                    >
                      <div
                        className="flex items-center justify-center rounded-full"
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: isSelected ? "white" : "#42424570",
                          padding: isSelected ? "2px" : "2px",
                        }}
                      >
                        <div
                          className="rounded-full w-full h-full"
                          style={{
                            backgroundColor: item.color[0],
                          }}
                        ></div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="size-btn-container">
                <div id="size-slider" className="size-btn-slider"></div>
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn"
                    onClick={() => setSize(value)}
                    style={{
                      color: size === value ? "black" : "white",
                    }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
