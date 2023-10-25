import styles from "./Styles/Presentation.module.css";
const Presentation = () => {
  return (
    <>
      <section>
        <span>Olá, me chamo</span>
        <h1 className={styles.title}>Giovanna Santos.</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
          praesentium dolores repellat odit, fuga dolore, similique illum
          dolorum ratione ducimus temporibus dicta soluta iure eligendi odio
          iusto. Similique, libero atque.
        </p>
      </section>
    </>
  );
};

export default Presentation;
