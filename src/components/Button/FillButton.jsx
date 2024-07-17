import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FillButton = () => {
  return (
    <ButtonStyle to="/chat">
      <ButtonText>하람과 대화 나누기</ButtonText>
    </ButtonStyle>
  );
};

export default FillButton;

const ButtonStyle = styled(Link)`
  width: 174px;
  height: 53px;
  background-color: #71d29a;
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transform: scale(0.98);
  }
`;

const ButtonText = styled.div`
  font-family: "Pretendard", sans-serif;
  font-size: 15px;
  color: white;
  text-align: center;
`;
