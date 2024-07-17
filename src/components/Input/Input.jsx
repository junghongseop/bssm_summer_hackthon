import React from "react";
import styled from "styled-components";

const Input = ({ label, value, onChange, hasError }) => {
  return (
    <InputContainer>
      <Label>{label}</Label>
      <InputStyle
        value={value}
        onChange={onChange}
        placeholder="빛의 세기를 적어주세요."
        hasError={hasError}
      />
      {hasError && <ErrorMessage>값은 0에서 255 사이여야 합니다.</ErrorMessage>}
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

const InputStyle = styled.input`
  height: 42px;
  width: 430px;
  padding: 0 20px;
  border: none;
  border-radius: 4px;
  font-family: "Pretendard", sans-serif;
  font-size: 15px;
  background-color: white;
  box-shadow: ${(props) =>
    props.hasError
      ? "0px 1px 4px rgba(255, 0, 0, 0.8)"
      : "0px 1px 4px rgba(0, 0, 0, 0.2)"};

  &::placeholder {
    color: #6c757d;
    opacity: 1;
  }

  &:focus {
    outline: none;
    box-shadow: ${(props) =>
      props.hasError
        ? "0px 1px 4px rgba(255, 0, 0, 0.8)"
        : "0px 1px 4px rgba(0, 0, 0, 0.2)"};
  }
`;

const ErrorMessage = styled.div`
  margin-top: 5px;
  color: red;
  font-size: 12px;
`;
