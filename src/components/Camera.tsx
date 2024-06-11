import React from "react";
import chameleonImg from "/assets/images/chameleon.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Camera = () => {
  useGSAP(() => {
    gsap.from("#cham", {
      scrollTrigger: {
        trigger: "#cham",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div className="mt-32 pb-12 p-40 flex flex-col gap-5">
          <h2 className="text-5xl lg:text-7xl font-bold">
            A camera that captures your
          </h2>
          <h2 className="text-5xl lg:text-7xl font-bold">
            wildest imagination.
          </h2>
        </div>
        <div>
          <p className="text-gray text-2xl lg:text-3xl font-medium px-40">
            From dramatic framing flexibility to next-generation portraits, see
            what you can do with our most powerful iPhone camera system.
          </p>
        </div>

        <div className="ml-20" id="cham">
          <img src={chameleonImg} alt="chameleon" />
        </div>
        <div className="mt-2 ml-40">
          <p className="text-gray text-sm lg:text-lg font-medium">
            A green iguana, captured by the 48MP Main camera
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camera;
