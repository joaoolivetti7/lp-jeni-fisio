import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";

function onSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <>
      <Slider {...settings}>
        <div className="slide">
          <img src="/inc-urinaria.png" alt="" />
        </div>
        <div className="slide">
          <img src="/dis-sexual.png" alt="" />
        </div>
        <div className="slide">
          <img src="/gestacao.png" alt="" />
        </div>
        <div className="slide">
          <img src="/pos-parto.png" alt="" />
        </div>
        <div className="slide">
          <img src="/endometriose.png" alt="" />
        </div>
        <div className="slide">
          <img src="/ban-terapeutica.png" alt="" />
        </div>
        <div className="slide">
          <img src="/aurico.png" alt="" />
        </div>
      </Slider>
    </>
  );
}

export default onSlider;
