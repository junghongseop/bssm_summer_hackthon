import React from "react";
import Background from "../../svg/Background";
import styled from "styled-components";
import FillButton from "../../components/Button/FillButton";
import EmptyButton from "../../components/Button/EmptyButton";
import Person from "../../svg/person.svg";

const Main = () => {
  return (
    <>
      <BackgroundStyle>
        <Background />
      </BackgroundStyle>
      <MainPageStyle>
        <ContentStyle>
          <ColumnStyle>
            <Title>
              <b>내 소중함</b>을<br />
              알게 해 주는
              <br />
              무드등
            </Title>
            <SubTitle>
              <b>하람</b>과 같이 당신의 소중함을 알아가요
            </SubTitle>
            <RowStyle>
              <FillButton />
              <EmptyButton />
            </RowStyle>
          </ColumnStyle>
          <PersonImage src={Person} alt="Person Icon" />
        </ContentStyle>
      </MainPageStyle>
    </>
  );
};

export default Main;

const BackgroundStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;
`;

const MainPageStyle = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding-left: 20px;
`;

const ContentStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: 500;
  font-family: "Pretendard", sans-serif;
  line-height: 90px;
  text-align: left;
  margin-bottom: 26px;
`;

const SubTitle = styled.div`
  font-size: 27px;
  font-weight: 200;
  font-family: "Pretendard", sans-serif;
  margin-bottom: 61px;
  text-align: left;
`;

const RowStyle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px; /* 버튼 사이의 간격 */
`;

const ColumnStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PersonImage = styled.img`
  width: auto;
  height: auto;
  height: auto;
`;
