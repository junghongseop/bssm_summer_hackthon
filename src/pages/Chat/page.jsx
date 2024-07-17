import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../../components/Header/Header";
import ChatInput from "../../components/Input/ChatInput";
import { OpenAI } from "openai";

const Chat = () => {
  const [conversations, setConversations] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const inputRef = useRef(null);
  const conversationEndRef = useRef(null);

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    dangerouslyAllowBrowser: true,
  });

  const handleQuestionChange = (e) => {
    setCurrentQuestion(e.target.value);
  };

  const handleQuestionSubmit = async () => {
    if (currentQuestion.trim() === "") return;

    setLoading(true);
    const userMessage = { role: "user", content: currentQuestion };

    setConversations((prevConversations) => [
      ...prevConversations,
      userMessage,
      { role: "assistant", content: "답변 생성 중..." },
    ]);

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "당신은 사용자가 입력한 텍스트에 기반하여 무드등 밝기와 노래를 추천하는 도움을 주는 비서 하람입니다. 그리고 너는 사용자의 기분에 맞는 빨강, 초록, 노랑, 파랑들의 색들로 각각의 색에 0~255 중 선택을 하여 무드등 빛 조합 추천을 해주면 되고, 노래도 추천해주면 돼. 노래는 정돈되어 보이기게 가수이름, 제목, YouTube URL 순으로 나타내줘. 그리고 노래는 최소 2개 이상으로 추천해줘. 노래 목록을 보여줄때는 한줄에 하나의 곡만 있게 해줘. 그리고 노래마다 앞에 *를 붙여서 구분 되게 해줘",
          },
          {
            role: "user",
            content: currentQuestion,
          },
        ],
      });

      const answer = response.choices[0].message.content;

      setConversations((prevConversations) => [
        ...prevConversations.slice(0, -1),
        { role: "assistant", content: answer },
      ]);
      setCurrentQuestion("");
    } catch (error) {
      console.error("Error:", error);
      if (error.response) {
        if (error.response.status === 429) {
          console.log("요청 제한 초과");
        } else {
          console.log("답변을 가져오는 중 오류 발생");
        }
      } else {
        console.log("네트워크 오류");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    if (conversationEndRef.current) {
      conversationEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversations]);

  return (
    <ChatContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <ChatContent>
        {conversations.map((message, index) => (
          <Message
            key={index}
            role={message.role}
            loading={loading && message.content === "답변 생성 중..."}
          >
            {message.content}
          </Message>
        ))}
        <div ref={conversationEndRef}></div>
      </ChatContent>
      <ChatInputContainer>
        <ChatInput
          currentQuestion={currentQuestion}
          handleQuestionChange={handleQuestionChange}
          handleQuestionSubmit={handleQuestionSubmit}
          inputRef={inputRef}
          loading={loading}
        />
      </ChatInputContainer>
    </ChatContainer>
  );
};

export default Chat;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const ChatContent = styled.div`
  flex: 1;
  width: 100%;
  max-width: 55%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 70px;
  padding-bottom: 150px;
  overflow-y: auto;
`;

const ChatInputContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const Message = styled.div`
  max-width: 60%;
  padding: 15px;
  border-radius: 10px 10px 0px 10px;
  line-height: 20px;
  background-color: ${(props) => (props.role === "user" ? "#F6EAC2" : "none")};
  color: black;
  word-wrap: break-word;
  margin-bottom: 10px;
  align-self: ${(props) => (props.role === "user" ? "flex-end" : "flex-start")};
  ${(props) =>
    props.loading &&
    `
    animation: blink 1s infinite;
    @keyframes blink {
      0% { opacity: 1; }
      50% { opacity: 0; }
      100% { opacity: 1; }
    }
  `}
`;
