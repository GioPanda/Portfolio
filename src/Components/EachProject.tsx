// import { ReactNode } from "react";
// import styled from "styled-components";

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 2rem;

//   margin-top: 4rem;
//   padding-bottom: 4.1rem;

//   width: 100%;
//   height: calc(100% + 20vh);

//   @media (max-width: 850px) {
//     margin-top: 0rem;
//   }

//   & h2 {
//     padding: 0;
//     margin: 0;
//   }

//   & > div > div:hover {
//     scale: 1.04;
//     box-shadow: 0 0 39px rgba(95, 180, 167, 0.2);
//   }

//   & > div > div {
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     width: 100%;
//     height: 100%;

//     box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px,
//       rgba(0, 0, 0, 0.05) 0px 5px 10px;
//     border-radius: 8px;

//     transition: 0.4s ease-in-out;
//   }

//   & .wrapperDiv {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }

//   & .wrapperDiv > div {
//     display: flex;
//     justify-content: center;
//     align-items: center;

//     width: 99.8%;
//     height: 100%;

//     border-radius: 10px;

//     box-shadow: rgba(0, 0, 0, 0.4) 0px 10px 40px;

//     background: linear-gradient(-45deg, #52e6ee, #b93ce7, #64f8a4, #23a5d5);
//     background-size: 400% 400%;
//     -webkit-animation: gradient 8s ease infinite;
//     animation: gradient 8s ease infinite;
//   }

//   @-webkit-keyframes gradient {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }

//   @keyframes gradient {
//     0% {
//       background-position: 0% 50%;
//     }
//     50% {
//       background-position: 100% 50%;
//     }
//     100% {
//       background-position: 0% 50%;
//     }
//   }

//   & .wrapperDiv > div > img {
//     padding: 5px 5px 5px 5px;
//     height: 20rem;
//     width: 99%;

//     object-fit: cover;

//     border-radius: 12px;
//   }

//   @media (max-width: 850px) {
//     & .wrapperDiv > div > img {
//       padding: 5px 5px 5px 5px;
//       height: 50vh;
//       width: 99%;

//       object-fit: cover;

//       border-radius: 12px;
//     }
//   }

//   @media (max-width: 500px) {
//     & .wrapperDiv > div > img {
//       height: 15rem;
//       width: 99%;
//     }
//   }
// `;

// const PrimaryContainer = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, minmax(0, 1fr));
//   gap: 3rem;

//   width: 90%;
//   height: 100%;

//   @media (max-width: 850px) {
//     display: flex;
//     flex-direction: column;
//   }
// `;

// const EachProjectInformation = styled.section`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   padding: 0.4rem;
//   margin: 1.5rem 0 0 0;

//   text-align: justify;

//   & > h2,
//   span {
//     max-width: 100%;

//     margin: 0rem 0 0 1rem;
//     font-family: var(--font-outfit);
//     padding: 0;
//   }

//   & > span {
//     opacity: 0.7;
//     font-family: var(--font-allerta);
//     margin-right: 1rem;
//   }
// `;

// const EachProjectDetails = styled.div`
//   display: grid;
//   grid-template-columns: 2fr 1.8fr 1.8fr;

//   width: 100%;
//   height: 2.3rem;

//   padding-bottom: 0.5rem;

//   margin: 1rem 0 0 0;

//   & > * {
//     margin-left: 1rem;
//   }

//   @media (max-width: 390px) {
//     display: flex;
//     width: 100%;
//   }
// `;

// interface ProjectProps {
//   pic: string;
//   projectName: string;
//   text: string;
//   repoLink: string;
//   acessLink: string;
//   icons: string[];
//   children?: ReactNode;
// }

// interface IconsProps {
//   icons: string[];
//   children?: ReactNode;
// }

// const TecnologiesIcons = ({ icons }: IconsProps) => {
//   const Icons = styled.div`
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;

//     width: 100%;
//     height: 100%;

//     & > img {
//       width: 1.5rem;
//       height: 1.5rem;
//       margin-right: 0.7rem;
//     }

//     @media (max-width: 390px) {
//       display: none;
//     }
//   `;

//   return (
//     <>
//       <Icons>
//         {icons.map((allIcons, index) => (
//           <img src={allIcons} alt="" key={index} />
//         ))}
//       </Icons>
//     </>
//   );
// };

// const ProjectButtons = ({
//   children,
//   link,
// }: {
//   children: ReactNode;
//   link: string;
// }) => {
//   const Links = styled.a`
//     width: 100%;

//     & > button {
//       width: 80%;
//       margin: 0;
//       height: 100%;

//       border: 1px solid rgba(0, 0, 0, 0.6);

//       background: rgba(255, 255, 255, 0.3);

//       border-radius: 9999px;

//       font-family: var(--font-lato);
//       font-weight: 700;
//       transition: 0.3s ease-in-out;
//     }

//     & > button:hover {
//       scale: 1.04;
//       box-shadow: 0 0 39px rgba(37, 56, 53, 0.3);

//       font-weight: bold;
//       cursor: pointer;
//     }
//   `;

//   return (
//     <>
//       <Links href={link} target="_blank">
//         <button>{children}</button>
//       </Links>
//     </>
//   );
// };

// const Project = ({
//   pic,
//   projectName,
//   text,
//   repoLink,
//   acessLink,
//   icons,
// }: ProjectProps) => {
//   return (
//     <div>
//       <div className="wrapperDiv">
//         <div>
//           <img src={pic} alt="" />
//         </div>
//       </div>
//       <EachProjectInformation>
//         <h2>{projectName}</h2>
//         <span>{text}</span>

//         <EachProjectDetails>
//           <TecnologiesIcons icons={icons} />
//           <ProjectButtons link={repoLink}>Repositório</ProjectButtons>
//           <ProjectButtons link={acessLink}>Acessar</ProjectButtons>
//         </EachProjectDetails>
//       </EachProjectInformation>
//     </div>
//   );
// };

// interface EachProjectProps {
//   projects: ProjectProps[];
// }
// { projects }: EachProjectProps)
const EachProject = () => {
  return (
    <>
      {/* <Container>
        <PrimaryContainer>
          {projects.slice(0, 2).map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </PrimaryContainer>
      </Container> */}
    </>
  );
};

export default EachProject;
