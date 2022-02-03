import React from "react";
import styled from "styled-components";

import Stars from "../../images/bg-stars.svg";
import Mount from "../../images/pattern-hills.svg";

const BGContainer = styled.div`
  height: 100vh;
  width: 100%;

  background-image: linear-gradient(
    to bottom,
    hsl(234, 17%, 12%),
    var(--color-neutral-very-dark-blue)
  );
`;

const BGImage1 = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const BGImage2 = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;

  width: 100%;

  @media (max-width: 768px) {
    height: 30rem; /*TEST*/
  }
`;

const Background = () => {
  return (
    <BGContainer>
      <BGImage1 src={Stars} />
      <BGImage2 src={Mount} />
    </BGContainer>
  );
};

export default Background;
