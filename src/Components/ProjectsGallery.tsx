import styled from "styled-components";

import Pic from "../assets/Projects/ComingSoon.png";
import Pic2 from "../assets/Projects/ComingSoon.png";
import ReactIcon from "../assets/Projects/React.png";
import TsIcon from "../assets/Projects/Typescript.png";
import JsIcon from "../assets/Projects/Javascript.png";
import GitIcon from "../assets/Projects/Git.png";
import { ReactNode, useEffect, useState } from "react";

const ProjectsGallery = () => {
  const projects = [
    {
      pic: Pic,
      projectName: "Nomes Brasileiros",
      text: "Pesquise sobre e saiba as estatísticas dos nomes brasileiros!",
      repoLink: "https://www.youtube.com",
      acessLink: "https://www.google.com",
      icons: [ReactIcon, JsIcon, TsIcon, GitIcon],
    },
    {
      pic: Pic2,
      projectName: "Vagas Dev",
      text: "Plataforma de vagas para desenvolvedores!",
      repoLink: "https://www.youtube.com",
      acessLink: "https://www.google.com",
      icons: [ReactIcon, JsIcon, TsIcon, GitIcon],
    },

    {
      pic: Pic2,
      projectName: "Streaming Downloader",
      text: "Baixe vídeos e áudios de plataformas de streaming!",
      repoLink: "https://www.youtube.com",
      acessLink: "https://www.google.com",
      icons: [ReactIcon, JsIcon, TsIcon, GitIcon],
    },
    {
      pic: Pic,
      projectName: "My Translator",
      text: "O meu tradutor de idiomas!",
      repoLink: "https://www.youtube.com",
      acessLink: "https://www.google.com",
      icons: [ReactIcon, JsIcon, TsIcon, GitIcon],
    },
    // {
    //   pic: Pic,
    //   projectName: "My Translator",
    //   text: "lorem ipsum dolor sit amet, consectetur adipiscing adipiscing.",
    //   repoLink: "https://www.youtube.com",
    //   acessLink: "https://www.google.com",
    //   icons: [ReactIcon, JsIcon, TsIcon, GitIcon],
    // },
    // // adicione mais projetos conforme necessário
  ];

  const ProjectsSection = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [visibleProjects, setVisibleProjects] = useState(projects);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    useEffect(() => {
      setVisibleProjects(windowWidth <= 890 ? projects.slice(0, 2) : projects);
    }, [windowWidth]);

    const ProjectsSection = styled.section`
      flex-direction: column;
      align-items: center;

      padding-bottom: 420px;

      #projects {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);

        gap: 3rem; /* Remove o espaço entre as colunas */

        justify-items: center; /* Alinha os itens horizontalmente no centro */
        align-items: center;
      }
      @media (max-width: 1100px) {
        padding-bottom: 50%;
      }
      @media (max-width: 880px) {
        #projects {
          display: flex;
          flex-direction: column;
          min-width: 100vw;
        }

        .projectsWrapper {
          min-width: 80vw;
        }

        #images img {
          width: 100%;
          height: 20rem;
        }
      }

      @media (max-width: 630px) {
        #images img {
          width: 100%;
          max-height: 15rem;
        }
      }

      .title {
        margin-top: 0%;
      }
      .projectsWrapper {
        width: 40vw;

        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: rgba(0, 0, 0, 0.4) 0px 10px 40px;
        border-radius: 8px;
      }

      #images {
        width: 100%;
      }
      #images img {
        width: 100%;
        height: 20rem;

        object-fit: fill;

        border-radius: 8px;
      }

      .information {
        width: 100%;
        height: 100%;
        display: flex;
        height: 4rem;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 1rem;
      }
      .information > h2,
      span {
        max-width: 100%;

        margin: 0rem 0 0 1rem;
        font-family: var(--font-outfit);
        padding: 0;
      }

      .information > span {
        opacity: 0.7;
        font-family: var(--font-allerta);
        margin-right: 1rem;
      }

      .links {
        display: flex;
        width: 100%;
        height: 5rem;

        align-items: center;
      }

      @media screen and (max-width: 400px) {
        .links {
          margin-left: 1rem;
        }

        .information > span {
          font-size: 0.9rem;
        }

        .information > h2 {
          font-size: 1.2rem;
        }
      }
    `;

    interface IconsProps {
      icons: string[];
      children?: ReactNode;
    }
    const TecnologiesIcons = ({ icons }: IconsProps) => {
      const Icons = styled.div`
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-left: 1.5rem;

        width: 100%;
        height: 100%;

        & > img {
          width: 1.5rem;
          height: 1.5rem;
          margin-right: 0.7rem;
        }

        @media (max-width: 400px) {
          display: none;
        }
      `;

      return (
        <>
          <Icons>
            {icons.map((allIcons, index) => (
              <img src={allIcons} alt="" key={index} />
            ))}
          </Icons>
        </>
      );
    };

    const ProjectButtons = ({
      children,
      link,
    }: {
      children: ReactNode;
      link: string;
    }) => {
      const Links = styled.a`
        width: 100%;

        & > button {
          width: 90%;

          height: 2.5rem;

          border: 1px solid rgba(0, 0, 0, 0.6);

          background: rgba(255, 255, 255, 0.3);

          border-radius: 9999px;

          font-family: var(--font-lato);
          font-weight: 700;
          transition: 0.3s ease-in-out;
        }

        & > button:hover {
          scale: 1.04;
          box-shadow: 0 0 39px rgba(37, 56, 53, 0.3);

          font-weight: bold;
          cursor: pointer;
        }
      `;

      return (
        <>
          <Links href={link} target="_blank">
            <button>{children}</button>
          </Links>
        </>
      );
    };
    return (
      <>
        <ProjectsSection className=" newSection" id="Projects">
          <h1 className="title">Meus Projetos</h1>
          <div id="projects">
            {visibleProjects.map((project, index) => (
              <div key={index} className="projectsWrapper">
                <section id="images">
                  <img src={project.pic} alt={project.projectName} />
                </section>
                <div className="information">
                  <h2>{project.projectName}</h2>
                  <span className="details">{project.text}</span>
                </div>

                <div className="links">
                  <TecnologiesIcons icons={project.icons} />
                  <ProjectButtons link={project.acessLink}>
                    Repositório
                  </ProjectButtons>

                  <ProjectButtons link={project.acessLink}>
                    Acessar
                  </ProjectButtons>
                </div>
              </div>
            ))}
          </div>
        </ProjectsSection>
      </>
    );
  };

  return (
    <>
      <ProjectsSection />
    </>
  );
};

export default ProjectsGallery;
