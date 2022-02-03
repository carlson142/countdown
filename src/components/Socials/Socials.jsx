import React from "react";
import styled from "styled-components";
import "./Socials.scss";

import {
  IoLogoFacebook,
  IoLogoPinterest,
  IoLogoInstagram,
} from "react-icons/io5";

const Container = styled.div`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);

  display: flex;
`;

const IconCont = styled.div`
  height: 5rem;
  width: 5rem;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  @media (max-width: 500px) {
    height: 3.5rem;
    width: 3.5rem;
  }
`;

const Socials = () => {
  return (
    <Container>
      <IconCont>
        <IoLogoFacebook className="socialIcon" />
      </IconCont>
      <IconCont>
        <IoLogoPinterest className="socialIcon" />
      </IconCont>
      <IconCont>
        <IoLogoInstagram className="socialIcon" />
      </IconCont>
    </Container>
  );
};

export default Socials;
