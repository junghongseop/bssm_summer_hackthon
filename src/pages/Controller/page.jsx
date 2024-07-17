import React from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import Box from "../../components/Box/Box";

const Controller = () => {
  return (
    <>
      <Header />
      <Container>
        <Box />
      </Container>
    </>
  );
};

export default Controller;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 90px); 
  margin-top: 80px;
`;
