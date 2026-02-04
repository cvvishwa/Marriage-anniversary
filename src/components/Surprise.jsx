import { useEffect, useState, useRef } from "react";
import { createPortal } from "react-dom";
import Confetti from "react-confetti";
import { AnimatePresence, motion } from "framer-motion";

function useWindowSize() {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

function Surprise({ audioRef, isAudioPlaying }) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const videoRef = useRef(null);
  const modalRef = useRef(null);
  const surpriseSectionRef = useRef(null);
  const wasMusicPlayingRef = useRef(false);
  const { width, height } = useWindowSize();

  const triggerSurprise = () => {
    setShowConfetti(true);
    setShowModal(true);
    // Stop confetti after a short celebration
    setTimeout(() => setShowConfetti(false), 4500);
  };

  const closeModal = () => {
    setShowModal(false);
    // Pause video when closing
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    // Resume music if it was playing before video
    if (audioRef?.current && wasMusicPlayingRef.current) {
      audioRef.current.play().catch(() => {
        // Ignore autoplay errors
      });
      wasMusicPlayingRef.current = false;
    }
  };

  // Auto-play video when modal opens and scroll to center
  useEffect(() => {
    if (showModal) {
      // Scroll to surprise section when modal opens
      if (surpriseSectionRef.current) {
        surpriseSectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }

      // Auto-play video
      if (videoRef.current) {
        videoRef.current.play().catch((err) => {
          console.log("Video autoplay prevented:", err);
        });
      }
    }
  }, [showModal]);

  // Handle video play/pause/end events and music control
  useEffect(() => {
    if (showModal && videoRef.current) {
      const video = videoRef.current;
      
      const handlePlay = () => {
        // Pause background music when video plays
        if (audioRef?.current && isAudioPlaying) {
          wasMusicPlayingRef.current = true;
          audioRef.current.pause();
        }
        
        // Scroll to surprise section to center the modal
        if (surpriseSectionRef.current) {
          surpriseSectionRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      };

      const handlePause = () => {
        // Resume music when video is paused (if it was playing before)
        if (audioRef?.current && wasMusicPlayingRef.current) {
          audioRef.current.play().catch(() => {
            // Ignore autoplay errors
          });
          wasMusicPlayingRef.current = false;
        }
      };

      const handleEnded = () => {
        // Resume music when video ends (if it was playing before)
        if (audioRef?.current && wasMusicPlayingRef.current) {
          audioRef.current.play().catch(() => {
            // Ignore autoplay errors
          });
          wasMusicPlayingRef.current = false;
        }
      };

      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handleEnded);
      
      return () => {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleEnded);
      };
    } else if (!showModal) {
      // When modal closes, resume music if it was playing
      if (audioRef?.current && wasMusicPlayingRef.current) {
        audioRef.current.play().catch(() => {
          // Ignore autoplay errors
        });
        wasMusicPlayingRef.current = false;
      }
    }
  }, [showModal, audioRef, isAudioPlaying]);

  return (
    <div ref={surpriseSectionRef} className="relative flex flex-col items-center gap-6 text-center">
      <p className="text-xs uppercase tracking-[0.3em] text-pink-200/80">
        Chapter V
      </p>
      <h2 className="font-display text-3xl text-pink-100 md:text-4xl">
        A Little Surprise For You
      </h2>
      <p className="max-w-xl text-sm text-pink-100/80 md:text-base">
        Because you deserve more than just words on a screen—you deserve{" "}
        <span className="font-semibold text-pink-200">
          moments that feel like magic
        </span>
        .
      </p>

      <button
        type="button"
        onClick={triggerSurprise}
        className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-500 px-10 py-4 text-sm font-semibold text-slate-950 shadow-xl shadow-pink-500/40 transition hover:translate-y-0.5 hover:shadow-pink-500/60"
      >
        <span className="text-lg">Click for a Surprise 🎁</span>
        <span className="rounded-full bg-slate-950/10 px-3 py-1 text-[0.7rem] uppercase tracking-[0.2em] text-slate-950/80 group-hover:bg-slate-950/20">
          For you
        </span>
      </button>

      {/* Confetti overlay */}
      <AnimatePresence>
        {showConfetti && (
          <Confetti
            width={width}
            height={height}
            numberOfPieces={250}
            recycle={false}
          />
        )}
      </AnimatePresence>

      {/* Surprise modal (rendered at top-level like Gallery) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {showModal && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeModal}
              >
                <motion.div
                  ref={modalRef}
                  className="relative mx-4 max-w-lg overflow-hidden rounded-2xl border border-pink-200/30 bg-slate-950/90 shadow-2xl shadow-pink-500/40"
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.9, opacity: 0, y: 20 }}
                  transition={{ type: "spring", stiffness: 180, damping: 18 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="px-4 pt-4 text-center">
                    <p className="text-xs uppercase tracking-[0.3em] text-pink-200/80">
                      Surprise
                    </p>
                    <h3 className="mt-2 font-display text-xl text-pink-100 md:text-2xl">
                      Last year was an amazing year ❤️
                    </h3>
                  </div>

                  <div className="mt-4 w-full overflow-hidden bg-black">
                    <video
                      ref={videoRef}
                      src="/4th wedding anniversary reel.mp4"
                      className="max-h-[50vh] w-full object-contain"
                      controls
                      autoPlay
                      playsInline
                      preload="auto"
                      onError={(e) => {
                        console.error("Video error:", e);
                        console.log("Video src:", e.target.src);
                      }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="flex items-center justify-between gap-4 px-4 py-3 text-xs text-pink-100/80">
                    <p className="truncate">Happy 4th Wedding Anniversary ❤️</p>
                    <button
                      type="button"
                      onClick={closeModal}
                      className="rounded-full bg-pink-500/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wide text-pink-100 hover:bg-pink-500/35 whitespace-nowrap"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}

export default Surprise;

