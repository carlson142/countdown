import { useEffect, useState } from "react";
import styled from "styled-components";
import Background from "./components/Background/Background";
import EndOfTimer from "./components/Finish/EndOfTimer";
import Socials from "./components/Socials/Socials";
import Timer from "./components/Timer/Timer";
import Title from "./components/Title/Title";

const Container = styled.div`
  width: 100%;
  max-width: 144rem;

  margin: 0 auto;
  position: relative;

  @media (max-width: 144rem) {
    max-width: 100vw;
  }
`;

function App() {
  const calcTimeLeft = () => {
    let year = new Date().getFullYear();

    let differense = +new Date(`09/10/${year}`) - +new Date();

    let timeLeft = {};

    if (differense > 0) {
      timeLeft = {
        days: Math.floor(differense / 1000 / 60 / 60 / 24),
        hours: Math.floor((differense / 1000 / 60 / 60) % 24),
        minutes: Math.floor((differense / 1000 / 60) % 60),
        seconds: Math.floor((differense / 1000) % 60),
        differense: differense,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calcTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      {timeLeft.differense > 0 ? (
        <Container>
          <Background></Background>
          <Title>Days left until the end of the world</Title>
          <Timer timeLeft={timeLeft}></Timer>
          <Socials></Socials>
        </Container>
      ) : (
        <EndOfTimer></EndOfTimer>
      )}
    </>
  );
}

export default App;
