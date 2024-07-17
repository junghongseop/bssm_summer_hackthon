import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const EmptyButton = () => {
  return (
    <ButtonStyle to="/controller">
      <ButtonText>무드등 사용하러 가기</ButtonText>
    </ButtonStyle>
  );
};

export default EmptyButton;

const ButtonStyle = styled(Link)`
  width: 174px;
  height: 53px;
  background-color: none;
  border: 1px solid #71D29A;
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
  color: black;
  text-align: center;
`;
