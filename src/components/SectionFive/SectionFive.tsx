import ButtonWpp from "../ButtonWpp/ButtonWpp";
import "./SectionFive.css";

function SectionFive() {
  return (
    <div className="container-section-five">
        <div className="container-title">
          <h1>Sobre Mim</h1>
        </div>
      <div className="container-text">
        <p className="text">Sou Jeniffer Cristina, fisioterapeuta especializada na saúde da mulher. Minha missão é proporcionar bem-estar e qualidade de vida para mulheres em diferentes fases da vida. A fisioterapia pélvica é mais do que uma profissão para mim: é uma paixão. Acredito que toda mulher merece viver sem dores e limitações, e meu trabalho é oferecer o suporte necessário para que isso aconteça.</p>
        <ButtonWpp texto="Falar com Especialista!" />
      </div>
      <div className="container-image">
        <img src="/public/foto-fisio.png" alt="" /> 
      </div>
    </div>
  );
}

export default SectionFive