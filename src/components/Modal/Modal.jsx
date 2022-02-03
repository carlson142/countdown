import React from "react";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";

const Container = styled.div`
  height: 100%;
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  height: 20rem;
  width: 45rem;
  background-color: white;

  border-radius: 1rem;

  position: relative;

  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 550px) {
    width: 90%;
    height: auto;
  }
`;

const IconCont = styled.div`
  height: 2rem;
  width: 2rem;

  cursor: pointer;

  position: absolute;
  top: -3rem;
  right: 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  align-self: center;

  @media (max-width: 550px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.8rem;

  @media (max-width: 550px) {
    font-size: 1.6rem;
  }

  @media (max-width: 400px) {
    font-size: 1.5rem;
  }
`;

const Modal = ({ showModal, setShowModal }) => {
  return (
    <>
      {showModal ? (
        <Container>
          <Message>
            <IconCont>
              <IoClose
                size={25}
                fill="white"
                onClick={() => {
                  setShowModal(false);
                }}
              />
            </IconCont>

            <Title>Dear User!</Title>
            <Text>
              Contact me and we will try to revive the world and set a new date
              for its destruction! (Google translated this phrase for me)
            </Text>

            <Text style={{ alignSelf: "flex-end" }}>
              Sincerely yours, you yourself know who!
            </Text>
          </Message>
        </Container>
      ) : null}
    </>
  );
};

export default Modal;
