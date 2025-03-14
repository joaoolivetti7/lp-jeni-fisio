import ButtonWpp from "../ButtonWpp/ButtonWpp.tsx";
import "./SectionThree.css";

function SectionThree() {
  return (
    <div className="container-section-three">
      <div className="decoration">
        <div className="decoration-left">
          <img src="/public/desenho-left.png" alt="" />
        </div>
        <div className="decoration-right">
          <img src="/public/desenho-right.png" alt="" />
        </div>
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
