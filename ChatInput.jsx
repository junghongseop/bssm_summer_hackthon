import React from "react";
import styled from "styled-components";
import send from "../../svg/send.svg";

const ChatInput = ({
  currentQuestion,
  handleQuestionChange,
  handleQuestionSubmit,
  inputRef,
  loading,
}) => {
  return (
    <>
      <ChatInputContainer>
        <InputWrapper>
          <ChatInputStyle
            type="text"
            ref={inputRef}
            value={currentQuestion}
            onChange={handleQuestionChange}
            placeholder="타인의 권리를 침해하거나 명예를 훼손하는 댓글은 제재를 받을 수 있습니다."
          />
          <SendButton onClick={handleQuestionSubmit} disabled={loading}>
            <img src={send} alt="Send Icon" />
          </SendButton>
        </InputWrapper>
      </ChatInputContainer>
      <WhiteContainer />
    </>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  background-color: white;
  position: fixed;
  bottom: 2.25px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  background-color: #f8f9fa;
  border-radius: 55px;
`;

const ChatInputStyle = styled.input`
  flex: 1;
  height: 45px;
  padding: 0 20px;
  border: none;
  border-radius: 55px 0 0 55px;
  font-family: "Pretendard", sans-serif;
  font-size: 15px;
  background-color: #f8f9fa;

  &::placeholder {
    color: #adb5bd;
    opacity: 1;
  }

  &:focus {
    outline: none;
  }
`;

const SendButton = styled.button`
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 100%;
  background-color: #f6eac2;
  color: white;
  cursor: pointer;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  padding-top: 4px;
  padding-left: 7px;

  &:hover {
    background-color: rgba(246, 234, 194, 0.5);
  }

  &:disabled {
    background-color: lightgray;
    cursor: not-allowed;
  }
`;

const WhiteContainer = styled.div`
  background-color: white;
  height: 20px;
  width: 100%;
`;
