import styled from "styled-components";
import EachProject from "./EachProject";
import Pic from "../assets/Projects/Captura de tela de 2023-11-17 11-26-19.png";
import Pic2 from "../assets/Projects/Captura de tela de 2023-11-21 14-55-10.png";
import ReactIcon from "../assets/Projects/React.png";
import TsIcon from "../assets/Projects/Typescript.png";
import JsIcon from "../assets/Projects/Javascript.png";
import GitIcon from "../assets/Projects/Git.png";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 10vh;
  gap: 2rem;

  width: 100%;
  height: 100vh;
  padding-bottom: 50dvh;

  @media (min-width: 850px) and (max-width: 1000px) {
    background-color: crimson;

    margin-bottom: 10rem;
  }

  @media (max-width: 850px) {
    margin-top: 20dvh;
  }

  @media (max-width: 700px) {
    margin-top: 12rem;

    margin-bottom: 10rem;
  }
`;

const ProjectsGallery = () => {
  const projects = [
    {
      pic: Pic,
      projectName: "Nomes Brasileiros",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing adipiscing.",
      repoLink: "https://www.youtube.com",
      acessLink: "https://www.google.com",
      icons: [ReactIcon, JsIcon, TsIcon, GitIcon],
    },
    {
      pic: Pic2,
      projectName: "Vagas Dev",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing adipiscing.",
      repoLink: "https://www.youtube.com",
      acessLink: "https://www.google.com",
      icons: [ReactIcon, JsIcon, TsIcon, GitIcon],
    },

    {
      pic: Pic2,
      projectName: "Streaming Downloader",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing adipiscing.",
      repoLink: "https://www.youtube.com",
      acessLink: "https://www.google.com",
      icons: [ReactIcon, JsIcon, TsIcon, GitIcon],
    },
    {
      pic: Pic,
      projectName: "My Translator",
      text: "lorem ipsum dolor sit amet, consectetur adipiscing adipiscing.",
      repoLink: "https://www.youtube.com",
      acessLink: "https://www.google.com",
      icons: [ReactIcon, JsIcon, TsIcon, GitIcon],
    },
    // adicione mais projetos conforme necessário
  ];

  return (
    <>
      <Wrapper className="newSection" id="Projetos">
        <h1 className="title">Projetos</h1>

        <EachProject projects={projects} />
      </Wrapper>
    </>
  );
};

export default ProjectsGallery;
