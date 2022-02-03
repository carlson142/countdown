import React from "react";
import styled from "styled-components";
import TimeElement from "../TimeElement/TimeElement";

const Container = styled.div`
  position: absolute;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;

  @media (max-width: 930px) {
    flex-direction: column;
  }
`;

const First = styled.div`
  display: flex;

  @media (max-width: 930px) {
    margin-bottom: 2rem;
  }
`;

const Second = styled.div`
  display: flex;
`;

const Timer = ({ timeLeft }) => {
  let { days, hours, minutes, seconds } = timeLeft;

  return (
    <Container>
      <First>
        <TimeElement name="days" number={days} />
        <TimeElement name="hours" number={hours} />
      </First>

      <Second>
        <TimeElement name="minutes" number={minutes} />
        <TimeElement name="seconds" number={seconds} />
      </Second>
    </Container>
  );
};

export default Timer;
