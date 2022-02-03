import React from "react";
import styled from "styled-components";

const CustomTitle = styled.h1`
  font-size: 3rem;
  color: white;

  text-transform: uppercase;
  letter-spacing: 4px;

  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);

  @media (max-width: 160rem) {
    text-align: center;
  }

  @media (max-width: 930px) {
    transform: translate(-50%, -100%);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 500px) {
    font-size: 2rem;
  }
`;

const Title = ({ children }) => {
  return <CustomTitle>{children}</CustomTitle>;
};

export default Title;
