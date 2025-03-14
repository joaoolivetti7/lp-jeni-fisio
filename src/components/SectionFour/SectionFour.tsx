import React from 'react';
import ButtonWpp from '../ButtonWpp/ButtonWpp';
import './SectionFour.css';
import Slider from '../Slider/index';

function SectionFour() {

  return (
    <div className="container-section-four">
      <div className="container-title">
        <h1>Nossos Tratamentos</h1>
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