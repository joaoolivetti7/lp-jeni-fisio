import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ButtonWpp from "../ButtonWpp/ButtonWpp";
import "./SectionFive.css";

function SectionFive() {
  const controlsText = useAnimation();
  const controlsImage = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controlsText.start({ y: 40, opacity: 1 });
      controlsImage.start({ y: 0, opacity: 1 });
    }
  }, [controlsText, controlsImage, inView]);

  return (
    <div className="container-section-five" ref={ref}>
      <div className="container-title">
        <h1>Sobre Mim</h1>
      </div>
      <motion.div
        className="container-text"
        initial={{ y: 0, opacity: 0 }}
        animate={controlsText}
        transition={{ duration: 1 }}
      >
        <p className="text">
          Sou Jeniffer Cristina, fisioterapeuta especializada na saúde da
          mulher. Minha missão é proporcionar bem-estar e qualidade de vida para
          mulheres em diferentes fases da vida. A fisioterapia pélvica é mais do
          que uma profissão para mim: é uma paixão. Acredito que toda mulher
          merece viver sem dores e limitações, e meu trabalho é oferecer o
          suporte necessário para que isso aconteça.
        </p>
        <ButtonWpp texto="Falar com Especialista!" />
      </motion.div>
      <motion.div
        className="container-image"
        initial={{ y: 50, opacity: 0 }}
        animate={controlsImage}
        transition={{ duration: 1 }}
      >
        <img src="/foto-fisio-2.png" alt="Foto Fisio" />
      </motion.div>
    </div>
  );
}

export default SectionFive;
