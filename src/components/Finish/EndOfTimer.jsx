import React, { useState } from "react";
import styled from "styled-components";
import lady from "../../images/test.jpg";
import Modal from "../Modal/Modal";

const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const StyledButton = styled.button`
  padding: 1rem 2rem;
  background-color: tomato;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;

  position: absolute;
`;

const EndOfTimer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      <Img src={lady} />
      <StyledButton
        onClick={() => {
          setShowModal(true);
        }}
      >
        Reborn the world!
      </StyledButton>
    </Container>
  );
};

export default EndOfTimer;
