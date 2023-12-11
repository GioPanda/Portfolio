import styled from "styled-components";
import MailIcon from "../assets/Footer/mail.png";
import WppIcon from "../assets/Footer/whatsapp.png";
import LinkedinIcon from "../assets/Footer/linkedin.png";
import Curriculo from "../assets/curriculo.pdf";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 100%;

  z-index: 0;
  border-radius: 0.3rem;

  @media screen and (max-height: 700px) {
    margin-top: 4rem;
  }

  @media screen and (max-height: 500px) {
    margin-top: 8rem;
  }

  @media screen and (max-height: 400px) {
    margin-top: 10rem;

    padding-bottom: 4rem;
    background-color: gainsboro;
  }

  .site-footer {
    color: black;
    padding: 0 0 0 0;

    width: 100%;
  }

  .container {
    max-width: 100%;
    margin: 0 auto;

    margin-top: 2rem;

    background: radial-gradient(
      ellipse at center,
      rgba(211, 240, 247, 0.4) 0%,
      rgba(211, 240, 247, 0.1) 70%,
      rgba(211, 240, 247, 0) 100%
    );
  }

  .footer-columns {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .footer-column {
    flex-basis: 30%;
    margin-bottom: 20px;
  }

  .title {
    .containerOtherPage > .wrapper > .photo {
      margin: 2rem 0 2rem 0;

      height: 5rem;
      width: 100%;
    }

    margin: 0;
  }

  .social-icons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .social-icon > img {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;

    margin-right: 20px;
    margin-top: 2rem;
    transition: 0.3s ease-in-out;
    padding-left: 2rem;
  }

  .social-icon:hover > img {
    scale: 1.2;
  }

  /* Mobile responsiveness */
  @media screen and (max-width: 768px) {
    padding-bottom: 25rem;
    .footer-columns {
      flex-direction: column;
    }

    .footer-column {
      flex-basis: 100%;
    }

    .footer-columns ul {
      margin-bottom: 3rem;
    }
  }
  .footer-column {
    flex-basis: 30%;
    margin-bottom: 20px;
    position: relative; /* To position the Connect with Us element */
    text-align: center;
  }

  .footer-column h3 {
    margin-bottom: 10px;
    border-bottom: 1px solid #fff;
  }

  .footer-column ul {
    list-style: none;
    padding: 0;

    margin-top: 4rem;
  }

  .footer-column ul li {
    margin-bottom: 1rem;
  }

  .footer-column ul li a {
    color: black;
    text-decoration: none;
    display: inline-block;
    position: relative;
    transition: color 0.3s;

    font-family: var(--font-latobold);

    border: 2px solid;

    width: 8rem;

    padding: 0.5rem 2rem;
    border-radius: 6px;
    transition: 0.3s ease-in-out;
  }

  .footer-column ul li a:hover {
    animation: none;
    text-decoration: underline;
    background-color: rgba(198, 244, 212, 0.2);
    scale: 1.1;
    margin: 0.3rem 0;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-columns">
            <div className="footer-column">
              <h3 className="title">Navegue</h3>
              <ul>
                <li>
                  <a href="#About">Sobre</a>
                </li>
                <li>
                  <a href="#Skills">Habilidades</a>
                </li>
                <li>
                  <a href="#Projects">Projetos</a>
                </li>
                <li>
                  <a href={Curriculo} download>
                    Currículo
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="title">Projetos</h3>
              <ul>
                <li>
                  <a href="#">Nomes Brasileiros</a>
                </li>
                <li>
                  <a href="#">Vagas Dev</a>
                </li>
                <li>
                  <a href="#">Streaming Downloader</a>
                </li>
                <li>
                  <a href="#">My Translator</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="title">Contato</h3>

              <div className="social-icons">
                <a
                  href="mailto:giovannasantosmrx@gmail.com"
                  className="social-icon"
                  target="_blank"
                >
                  <img src={MailIcon} alt="" />
                </a>
                <a
                  href="https://www.linkedin.com/in/giovanna-santos-046443255/"
                  className="social-icon"
                  target="_blank"
                >
                  <img src={LinkedinIcon} alt="" />
                </a>
                <a
                  href="https://wa.me/5511999692388"
                  className="social-icon"
                  target="_blank"
                >
                  <img src={WppIcon} alt="11 999692388" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterWrapper>
  );
};
export default Footer;
