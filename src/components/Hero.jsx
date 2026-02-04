import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Simple typing animation for the hero subtitle
const TYPING_TEXT = "I built this little website just for you...";

function Hero({ onStartJourney }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      setDisplayedText(TYPING_TEXT.slice(0, currentIndex + 1));
      currentIndex += 1;
      if (currentIndex >= TYPING_TEXT.length) {
        clearInterval(interval);
      }
    }, 70); // typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex w-full max-w-full flex-col items-center gap-8 text-center md:flex-row md:items-center md:justify-between md:gap-10 md:text-left">
      <div className="space-y-6 md:w-1/2">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-pink-200 shadow-lg shadow-pink-500/30 ring-1 ring-pink-400/40"
        >
          Pooja ❤️ Chandra
          <span className="h-1 w-1 rounded-full bg-pink-400" />
          4 years of love
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display text-4xl leading-tight text-pink-100 drop-shadow md:text-5xl lg:text-6xl"
        >
          Happy 4th Anniversary{" "}
          <span className="bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 bg-clip-text text-transparent">
            Wifey
          </span>{" "}
          ❤️
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl text-sm leading-relaxed text-pink-100/80 md:text-base"
        >
          {displayedText}
          <span className="inline-block w-2 animate-pulse border-r-2 border-pink-200 align-middle" />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col items-center gap-4 md:flex-row md:items-center"
        >
          <button
            type="button"
            onClick={onStartJourney}
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 px-8 py-3 text-sm font-semibold text-slate-950 shadow-xl shadow-pink-500/40 transition hover:translate-y-0.5 hover:shadow-pink-500/60"
          >
            Start Our Journey
            <span className="transition-transform group-hover:translate-x-1">
              ✨
            </span>
          </button>

          <p className="text-xs text-pink-100/70 md:text-sm">
            Scroll to relive{" "}
            <span className="font-semibold text-pink-200">
              our favorite memories
            </span>
          </p>
        </motion.div>
      </div>

      {/* Right side floating card with subtle motion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.25 }}
        className="mt-10 w-full md:mt-0 md:w-1/2"
      >
        <div className="relative mx-auto max-w-md">
          <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-br from-pink-500/60 via-rose-400/40 to-indigo-500/50 opacity-70 blur-xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-pink-200/30 bg-slate-950/70 px-8 py-8 shadow-2xl shadow-pink-500/30 backdrop-blur-xl">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-pink-200/80">
              To my dearest Wifey
            </p>
            <p className="mt-4 text-sm text-pink-50/90">
              This little website is my way of saying{" "}
              <span className="font-semibold text-pink-200">
                “I love you”
              </span>{" "}
              in a language I know best. Every scroll, every photo, every word
              here is a small piece of{" "}
              <span className="font-semibold text-pink-200">
                our story
              </span>
              .
            </p>

            <div className="mt-6 flex items-center justify-between text-xs text-pink-100/70">
              <span>Forever yours,</span>
              <span className="font-semibold text-pink-200">
                CV 💌
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;

