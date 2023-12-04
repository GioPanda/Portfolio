import React, { ReactNode } from "react";
import styled from "styled-components";

import LinkedinIcon from "../assets/colorized-linkedin.svg?react";
import WhatsAppIcon from "../assets/whatsapp-icon.svg?react";
import GmailIcon from "../assets/colorized-gmail-icon.svg?react";

const StyledContactsLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 1.4rem;

  width: 100%;
  height: 100%;

  border-radius: 0.2rem;

  @media (max-width: 399px) {
    margin-top: 30rem;
  }

  @media (max-width: 700px) {
    min-height: 70dvh;
    position: relative;
    top: -8rem;
  }
`;

interface ContactsLinksProps {
  text: string;
  link: string;
  children: ReactNode;
  bgColor: string;
}

const EachContactLinks = ({
  text,
  link,
  children,
  bgColor,
}: ContactsLinksProps) => {
  const StyledEachContactLinks = styled.div`
    display: flex;

    width: 30rem;
    height: 3rem;

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
    <StyledContactsLinks className="newSection" id="#Contact">
      <h1 className="title">Contato</h1>
      <EachContactLinks
        text="giovannasantosmrx@gmail.com"
        link="mailto:giovannasantosmrx@gmail.com"
        bgColor="red"
      >
        <GmailIcon />
      </EachContactLinks>
      <EachContactLinks text="Linked In" link="sadasdada" bgColor="blue">
        <LinkedinIcon />
      </EachContactLinks>
      <EachContactLinks
        text="11 99969-2388"
        link="adadasdasdadadasdadasdsaad"
        bgColor="green"
      >
        <WhatsAppIcon />
      </EachContactLinks>
    </StyledContactsLinks>
  );
};

export default ContactsLinks;
