import React from "react";
import styled from "styled-components";

const EmptyButton = () => {
  return (
    <ButtonStyle>
      <ButtonText>확인</ButtonText>
    </ButtonStyle>
  );
};

export default EmptyButton;

const ButtonStyle = styled.button`
  width: 174px;
  height: 53px;
  background-color: #71D29A;
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
