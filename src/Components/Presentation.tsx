import styles from "./Styles/Presentation.module.css";
import GithubIcon from "../assets/git-presentation.svg?react";
import LinkedinIcon from "../assets/linkedin-presentation.svg?react";
import { isMobileInterface } from "./Header";

const Presentation = ({ isOpen }: isMobileInterface) => {
  return (
    <>
      <section className={`${styles.containerPresentation} newSection`}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            Sua próxima desenvolvedora {""}
            <br />
            <span className={styles.selectedText}>Front-End!</span>
          </h1>
          <p>
            Me chamo Giovanna Santos, 19 anos, sou uma desenvolvedora Front-End
            com foco em ReactJs. {isOpen ? "" : <br />} Saiba mais sobre mim
          </p>
          <div className={styles.links}>
            <a
              href="https://github.com/GioPanda"
              target="_blank"
              className={styles.github}
            >
              <span>
                <GithubIcon />
              </span>
              <strong>Github</strong>
            </a>

            <a
              href="https://www.linkedin.com/in/giovanna-santos-046443255/"
              target="_blank"
              className={styles.linkedin}
            >
              <span>
                <LinkedinIcon />
              </span>
              <strong>Linkedin</strong>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Presentation;
