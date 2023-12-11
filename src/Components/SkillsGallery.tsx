import GitHub from "../assets/skills/GitHub-img.svg?react";
import Git from "../assets/skills/Git-img.svg?react";
import JsImg from "../assets/skills/Js-img.svg?react";
import TsImg from "../assets/skills/Ts-img.svg?react";
import ReactImg from "../assets/skills/React-img.svg?react";
import CssImg from "../assets/skills/Css-img.svg?react";
import HtmlImg from "../assets/skills/Html-img.svg?react";
import LinuxImg from "../assets/skills/Linux-img.svg?react";

import styled from "styled-components";

import { Tilt } from "react-tilt";
import React from "react";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 200, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const standardSize = {
  width: "120px",
  height: "120px",
};

const SkillsGalleryWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (min-width: 900px) {
    margin-bottom: 4rem;
  }
  @media screen and (max-height: 400px) {
    margin: 20rem 0 6rem 0;
  }

  @media screen and (min-width: 740px) {
    margin-top: 4rem;
  }
  @media screen and (max-width: 650px) {
    .gallery {
      display: grid;
      width: 80%;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }
  }
  @media screen and (max-width: 1100px) {
    & > main {
      width: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
  @media screen and (max-width: 900px) {
    min-height: 50rem;

    .gallery {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(4, 1fr);

      width: 100%;

      justify-items: center;
      align-items: center;
    }
  }

  @media screen and (max-width: 720px) {
    margin-bottom: 6rem;
  }

  @media screen and (max-width: 600px) {
    margin-bottom: 8rem;
    .gallery {
      margin: 0 auto;
      display: grid;
      width: 100%;

      height: 100%;

      grid-template-columns: repeat(2, 1fr) !important;
      grid-template-rows: repeat(4, 1fr) !important;

      padding: 2rem 0;
    }

    .tilt svg {
      width: 100%;
      height: 100%;
    }
    .tilt div {
      margin-bottom: 0.3rem;
    }
  }

  @media screen and (max-width: 480px) {
    input::placeholder {
      font-size: 13px;
    }
  }

  .gallery {
    display: grid;
    width: 80%;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);

    height: 100%;
  }

  & > main {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    margin-bottom: 4rem;
  }

  .tilt svg {
    ${standardSize}
  }
  .tilt div {
    width: ${standardSize.width};

    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .tilt div .tecNames {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    width: 100%;

    padding: 0.2rem 0;

    border: 2px solid #1f1c16;
    border-radius: 3px;

    margin-top: 0.4rem;
  }

  .tilt div .tecNames strong {
    font-family: var(--font-mono);
    font-size: 1.1rem;
    font-weight: 800;
  }

  .tilt {
    display: flex;
    justify-content: center;
    max-width: 100%;
  }
  .tilt > * {
    /* background: radial-gradient(
      ellipse at center,
      rgba(65, 184, 210, 0.1) 0%,
      rgba(211, 240, 247, 1) 70%,
      rgba(211, 240, 247, 0) 100%
    ); */
  }
`;

const EachTilt = ({
  children,
  tecName,
}: {
  children: React.ReactNode;
  tecName: string;
}) => {
  return (
    <>
      <div className="tilt">
        <div>
          <Tilt options={defaultOptions} style={{ standardSize }}>
            {children}
            <div className="tecNames">
              <strong>{tecName}</strong>
            </div>
          </Tilt>
        </div>
      </div>
    </>
  );
};

const SkillsGallery = () => {
  return (
    <>
      <SkillsGalleryWrapper className="newSection" id="Skills">
        <main>
          <h1 className="title">Habilidades</h1>

          <article className="gallery">
            <EachTilt tecName="React">
              <ReactImg />
            </EachTilt>
            <EachTilt tecName="Javascript">
              <JsImg />
            </EachTilt>
            <EachTilt tecName="Typescript">
              <TsImg />
            </EachTilt>
            <EachTilt tecName="Git">
              <Git />
            </EachTilt>
            <EachTilt tecName="Github">
              <GitHub />
            </EachTilt>
            <EachTilt tecName="HTML">
              <HtmlImg />
            </EachTilt>
            <EachTilt tecName="CSS">
              <CssImg />
            </EachTilt>
            <EachTilt tecName="Linux">
              <LinuxImg />
            </EachTilt>
          </article>
        </main>
      </SkillsGalleryWrapper>
    </>
  );
};

export default SkillsGallery;
