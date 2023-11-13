import React from "react";
import styles from "./Styles/SkillCard.module.css";

import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 99, // max tilt rotation (degrees)
  perspective: 300, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

interface SkillCardProps {
  skill: React.ReactNode;
  skillName: string;
}

const SkillCard = ({ skill, skillName }: SkillCardProps) => {
  return (
    <>
      <div className={`${styles.container}`}>
        <Tilt
          options={defaultOptions}
          onMouseEnter={() => console.log("enter")}
          className={`${styles.skillCard}`}
        >
          <div>{skill}</div>
          <Tilt options={defaultOptions}>
            <h2>{skillName}</h2>
          </Tilt>
        </Tilt>
      </div>
    </>
  );
};

export default SkillCard;
