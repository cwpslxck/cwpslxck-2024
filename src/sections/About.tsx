import Image from "next/image";
import map from "@/assets/images/map.jpg";
import Stars from "@/assets/icons/sparkle.svg";
import pfp from "@/assets/images/cwpslxck.png";

import web from "@/assets/images/MoviesBooks/WEB.jpg";
import thtaht from "@/assets/images/MoviesBooks/THTAHT.jpg";
import socialnetwork from "@/assets/images/MoviesBooks/SOCIALNETWORK.jpg";
import mrrobot from "@/assets/images/MoviesBooks/MRROBOT.jpg";
import bigshort from "@/assets/images/MoviesBooks/BIGSHORT.jpg";
import wow from "@/assets/images/MoviesBooks/WOWS.jpg";
import silicon from "@/assets/images/MoviesBooks/SILICONVALLEY.jpg";

import SectionHeader from "@/components/SectionHeader";
import { FaReact, FaVuejs } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiExpo } from "react-icons/si";
import { PiFramerLogoBold } from "react-icons/pi";
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";

export const AboutSection = () => {
  const Habbits = [
    {
      title: "Coffee",
      emoji: "☕",
    },
    {
      title: "Design",
      emoji: "🎨",
    },
    {
      title: "Cooking",
      emoji: "👩🏻‍🍳",
    },
    {
      title: "Game",
      emoji: "🎮",
    },
    {
      title: "Music",
      emoji: "🎸",
    },
    {
      title: "Basketball",
      emoji: "🏀",
    },
    {
      title: "Coffee",
      emoji: "☕",
    },
    {
      title: "Design",
      emoji: "🎨",
    },
    {
      title: "Cooking",
      emoji: "👩🏻‍🍳",
    },
    {
      title: "Game",
      emoji: "🎮",
    },
    {
      title: "Music",
      emoji: "🎸",
    },
    {
      title: "Basketball",
      emoji: "🏀",
    },
    {
      title: "Coffee",
      emoji: "☕",
    },
    {
      title: "Design",
      emoji: "🎨",
    },
    {
      title: "Cooking",
      emoji: "👩🏻‍🍳",
    },
    {
      title: "Game",
      emoji: "🎮",
    },
    {
      title: "Music",
      emoji: "🎸",
    },
    {
      title: "Basketball",
      emoji: "🏀",
    },
  ];
  const mememe = [
    {
      title: "AminZare",
      emoji: "🆔",
    },
    {
      title: "19YearsOld",
      emoji: "👶🏻",
    },
    {
      title: "Shiraz,Iran(PERSIA)",
      emoji: "🏡",
    },
    {
      title: "AzadUniversity",
      emoji: "🎓",
    },
    {
      title: "ShirazStartupFactory",
      emoji: "🏭",
    },
    {
      title: "AminZare",
      emoji: "🆔",
    },
    {
      title: "19YearsOld",
      emoji: "👶🏻",
    },
    {
      title: "Shiraz,Iran(PERSIA)",
      emoji: "🏡",
    },
    {
      title: "AzadUniversity",
      emoji: "🎓",
    },
    {
      title: "ShirazStartupFactory",
      emoji: "🏭",
    },
  ];
  const techs = [
    {
      title: "ReactJs",
      icon: <FaReact className="size-5" />,
    },
    {
      title: "NextJs",
      icon: <RiNextjsLine className="size-5" />,
    },
    {
      title: "VueJs",
      icon: <FaVuejs className="size-5" />,
    },
    {
      title: "Tailwindcss",
      icon: <RiTailwindCssFill className="size-5" />,
    },
    {
      title: "Expo",
      icon: <SiExpo className="size-5" />,
    },
    {
      title: "Framer",
      icon: <PiFramerLogoBold className="size-5" />,
    },
    {
      title: "FramerMotion",
      icon: <TbBrandFramerMotion className="size-5" />,
    },
    {
      title: "ThreeJs",
      icon: <TbBrandThreejs className="size-5" />,
    },
    {
      title: "ReactJs",
      icon: <FaReact className="size-5" />,
    },
    {
      title: "NextJs",
      icon: <RiNextjsLine className="size-5" />,
    },
    {
      title: "VueJs",
      icon: <FaVuejs className="size-5" />,
    },
    {
      title: "Tailwindcss",
      icon: <RiTailwindCssFill className="size-5" />,
    },
    {
      title: "Expo",
      icon: <SiExpo className="size-5" />,
    },
    {
      title: "Framer",
      icon: <PiFramerLogoBold className="size-5" />,
    },
    {
      title: "FramerMotion",
      icon: <TbBrandFramerMotion className="size-5" />,
    },
    {
      title: "ThreeJs",
      icon: <TbBrandThreejs className="size-5" />,
    },
  ];
  const books = [
    {
      title:
        "Engineering Software as a Service: An Agile Approach Using Cloud Computering",
      image: web,
    },
    {
      title: "The Hard Thing About Hard Things",
      image: thtaht,
    },
  ];
  const movies = [
    {
      title: "The Social Network",
      image: socialnetwork,
    },
    {
      title: "Mr. Robot Series",
      image: mrrobot,
    },
    {
      title: "The Big Short",
      image: bigshort,
    },
    {
      title: "Wolf Of Wallstreet",
      image: wow,
    },
    {
      title: "Silicon Valley Series",
      image: silicon,
    },
  ];
  return (
    <div className="ltr container" id="about">
      <SectionHeader
        title={"About"}
        cotitle={"everything about me :)"}
        desc={"what do i do when im tired of codding?"}
      />
      <div className="mt-5 space-y-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-zinc-800 w-full md:w-2/3 py-4 lg:h-80 h-auto flex justify-between flex-col rounded-3xl overflow-hidden border-2 border-white/20">
            <div className="pb-4 px-4">
              <div className="flex items-center gap-2">
                <Stars className="size-8 text-yellow-400" />
                <p className="font2 font-semibold text-4xl tracking-widest">
                  My Habbits
                </p>
              </div>
              <p className="opacity-70 font-light">who am i and what i do?</p>
            </div>
            <div className="flex gap-7 flex-col justify-between w-auto h-full [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
              <div className="animate-scroll inline-flex h-full w-auto items-center gap-4 text-black px-6">
                {mememe.map((t, i) => (
                  <div
                    className="px-6 py-2 inline-flex gap-1 bg-gradient-to-br tracking-wider rounded-xl from-yellow-400 to-yellow-500"
                    key={i}
                  >
                    <span>{t.title}</span>
                    <span>{t.emoji}</span>
                  </div>
                ))}
              </div>
              <div className="animate-scrollrev inline-flex h-full items-center gap-4 text-black px-6">
                {Habbits.map((t, i) => (
                  <div
                    className="px-6 py-2 inline-flex gap-1 bg-gradient-to-br tracking-wider rounded-xl from-yellow-400 to-yellow-500"
                    key={i}
                  >
                    <span>{t.title}</span>
                    <span>{t.emoji}</span>
                  </div>
                ))}
              </div>
              <div className="animate-scroll inline-flex h-full items-center gap-4 text-black px-6">
                {techs.map((t, i) => (
                  <div
                    className="px-6 py-2 inline-flex items-center gap-1 bg-gradient-to-br tracking-wider rounded-xl from-yellow-400 to-yellow-500"
                    key={i}
                  >
                    <span>{t.title}</span>
                    <span>{t.icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/*  */}
          <div className="bg-zinc-800 h-80 w-full md:w-96 flex flex-col md:flex-row p-8 rounded-3xl overflow-hidden relative z-0 border-2 border-white/20">
            <div
              className="absolute inset-0 -z-30 bg-center bg-cover opacity-100 flex justify-center items-center"
              style={{
                backgroundImage: `url(${map.src})`,
              }}
            >
              <Image
                draggable="false"
                src={pfp}
                alt="Pfp"
                loading="lazy"
                className="size-20 bg-slate-300 rounded-full p-1"
              />
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
        <div className="flex flex-col md:flex-row gap-8">
          {/*  */}
          <div className="bg-zinc-800 w-full md:w-1/3 py-4 lg:h-80 h-auto flex justify-between flex-col rounded-3xl overflow-hidden border-2 border-white/20">
            <div className="pb-4 px-4">
              <div className="flex items-center gap-2">
                <Stars className="size-8 text-yellow-400" />
                <p className="font2 font-semibold text-4xl tracking-widest">
                  Books
                </p>
              </div>
              <p className="opacity-70 font-light">
                books that helped me to grow.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex overflow-x-scroll items-end -mb-10 gap-4 px-4 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                {books.map((e) => (
                  <Image
                    draggable="false"
                    key={e.title}
                    className="h-60 w-auto cursor-pointer rounded-xl"
                    alt={e.title}
                    src={e.image}
                    title={e.title}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
          {/*  */}
          <div className="bg-zinc-800 w-full md:w-2/3 py-4 lg:h-80 h-auto flex justify-between flex-col rounded-3xl overflow-hidden border-2 border-white/20">
            <div className="pb-4 px-4">
              <div className="flex items-center gap-2">
                <Stars className="size-8 text-yellow-400" />
                <p className="font2 font-semibold text-4xl tracking-widest">
                  Movies
                </p>
              </div>
              <p className="opacity-70 font-light">
                movies that made me find my way
              </p>
            </div>
            <div className="flex justify-center">
              <div className="flex overflow-x-scroll items-end -mb-10 gap-4 px-4 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
                {movies.map((e) => (
                  <Image
                    draggable="false"
                    key={e.title}
                    className="h-60 w-auto cursor-pointer rounded-xl"
                    alt={e.title}
                    src={e.image}
                    title={e.title}
                    loading="lazy"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
