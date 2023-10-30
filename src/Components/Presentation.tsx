import styles from "./Styles/Presentation.module.css";
const Presentation = () => {
  return (
    <>
      <section className={`${styles.container} newSection`}>
        <h1 className={styles.title}>
          Sua próxima desenvolvedora {""}
          <span className={styles.selectedText}>Front-End!</span>
        </h1>
        <p>
          Me chamo Giovanna Santos, 19 anos, sou uma desenvolvedora <br />
          Front-End com foco em ReactJs. Saiba mais sobre mim
        </p>
      </section>
    </>
  );
};

export default Presentation;
