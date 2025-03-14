import "./ButtonWpp.css";

interface ButtonWppProps {
  texto: string;
}

function ButtonWpp({ texto }: ButtonWppProps) {
  return (
    <a href="https://wa.link/k6kh1v" target="_blank" className="button-wpp">
      <img src="/public/logo-wpp-2.svg" alt="" />
      <p>{texto}</p>
    </a>
  );
}

export default ButtonWpp;
