import cwpslxck from "@/assets/images/cwpslxck.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";

export const HeroSection = () => {
  return (
    <div className="relative overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_60%,black_70%,transparent)]">
        <div className="flex items-center justify-center h-full w-full">
          <div className="size-[300px] hero-ring"></div>
          <div className="size-[500px] hero-ring"></div>
          <div className="size-[700px] hero-ring"></div>
          <div className="size-[900px] hero-ring"></div>
        </div>
      </div>

      <div className="container flex flex-col items-center pt-48">
        <div className="z-0 flex flex-col items-center">
          <Image
            src={cwpslxck}
            draggable="false"
            height={200}
            width={200}
            className="size-36"
            alt="cwpslxck avatar"
            loading="eager"
            priority
          />
          <div className="bg-yellow-950 z-0 border border-yellow-900 rounded-lg px-4 py-1.5 flex items-center gap-3">
            <div className="bg-yellow-500 size-2.5 rounded-full"></div>
            <div className="text-base font-normal tracking-wide">
              ready for new projects
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="max-w-lg mx-auto">
            <h1 className="font2 text-5xl md:text-6xl font-black text-center mt-5 mb-0">
              Hey, Im
            </h1>
            <h1 className="font2 text-5xl md:text-6xl font-black text-center mb-5 mt-0">
              Amin Zare
            </h1>
            <p className="text-center text-lg font3">
              very junior frontend developer
              <br />
              interested in software companies & startups & art
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col md:flex-row py-8 gap-4 text-lg">
          <a
            className="flex z-40 justify-center items-center bg-transparent gap-1 border border-yellow-500/40 px-5 py-2 rounded-xl"
            target="_blank"
            about="Download CV Resume File"
            href="/resume.pdf"
          >
            <ArrowDown className="size-5" />
            Download CV File
          </a>
          <a href="#collab">
            <button className="flex z-40 justify-center gap-1 px-5 py-2 rounded-xl bg-white text-black hover:bg-stone-200 transition-colors">
              <span>Collab With Me</span>
              <span>👋</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};
