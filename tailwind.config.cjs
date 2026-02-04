/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Inter'", "system-ui", "sans-serif"]
      },
      colors: {
        blush: {
          50: "#fff1f7",
          100: "#ffe4f0",
          300: "#f9a8d4",
          500: "#f472b6"
        },
        lavender: {
          100: "#f3e8ff",
          300: "#d8b4fe",
          500: "#a855f7"
        }
      },
      backgroundImage: {
        "romantic-gradient":
          "radial-gradient(circle at 0% 0%, rgba(244,114,182,0.25), transparent 55%), radial-gradient(circle at 100% 0%, rgba(129,140,248,0.25), transparent 55%), radial-gradient(circle at 0% 100%, rgba(244,114,182,0.18), transparent 55%), radial-gradient(circle at 100% 100%, rgba(192,132,252,0.18), transparent 55%)"
      }
    }
  },
  plugins: []
};

