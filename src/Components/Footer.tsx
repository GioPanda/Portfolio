import styled from "styled-components";
import MailIcon from "../assets/Footer/mail.png";
import WppIcon from "../assets/Footer/whatsapp.png";
import LinkedinIcon from "../assets/Footer/linkedin.png";

const FooterWrapper = styled.footer`
  width: 100%;
  height: 100%;

  border-radius: 0.3rem;

  padding-bottom: 4rem;

  @media screen and (max-height: 700px) {
    margin-top: 4rem;
  }

  @media screen and (max-height: 500px) {
    margin-top: 8rem;
  }

  @media screen and (max-height: 400px) {
    margin-top: 10rem;
  }

  .site-footer {
    color: black;
    padding: 0 0 0 0;

    width: 100%;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
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
    .footer-columns {
      flex-direction: column;
    }

    .footer-column {
      flex-basis: 100%;
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
                  <a href="">Currículo</a>
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
                <a href="#" className="social-icon">
                  <img src={MailIcon} alt="" />
                </a>
                <a href="#" className="social-icon">
                  <img src={LinkedinIcon} alt="" />
                </a>
                <a href="#" className="social-icon">
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
