import { motion } from "framer-motion";

const EVENTS = [
  {
    title: "We started dating",
    date: "Few years ago",
    description:
      "Somewhere between random conversations, late-night chats, and silly fights, two best friends slowly turned into something more."
  },
  {
    title: "Our wedding day",
    date: "05 Feb 2022",
    description:
      "The day we promised to be each other’s favorite person—through every sunrise, storm, and sleepy Sunday."
  },
  {
    title: "Our first trip together",
    date: "Dec 2024",
    description:
      "From airport selfies to late-night talks, every mile we travelled turned into a memory I never want to forget."
  },
  {
    title: "Became parents",
    date: "07 Feb 2024",
    description:
      "Our hearts grew bigger the day we held our little world in our arms. You became the most beautiful mother."
  },
  {
    title: "Still falling in love every day",
    date: "Every single day",
    description:
      "From small gestures to big dreams, I keep finding new reasons to love you a little more than yesterday."
  }
];

function Timeline() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-pink-200/80">
          Chapter II
        </p>
        <h2 className="font-display text-3xl text-pink-100 md:text-4xl">
          Our Love Timeline
        </h2>
        <p className="mx-auto max-w-2xl text-sm text-pink-100/80 md:text-base">
          A few of the{" "}
          <span className="font-semibold text-pink-200">
            milestones that shaped us
          </span>
          —but the best part is still everything that’s yet to come.
        </p>
      </div>

      <div className="relative mx-auto max-w-3xl">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-gradient-to-b from-pink-300 via-pink-500/40 to-purple-500 md:block" />

        <ol className="space-y-8">
          {EVENTS.map((event, index) => (
            <li key={event.title} className="relative flex gap-4 md:gap-6">
              {/* Dot */}
              <div className="relative mt-1.5 hidden md:flex md:flex-col md:items-center">
                <span className="relative flex h-4 w-4 items-center justify-center">
                  <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-pink-400/60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-300" />
                </span>
              </div>

              <motion.div
                className="flex-1 rounded-2xl border border-pink-200/20 bg-slate-900/70 p-4 shadow-md shadow-pink-500/20 md:p-5"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
              >
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h3 className="font-display text-lg text-pink-100 md:text-xl">
                    {event.title}
                  </h3>
                  <p className="text-xs font-medium uppercase tracking-wide text-pink-200/80">
                    {event.date}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-pink-100/80">
                  {event.description}
                </p>
              </motion.div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Timeline;

