import { motion } from "framer-motion";

function Footer() {
  return (
    <motion.footer
      className="mt-10 border-t border-pink-200/10 py-6 text-center text-xs text-pink-100/70"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <p>
        Made with <span className="text-pink-400">❤️</span> by{" "}
        <span className="font-semibold text-pink-200">Chandra</span> for{" "}
        <span className="font-semibold text-pink-200">Pooja</span>
      </p>
      <p className="mt-1 text-[0.68rem] text-pink-100/60">
        Every line of code here is a small &quot;I love you&quot;.
      </p>
    </motion.footer>
  );
}

export default Footer;

