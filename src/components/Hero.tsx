import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.5 });
    gsap.to("#cta", { opacity: 1, y: -100, delay: 1.5 });
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div
        className="h-18 md:h-20 lg:h-20 w-full flex justify-center items-center"
        style={{ backgroundColor: "rgb(29, 29, 31)" }}
      >
        <p className="text-white text-sm md:text-sm lg:text-sm max-w-sm text-wrap text-center">
          Get $170-$630 in credit towards iPhone 15 Pro when you trade in iPhone
          11 or higher*{" "}
          <span className="text-blue cursor-pointer transition-all duration-200 ease-in-out hover:underline">
            Buy&gt;
          </span>
        </p>
      </div>
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro <br />
          Designed by Aryan Naik
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
