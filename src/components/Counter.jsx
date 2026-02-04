// Days counter between wedding date and today
// Our real wedding date: 05 Feb 2022
const WEDDING_DATE = new Date("2022-02-05T00:00:00");

function Counter() {
  const today = new Date();
  const diffMs = today.getTime() - WEDDING_DATE.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  return (
    <div className="flex justify-center">
      <div className="flex w-full max-w-xl flex-col items-center gap-4 rounded-3xl border border-pink-200/30 bg-slate-900/70 px-6 py-8 text-center shadow-xl shadow-pink-500/30">
        <p className="text-xs uppercase tracking-[0.25em] text-pink-200/80">
          Chapter IV
        </p>
        <h2 className="font-display text-2xl text-pink-100 md:text-3xl">
          Our Days Together
        </h2>
        <p className="text-sm text-pink-100/80 md:text-base">
          We promised forever on{" "}
          <span className="font-semibold text-pink-200">
            5th February 2022
          </span>
          , and since then…
        </p>

        <div className="mt-2 rounded-2xl bg-gradient-to-r from-pink-500 via-rose-400 to-purple-500 px-6 py-4 shadow-lg shadow-pink-500/40">
          <p className="text-sm font-medium text-slate-950 md:text-base">
          every day with you still feels like
          </p>
          <p className="mt-1 font-display text-4xl text-slate-950 md:text-5xl">
          Day 1 ❤️
          </p>
        </div>

        <p className="max-w-md text-xs text-pink-100/70 md:text-sm">
          Every one of those days has had{" "}
          <span className="font-semibold text-pink-200">
            a piece of you in it
          </span>
          —in the laughter, the chaos, the small routines, and the quiet
          moments that only we know.
        </p>
      </div>
    </div>
  );
}

export default Counter;

