import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer">
        <img src="/logo.png" alt="" />
        <p>
          Copyright © Jeniffer Cristina - Fisioterapia Pélvica – Todos os
          direitos reservados.
        </p>
        <div className="svgs">
            <a href="/logo-insta.svg">
              <img className='svg' src="/logo-insta.svg" alt="" />
            </a>
            <a href="">
              <img className='svg' src="/logo-wpp.svg" alt="" />
            </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
