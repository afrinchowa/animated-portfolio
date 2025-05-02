import { FaLocationArrow } from "react-icons/fa6";
import Image from "next/image";

import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className="relative pb-20 pt-36 overflow-hidden">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
        absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Main content with image */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center relative z-10 gap-10 px-4 lg:px-0">
        {/* Text section */}
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="uppercase tracking-widest text-xs text-blue-100 mb-2">
            Empowering the Web with Modern Web Development
          </p>

          <TextGenerateEffect
            words="Turning Ideas into Intuitive and Engaging Web Experiences"
            className="text-[32px] sm:text-4xl md:text-5xl lg:text-6xl"
          />

          <p className="mt-4 mb-6 text-sm md:text-lg lg:text-xl">
            Hi! I&apos;m Soya, a passionate Web Developer crafting modern and responsive websites from Bangladesh.
          </p>

          <a href="#about">
            <MagicButton title="Show my work" icon={<FaLocationArrow />} position="right" />
          </a>
        </div>

        {/* Image section */}
        <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
          <Image
            src="/cover-img.png" // Make sure the image is named correctly
            alt="Soya"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
