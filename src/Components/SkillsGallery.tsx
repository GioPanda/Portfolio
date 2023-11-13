import GitHub from "../assets/skills/GitHub-img.svg?react";
import Git from "../assets/skills/Git-img.svg?react";
import JsImg from "../assets/skills/Js-img.svg?react";
import TsImg from "../assets/skills/Ts-img.svg?react";
import ReactImg from "../assets/skills/React-img.svg?react";
import CssImg from "../assets/skills/Css-img.svg?react";
import HtmlImg from "../assets/skills/Html-img.svg?react";
import LinuxImg from "../assets/skills/Linux-img.svg?react";

import styles from "./Styles/SkillsGallery.module.css";
import SkillCard from "./SkillCard";

const SkillsGallery = () => {
  return (
    <>
      <section className={`${styles.containerSkills} newSection`} id="Skills">
        <h1 className={styles.title}>Habilidades</h1>
        <div className={styles.firstDiv}>
          <SkillCard skill={<ReactImg />} skillName="React" />

          <SkillCard skill={<JsImg />} skillName="JavaScript" />
          <SkillCard skill={<TsImg />} skillName="TypeScript" />

          <SkillCard skill={<CssImg />} skillName="CSS" />
        </div>

        <div className={styles.secundDiv}>
          {" "}
          <SkillCard skill={<HtmlImg />} skillName="HTML" />
          <SkillCard skill={<Git />} skillName="Git" />
          <SkillCard skill={<GitHub />} skillName="GitHub" />
          <SkillCard skill={<LinuxImg />} skillName="Linux" />
        </div>
      </section>
    </>
  );
};

export default SkillsGallery;
