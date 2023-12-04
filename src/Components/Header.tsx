import { useState } from "react";
import styles from "./Styles/Header.module.css";
import mobileStyles from "./Styles/HeaderMobile.module.css";
import ContactIcon from "../assets/contact-icon.svg?react";

export interface isMobileInterface {
  isOpen: boolean;
}

const Header = ({ isOpen }: isMobileInterface) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {isOpen ? (
        <div className={mobileStyles.header}>
          <div
            className={mobileStyles.humburguerIcon}
            onClick={toggleMobileMenu}
          >
            <div
              className={` ${isMenuOpen ? mobileStyles.closeBar1 : ""}`}
            ></div>
            <div
              className={` ${isMenuOpen ? mobileStyles.closeBar2 : ""}`}
            ></div>
            <div
              className={` ${isMenuOpen ? mobileStyles.closeBar3 : ""}`}
            ></div>

            {isMenuOpen && (
              <ul
                className={` ${
                  isMenuOpen ? mobileStyles.open : mobileStyles.close
                }`}
              >
                <span>Navegue</span>

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
                  <a href="#Contact">Contato</a>
                </li>
                <li>
                  <a href="">Baixar Currículo</a>
                </li>
              </ul>
            )}
          </div>

          {isMenuOpen ? (
            ""
          ) : (
            <div className={mobileStyles.headerNameOpen}>
              <a href="/">
                {" "}
                <h1>{"<Giovanna />"}</h1>
              </a>
            </div>
          )}
          {isMenuOpen ? (
            ""
          ) : (
            <div className={mobileStyles.contactIcon}>
              <a href="#Contact">
                <ContactIcon />
              </a>
            </div>
          )}
        </div>
      ) : (
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <div className={styles.list}>
              <div className={styles.headerName}>
                <h1>{"<Giovanna />"}</h1>
              </div>

              <ol>
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
                  <a href="#Contact">Contato</a>
                </li>
                <li>
                  <a href="" className={styles.CvDownloader}>
                    Baixar Currículo
                  </a>
                </li>
              </ol>
            </div>
          </nav>
        </header>
      )}
    </>
  );
};

export default Header;
