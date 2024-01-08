import styles from "../Components/Styles/OtherPage.module.css";
import AboutImage from "../assets/AboutMe.png";
const OtherPage = () => {
  return (
    <>
      <div className={`${styles.containerOtherPage} newSection`} id="About">
        <h1 className={`${styles.title} title`}>Sobre mim</h1>

        <div className={styles.wrapper}>
          <div className={styles.text}>
            <p>
   Me chamo Giovanna Santos, sou uma desenvolvedora front-end apaixonada pela criação de experiências web excepcionais. Minha jornada na programação começou aos 12 anos, explorando inicialmente o mundo do PHP. Em 2022, decidi retomar minha jornada, mas desta vez com foco em JavaScript/TypeScript e React.

            </p>
            <p>
              Atualmente, estou cursando o Bacharelado em Engenharia de
              Software, onde estou aprimorando minhas habilidades e
              conhecimentos para criar soluções eficientes. Ao longo dessa
              jornada, desenvolvi projetos empolgantes que destacam minhas
              habilidades front-end.
            </p>
            <p>
              Se você procura uma desenvolvedora front-end comprometida, entre
              em contato.
            </p>
          </div>

          <div className={styles.photo}>
            <div className={styles.image}>
              <img src={AboutImage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OtherPage;
