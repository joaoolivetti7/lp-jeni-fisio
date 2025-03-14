import "./Header.css";

function Header() {
  return (
    <>
      <div className="container-header">
        <img src="/logo.png" alt="Logo" />
        <div className="container-header-svgs">
          <a href="https://www.instagram.com/fisio.jeniffercristina?igsh=N2YybDg4c2xxMGo5 " target="_blank">
            <img src="/logo-insta.svg" alt="" />
          </a>
          <a href="https://wa.link/k6kh1v" target="_blank">
            <img src="/logo-wpp.svg" alt="" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Header;
