import { motion } from "framer-motion";

function Letter() {
  return (
    <div className="flex justify-center">
      <motion.div
        className="relative w-full max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
      >
        <div className="absolute -inset-0.5 rounded-[2.25rem] bg-gradient-to-br from-pink-400/60 via-rose-300/40 to-purple-500/60 opacity-70 blur-xl" />
        <div className="relative overflow-hidden rounded-[2.25rem] border border-pink-100/40 bg-gradient-to-br from-slate-950/80 via-slate-900/90 to-slate-950/80 px-8 py-8 shadow-2xl shadow-pink-500/40 md:px-10 md:py-10">
          <div className="mb-4 flex items-center justify-between text-xs text-pink-100/70">
            <span className="rounded-full bg-slate-900/80 px-3 py-1 uppercase tracking-[0.2em]">
              Chapter III
            </span>
            <span className="text-[0.65rem] uppercase tracking-[0.25em] text-pink-200">
              Love Letter
            </span>
          </div>

          <h2 className="mb-4 font-display text-2xl text-pink-100 md:text-3xl">
            A little note from my heart
          </h2>

          <div className="space-y-3 text-sm leading-relaxed text-pink-50/90 md:text-base">
            <p>Pooja,</p>
            <p>
              Thank you for being my partner, my best friend, and my forever
              home. Life with you is my favorite journey. Every day with you
              feels special. I love you more than words can explain. Happy
              Anniversary ❤️
            </p>
          </div>

          <div className="mt-6 flex items-center justify-between text-xs text-pink-100/80">
            <p>
              Always and forever,
              <br />
              <span className="font-semibold text-pink-200">CV</span>
            </p>
            <p className="text-right text-[0.7rem] uppercase tracking-[0.25em] text-pink-200/90">
              You + Me
              <br />
              <span className="text-pink-100">For a lifetime</span>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Letter;

