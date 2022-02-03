import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  margin: 0 2rem;

  display: flex;
  flex-direction: column;

  align-items: center;
`;

const minute = keyframes`
    0%{
        transform:scale(1.1)
    }


    100%{
        transform: scale(1);
    }
`;

const TimeCont = styled.div`
  height: 18rem;
  width: 18rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-neutral-dark-desaturated-blue); /* FIX THIS! */

  border-radius: 1rem;
  margin-bottom: 2rem;

  box-shadow: 0 1rem 0 rgba(0, 0, 0, 0.8);

  position: relative;

  overflow: hidden;

  /*  animation: ${minute} infinite ease-in-out;
  animation-duration: ${(props) => props.name === "seconds" && "1s"}; */

  /*animation-duration: ${(props) => props.name === "hours" && "3600s"}; */

  @media (max-width: 930px) {
    height: 15rem;
    width: 15rem;
  }

  @media (max-width: 500px) {
    height: 13rem;
    width: 13rem;
  }
`;

const Circle = styled.div`
  height: 1.5rem;
  width: 1.5rem;

  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);

  position: absolute;
  top: 0;
  bottom: 0;

  left: ${(props) => props.direction === "left" && "-0.75rem"};
  right: ${(props) => props.direction === "right" && "-0.65rem"};

  margin: auto;
`;

const TimeValue = styled.h1`
  font-size: 8rem;
  color: var(--color-primary-soft-red);

  @media (max-width: 930px) {
    font-size: 6rem;
  }

  @media (max-width: 500px) {
    font-size: 5rem;
  }
`;

const Name = styled.span`
  font-size: 2rem;
  color: var(--color-primary-grayish-blue);
  text-transform: uppercase;
  letter-spacing: 4px;
`;

const TimeElement = ({ name, number }) => {
  return (
    <Container>
      <TimeCont name={name} number={number}>
        <Circle direction="left" />
        <TimeValue>{number < 10 ? `0${number}` : number}</TimeValue>
        <Circle direction="right" />
      </TimeCont>
      <Name>{name}</Name>
    </Container>
  );
};

export default TimeElement;
