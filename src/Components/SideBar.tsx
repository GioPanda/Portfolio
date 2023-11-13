import styles from "./Styles/SideBar.module.css";
import GithubIcon from "../assets/git-icon.svg?react";
import LinkedinIncon from "../assets/linkedin-icon.svg?react";
import MailIcon from "../assets/mail-icon.svg?react";

const SideBar = () => {
  return (
    <>
      <div className={`${styles.list} sidebar`}>
        <ul>
          <li>
            <a href="https://github.com/GioPanda" target="_blank">
              <GithubIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/giovannasantos/"
              target="_blank"
            >
              <LinkedinIncon />
            </a>
          </li>
          <li>
            <a href="mailto:Qgjgk@example.com" target="_blank">
              <MailIcon />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
