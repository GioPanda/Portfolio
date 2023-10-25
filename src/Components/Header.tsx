import styles from "./Styles/Header.module.css";
import Logo from "../assets/circle-heat-svgrepo-com.svg?react";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.logo}>
            <Logo />
          </div>

          <div className={styles.list}>
            <ol>
              <li>
                <a href="/">Sobre</a>
              </li>
              <li>
                <a href="/">Habilidades</a>
              </li>
              <li>
                <a href="/">Projetos</a>
              </li>
              <li>
                <a href="/">Contato</a>
              </li>
            </ol>
          </div>
          <button className={styles.button}>Currículo</button>
        </nav>
      </header>
    </>
  );
};

export default Header;
