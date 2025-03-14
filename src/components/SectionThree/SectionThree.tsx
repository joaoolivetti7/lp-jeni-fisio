import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ButtonWpp from "../ButtonWpp/ButtonWpp";
import "./SectionThree.css";

function SectionThree() {
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controlsLeft.start({ x: 0, opacity: 1 });
      controlsRight.start({ x: 0, opacity: 1 });
    }
  }, [controlsLeft, controlsRight, inView]);

  return (
    <div className="container-section-three" ref={ref}>
      <div className="decoration">
        <motion.div
          className="decoration-left"
          initial={{ y: 150, x: -100, opacity: 0 }}
          animate={controlsLeft}
          transition={{ duration: 1 }}
        >
          <img src="/public/desenho-left.png" alt="" />
        </motion.div>
        <motion.div
          className="decoration-right"
          initial={{ y: 250, x: 100, opacity: 0 }}
          animate={controlsRight}
          transition={{ duration: 1 }}
        >
          <img src="/public/desenho-right.png" alt="" />
        </motion.div>
      </div>
      <h1>Passo a Passo da Sua Sessão</h1>
      <div className="container-steps">
        <img src="/public/steps.png" alt="" />
      </div>
      <ButtonWpp texto="Agendar sua sessão!" />
    </div>
  );
}

export default SectionThree;
