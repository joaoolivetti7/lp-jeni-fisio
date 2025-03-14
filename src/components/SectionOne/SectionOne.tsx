import ButtonWpp from "../ButtonWpp/ButtonWpp.tsx";
import "./SectionOne.css";

function SectionOne() {
  return (
    <>
      <div className="container-section-one">
        <div className="container-text">
          <h1>
            Saúde Íntima e <br /> Bem-Estar Feminino
          </h1>
          <p className="text">
            Cuidar de si mesma é um ato de amor. Agende sua consulta e descubra
            como a fisioterapia pélvica pode te ajudar!
          </p>
          <ButtonWpp texto="Falar com Especialista!" />
        </div>
        
        <div className="container-image">
          <img src="/public/foto-fisio.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default SectionOne;
