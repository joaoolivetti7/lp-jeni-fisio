import { motion } from "framer-motion";
import "./ButtonWpp.css";

interface ButtonWppProps {
  texto: string;
}

function ButtonWpp({ texto }: ButtonWppProps) {
  return (
    <motion.a
      href="https://wa.link/k6kh1v"
      target="_blank"
      className="button-wpp"
      animate={{ scale: [0.95, 1, 0.95] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <img src="/logo-wpp-2.svg" alt="WhatsApp Logo" />
      <p>{texto}</p>
    </motion.a>
  );
}

export default ButtonWpp;
