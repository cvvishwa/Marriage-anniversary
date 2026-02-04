import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

// Our own special memories 💕
import img1 from "../../IMG_20250911_195956.jpg";
import img2 from "../../IMG-20250322-WA0010.jpg";
import img3 from "../../IMG20250531103045.jpg";
import img4 from "../../IMG20250531163203.jpg";
import img5 from "../../IMG20250813180306.jpg";
import img6 from "../../IMG20251225164037.jpg";
import img7 from "../../IMG_20260125_151733.jpg";
import img8 from "../../IMG20250421201547.jpg";
const IMAGES = [
  {
    id: 1,
    src: img1,
    alt: "A beautiful moment from our journey together"
  },
  {
    id: 2,
    src: img2,
    alt: "One of our happiest days"
  },
  {
    id: 3,
    src: img3,
    alt: "Candid smile I never want to forget"
  },
  {
    id: 4,
    src: img4,
    alt: "Just us, perfectly imperfect"
  },
  {
    id: 5,
    src: img5,
    alt: "A memory that still makes me smile"
  },
  {
    id: 6,
    src: img6,
    alt: "A moment I would relive again and again"
  },
  {
    id: 7,
    src: img7,
    alt: "Another precious memory together"
  },
  {
    id: 8,
    src: img8,
    alt: "A special moment captured forever"
  }
];

function Gallery({ audioRef, isAudioPlaying }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const videoRef = useRef(null);
  const modalRef = useRef(null);
  const gallerySectionRef = useRef(null);
  const wasMusicPlayingRef = useRef(false);

  // Helper function to check if file is a video
  const isVideo = (src) => {
    if (!src) return false;
    const videoExtensions = ['.mp4', '.webm', '.ogg', '.mov', '.avi'];
    return videoExtensions.some(ext => src.toLowerCase().includes(ext));
  };

  // Auto-scroll to gallery section when video modal opens, then center on play
  // Also handle music pause/resume for videos
  useEffect(() => {
    if (selectedImage && isVideo(selectedImage.src)) {
      // Scroll to gallery section when video opens
      if (gallerySectionRef.current) {
        gallerySectionRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }

      // When video starts playing, pause music and ensure it's centered
      if (videoRef.current) {
        const video = videoRef.current;
        
        const handlePlay = () => {
          // Pause background music when video plays
          if (audioRef?.current && isAudioPlaying) {
            wasMusicPlayingRef.current = true;
            audioRef.current.pause();
          }
          
          // Ensure the modal is centered in viewport
          if (gallerySectionRef.current) {
            gallerySectionRef.current.scrollIntoView({ 
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
      }
    } else if (!selectedImage) {
      // When modal closes, resume music if it was playing
      if (audioRef?.current && wasMusicPlayingRef.current) {
        audioRef.current.play().catch(() => {
          // Ignore autoplay errors
        });
        wasMusicPlayingRef.current = false;
      }
    }
  }, [selectedImage, audioRef, isAudioPlaying]);

  return (
    <div ref={gallerySectionRef} className="space-y-8">
      <div className="text-center space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-pink-200/80">
          Chapter I
        </p>
        <h2 className="font-display text-3xl text-pink-100 md:text-4xl">
          Our Beautiful Memories
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-pink-100/80 md:text-base">
          Just a tiny peek into the{" "}
          <span className="font-semibold text-pink-200">
            worlds we have created together
          </span>
          —the smiles, the journeys, and the quiet moments that mean
          everything.
        </p>
      </div>

      {/* Responsive photo grid */}
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {IMAGES.map((image, index) => (
          <motion.button
            key={image.id}
            type="button"
            onClick={() => setSelectedImage(image)}
            className="group relative overflow-hidden rounded-2xl border border-pink-200/20 bg-slate-900/60 shadow-lg shadow-pink-500/20 focus:outline-none focus:ring-2 focus:ring-pink-400/70"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.05 * index }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-32 w-full object-cover transition duration-500 group-hover:scale-105 md:h-40 lg:h-48"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-60 group-hover:opacity-80" />
            <div
              className="absolute inset-x-3 bottom-3 flex items-center justify-between text-[0.65rem] text-pink-50/90"
              onClick={() => setSelectedImage(image)}
            >
              <span className="truncate">{image.alt}</span>
              <span className="rounded-full bg-slate-950/70 px-2 py-0.5 text-[0.6rem] uppercase tracking-wide text-pink-200">
                tap to view
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox modal (rendered at top-level so it always appears above everything) */}
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => {
                  // Resume music if it was playing before video
                  if (audioRef?.current && wasMusicPlayingRef.current) {
                    audioRef.current.play().catch(() => {
                      // Ignore autoplay errors
                    });
                    wasMusicPlayingRef.current = false;
                  }
                  setSelectedImage(null);
                }}
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
                  {isVideo(selectedImage.src) ? (
                    <video
                      ref={videoRef}
                      src={selectedImage.src}
                      controls
                      className="max-h-[50vh] w-full object-contain"
                      autoPlay
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="max-h-[50vh] w-full object-contain"
                    />
                  )}
                  <div className="flex items-center justify-between gap-4 px-4 py-3 text-xs text-pink-100/80">
                    <p className="truncate">{selectedImage.alt}</p>
                    <button
                      type="button"
                      onClick={() => {
                        if (videoRef.current) {
                          videoRef.current.pause();
                        }
                        // Resume music if it was playing before video
                        if (audioRef?.current && wasMusicPlayingRef.current) {
                          audioRef.current.play().catch(() => {
                            // Ignore autoplay errors
                          });
                          wasMusicPlayingRef.current = false;
                        }
                        setSelectedImage(null);
                      }}
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

export default Gallery;

