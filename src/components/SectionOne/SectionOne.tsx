import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ButtonWpp from "../ButtonWpp/ButtonWpp";
import "./SectionOne.css";

function SectionOne() {
  const controlsH1 = useAnimation();
  const controlsP = useAnimation();
  const controlsImage = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controlsH1.start({ x: 0, opacity: 1 });
      controlsP.start({ opacity: 1 });
      controlsImage.start({ y: 0, opacity: 1 });
    }
  }, [controlsH1, controlsP, controlsImage, inView]);

  return (
    <div className="container-section-one" ref={ref}>
      <div className="container-text">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          animate={controlsH1}
          transition={{ duration: 1 }}
        >
          Saúde Íntima e <br /> Bem-Estar Feminino
        </motion.h1>
        <motion.p
          className="text"
          initial={{ opacity: 0 }}
          animate={controlsP}
          transition={{ duration: 1 }}
        >
          Cuidar de si mesma é um ato de amor. Agende sua consulta e descubra
          como a fisioterapia pélvica pode te ajudar!
        </motion.p>
        <ButtonWpp texto="Falar com Especialista!" />
      </div>
      <motion.div
              className="container-image"
              initial={{ y: 50, opacity: 0 }}
              animate={controlsImage}
              transition={{ duration: 1 }}
            >
        <img src="/foto-fisio.png" alt="Foto Fisio" />
      </motion.div>
    </div>
  );
}

export default SectionOne;