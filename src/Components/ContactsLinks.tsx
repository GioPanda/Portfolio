import { ReactNode } from "react";
import styled from "styled-components";

import LinkedinIcon from "../assets/colorized-linkedin.svg?react";
import WhatsAppIcon from "../assets/whatsapp-icon.svg?react";
import GmailIcon from "../assets/colorized-gmail-icon.svg?react";

export { EachContactLinks };

const StyledContactsLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1.4rem;

  width: 100%;
  min-height: 60%;

  max-height: 100%;

  border-radius: 0.2rem;
  .title {
    margin-top: 0;
  }

  @media screen and (max-height: 700px) {
    margin: 0;
    padding: 0;
  }

  @media screen and (max-height: 400px) {
    margin: 0;
    padding-bottom: 4rem;
  }

  @media (max-width: 450px) {
    margin-top: 0;
  }

  @media (max-width: 830px) {
    min-height: 70vh;
    margin-top: 4rem;
  }
`;

interface ContactsLinksProps {
  text: string;
  link: string;
  children: ReactNode;
  bgColor: string;
  width?: number;
  height?: number;
}

const EachContactLinks = ({
  text,
  link,
  children,
  bgColor,
  width,
  height,
}: ContactsLinksProps) => {
  const StyledEachContactLinks = styled.div`
    display: flex;

    width: ${width ? width : "30rem"};
    height: ${height ? height : "3rem"};

    @media (max-width: 612px) {
      width: 80%;
    }

    & > a {
      display: flex;
      align-items: center;

      width: 100%;
      height: 100%;

      border-radius: 9px;
      border: 1px solid black;

      transition: 0.4s ease-in-out;
    }
    & a:hover {
      border: 1px solid ${bgColor};

      scale: 1.04;
    }

    & > a > svg {
      margin: 1.16rem 0rem 0 1rem;

      text-align: center;

      width: 2.5rem;
      height: 2.5rem;

      top: 9px;
      filter: brightness(0);

      transition: 0.4s ease-in-out;
    }

    & > a:hover > svg {
      filter: brightness(1);

      scale: 1.04;
    }

    & > a > .linkName {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 80%;

      font-family: var(--font-lato);
    }

    & > a > .linkName > strong {
      color: black;
      opacity: 0.7;
    }

    & a:hover > .linkName > strong {
      color: ${bgColor};
    }

    @media (max-width: 400px) {
      & > a > .linkName > strong {
        color: black;
        opacity: 0.7;
        font-size: 0.8rem;
      }
    }
  `;

  return (
    <>
      <StyledEachContactLinks>
        <a href={link} target="_blank">
          {children}

          <div className="linkName">
            <strong>{text}</strong>
          </div>
        </a>
      </StyledEachContactLinks>
    </>
  );
};

const ContactsLinks = () => {
  return (
    <StyledContactsLinks className="newSection" id="Contact">
      <h1 className="title">Contato</h1>

      <EachContactLinks
        text="Linked In"
        link="https://www.linkedin.com/in/giovanna-santos-046443255/"
        bgColor="blue"
      >
        <LinkedinIcon />
      </EachContactLinks>
      <EachContactLinks
        text="11 99969-2388"
        link="https://wa.me/5511999692388"
        bgColor="green"
      >
        <WhatsAppIcon />
      </EachContactLinks>
      <EachContactLinks
        text="giovannasantosmrx@gmail.com"
        link="mailto:giovannasantosmrx@gmail.com"
        bgColor="red"
      >
        <GmailIcon />
      </EachContactLinks>
    </StyledContactsLinks>
  );
};

export default ContactsLinks;
