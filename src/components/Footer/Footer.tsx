import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer">
        <img src="/public/logo.png" alt="" />
        <p>
          Copyright © Jeniffer Cristina - Fisioterapia Pélvica – Todos os
          direitos reservados.
        </p>
        <div className="svgs">
            <a href="/public/logo-insta.svg">
              <img className='svg' src="/public/logo-insta.svg" alt="" />
            </a>
            <a href="">
              <img className='svg' src="/public/logo-wpp.svg" alt="" />
            </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
