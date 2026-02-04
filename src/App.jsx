import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Timeline from "./components/Timeline";
import Letter from "./components/Letter";
import Counter from "./components/Counter";
import Surprise from "./components/Surprise";
import Footer from "./components/Footer";
import bgMusic from "../nastelbom-romantic-436840.mp3";

// Simple, soft fade-in for each main section
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

function App() {
  const journeyRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  // Scroll to top on mount to ensure hero is visible
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Initialize background music once on mount
  useEffect(() => {
    // Romantic instrumental from local file
    audioRef.current = new Audio(bgMusic);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.2;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handleStartJourney = () => {
    // Mark interaction for autoplay-friendly behavior
    setHasUserInteracted(true);
    if (journeyRef.current) {
      journeyRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // Gently start music on first meaningful interaction
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => setIsAudioPlaying(true))
        .catch(() => {
          // Ignore autoplay errors, user can use the toggle
        });
    }
  };

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isAudioPlaying) {
      audioRef.current.pause();
      setIsAudioPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsAudioPlaying(true))
        .catch(() => {
          // If browser blocks play, we simply keep it paused
        });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 bg-romantic-gradient bg-fixed">
      {/* Soft overlay to keep text readable on gradients */}
      <div className="min-h-screen bg-slate-950/60 backdrop-blur-sm">
        {/* Floating music control */}
        <div className="fixed right-4 top-4 z-40">
          <button
            type="button"
            onClick={toggleAudio}
            className="flex items-center gap-2 rounded-full bg-slate-900/70 border border-pink-400/50 px-4 py-2 text-xs md:text-sm text-pink-100 shadow-lg shadow-pink-500/30 hover:bg-pink-500/20 transition-colors"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-pink-400 animate-pulse" />
            {isAudioPlaying ? "Pause music" : hasUserInteracted ? "Play music" : "Tap to play music"}
          </button>
        </div>

        <main className="mx-auto flex max-w-6xl flex-col gap-24 px-4 pb-16 md:gap-32 md:pb-24">
          {/* HERO - Full viewport height, centered */}
          <section id="hero" className="flex min-h-screen items-center justify-center py-8">
            <Hero onStartJourney={handleStartJourney} />
          </section>

          <div ref={journeyRef} className="flex flex-col gap-24 md:gap-32">
            {/* MEMORY GALLERY */}
            <motion.section
              id="memories"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              variants={sectionVariants}
            >
              <Gallery audioRef={audioRef} isAudioPlaying={isAudioPlaying} />
            </motion.section>

            {/* TIMELINE */}
            <motion.section
              id="timeline"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              variants={sectionVariants}
            >
              <Timeline />
            </motion.section>

            {/* LOVE LETTER */}
            <motion.section
              id="letter"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              variants={sectionVariants}
            >
              <Letter />
            </motion.section>

            {/* DAYS COUNTER */}
            <motion.section
              id="counter"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              variants={sectionVariants}
            >
              <Counter />
            </motion.section>

            {/* SURPRISE */}
            <motion.section
              id="surprise"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              variants={sectionVariants}
            >
              <Surprise audioRef={audioRef} isAudioPlaying={isAudioPlaying} />
            </motion.section>
          </div>
        </main>

        <AnimatePresence>
          <Footer />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;

