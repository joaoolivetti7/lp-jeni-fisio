import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ButtonWpp from "../ButtonWpp/ButtonWpp";
import "./SectionFour.css";
import Slider from "../Slider/index";

function SectionFour() {
  const controlsH1 = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Ajuste o valor conforme necessário
  });

  useEffect(() => {
    if (inView) {
      controlsH1.start({ x: 0, opacity: 1 });
    }
  }, [controlsH1, inView]);

  return (
    <div className="container-section-four" ref={ref}>
      <div className="container-title">
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={controlsH1}
          transition={{ duration: 1 }}
        >
          Nossos Tratamentos
        </motion.h1>
      </div>
      <div className="container-slider">
        <Slider />
      </div>
      <div className="button-wpp">
        <ButtonWpp texto="Agendar sua sessão!" />
      </div>
    </div>
  );
}

export default SectionFour;
