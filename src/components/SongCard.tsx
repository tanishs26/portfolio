"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

type SongProps = {
  author: string;
  song: string;
  image: string;
  content: () => string | React.ReactNode;
};
const SongArray: SongProps[] = [
  {
    author: "Fordo",
    song: "Jaded",
    image: "/jaded.jpg",
    content: () =>
      " Fordo is an emerging artist known for blending emotive pop and alternative sounds. “Jaded” explores the themes of emotional exhaustion and reflection on past relationships, using moody instrumentals andexpressive vocals to convey the feeling of growing indifferent or “jaded” over time an emerging artist known for blending emotive pop and alternative sounds. “Jaded” explores the themes of emotional exhaustion and reflection on past relationships, using moody instrumentals and expressive vocals to convey the feeling of growing indifferent or “jaded” over time. ",
  },
  {
    author: "Justin Bieber",
    song: "Ghost",
    image: "/ghost.jpg",
    content: () => (
      <p>
        Justin Bieber is a globally renowned Canadian singer-songwriter. “Ghost”
        is a pop ballad reflecting on the enduring pain of longing for someone
        who is no longer present, offering comfort to those going through loss
        and separation with hopeful, heartfelt lyrics.
      </p>
    ),
  },
  {
    author: "Shubh",
    song: "Balenci",
    image: "/balenci.jpg",
    content: () => (
      <p>
        Shubh is a Punjabi singer-songwriter making waves with his fresh,
        contemporary approach. “Balenci” is a catchy Punjabi song that combines
        stylish urban beats with lifestyle references, particularly luxury
        fashion brand Balenciaga, symbolizing confidence and modern aspirations.
      </p>
    ),
  },
  {
    author: "Phillip Phillips",
    song: "Gone Gone Gone",
    image: "/gonegonecover.jpg",
    content: () => (
      <p>
        Phillip Phillips is an American singer-songwriter noted for his folk-pop
        sound. “Gone Gone Gone” is about unwavering support and deep commitment
        to a loved one, expressing the promise to stand by their side even
        through hardship and after separation, blending powerful emotion with
        anthemic energy.
      </p>
    ),
  },
  {
    author: "Sukha",
    song: "Attraction",
    image: "/Attraction.webp",
    content: () => (
      <p>
        Sukha is a modern Punjabi music duo specializing in upbeat, melodic
        tracks with motivational and romantic themes. “Attraction” brings
        together traditional Punjabi vibes and contemporary production, focusing
        on the excitement and charm of new attraction between lovers.
      </p>
    ),
  },
];
const useOnClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [callback]);

  return ref;
};

const SongCard = () => {
  const [currentCard, setCurrentCard] = useState<SongProps | null>(null);
  const cardRef = useOnClick(() => setCurrentCard(null));

  return (
    <div
      draggable={false}
      className=" selection:bg-neutral-700 selection:text-neutral-200 max-w-6xl mx-auto relative "
    >
      {currentCard && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className=" fixed inset-0 z-8 bg-black/70 backdrop-blur-[5px]"
        ></motion.div>
      )}
      {currentCard && (
        <motion.div
          layoutId={`card-container-${currentCard.song}`}
          ref={cardRef}
          className="inset-x-0 rounded-3xl h-[500px]   overflow-hidden fixed z-10 bg-neutral-100 w-[340px] mx-auto shadow-white/50 shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-8"
        >
          <motion.div
            layoutId={`card-image-${currentCard.song}`}
            className="h-65 w-full aspect-square shadow-black/70 rounded-2xl mb-4 overflow-hidden relative shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          >
            <Image src={currentCard.image} fill alt={currentCard.song} />
          </motion.div>
          <div className="flex justify-between">
            <motion.h1
              layoutId={`card-song-${currentCard.song}`}
              className="text-md text-neutral-900 text-shadow-sm font-semibold"
            >
              {currentCard.song}
            </motion.h1>
            <motion.div className="size-10 rounded-full cursor-pointer bg-orange-600 flex items-center justify-center">
              <FaPlay size={16} className="text-neutral-200" />
            </motion.div>
          </div>
          <motion.h2
            layoutId={`card-author-${currentCard.song}`}
            className="text-neutral-600 text-sm text-shadow-xs mt-1"
          >
            {currentCard.author}
          </motion.h2>
          <motion.div
            initial={{
              filter: "blur(10px)",
            }}
            animate={{
              filter: "blur(0px)",
            }}
            exit={{
              filter: "blur(10px)",
            }}
            transition={{
              delay: 0.2,
            }}
            className="text-sm overflow-scroll pb-10 text-neutral-500 max-h-[150px] no-scrollbar mask-b-from-40%"
          >
            {currentCard.content()}
          </motion.div>
        </motion.div>
      )}

      {SongArray.map((item, idx) => {
        return (
          <motion.div
            onClick={() => setCurrentCard(item)}
            key={idx}
            layoutId={`card-container-${item.song}`}
            className="max-w-3xl flex mx-auto justify-between p-4 rounded-2xl shadow-[0_3px_10px_rgb(0,0,0,0.2)] shadow-neutral-600 mt-10 items-center"
          >
            <div className="flex gap-3 items-center">
              <motion.div
                layoutId={`card-image-${item.song}`}
                className="size-[50px] aspect-square rounded-md overflow-hidden relative shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
              >
                <Image src={item.image} fill alt={item.song} />
              </motion.div>
              <div className="flex flex-col space-y-1">
                <motion.h1
                  layoutId={`card-song-${item.song}`}
                  className="text-md text-neutral-900 text-shadow-sm font-semibold"
                >
                  {item.song}
                </motion.h1>
                <motion.h2
                  layoutId={`card-author-${item.song}`}
                  className="text-neutral-400 text-sm text-shadow-xs"
                >
                  {item.author}
                </motion.h2>
              </div>
            </div>
            <motion.div className="size-12 rounded-full cursor-pointer bg-orange-600 flex items-center justify-center">
              <FaPlay size={20} className="text-neutral-200" />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SongCard;
