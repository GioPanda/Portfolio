import styles from "./Styles/Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.list}>
            <div className={styles.headerName}>
              <h1>{"<Giovanna />"}</h1>
            </div>
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
              <li>
                <a href="" className={styles.CvDownloader}>
                  Baixar Currículo
                </a>
              </li>
            </ol>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
