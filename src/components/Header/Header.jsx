import styled from "styled-components";
import { Link } from "react-router-dom";
import IconBell from "../../icon/IconBell";

const Header = () => {
  return (
    <HeaderStyle>
      <HeaderContainer>
        <HeaderLink to={"/"}>홈으로</HeaderLink>
        <HeaderLink to={"/controller"}>무드등</HeaderLink>
        <HeaderLink to={"/chat"}>하람과 대화</HeaderLink>
      </HeaderContainer>
      <HeaderProfileContainer>
        <IconBell />
        <Profile />
      </HeaderProfileContainer>
    </HeaderStyle>
  );
};

export default Header;

const HeaderStyle = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  flex-direction: row;
  align-items: center;
`;

const HeaderProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  flex-direction: row;
  align-items: center;
`;

const HeaderLink = styled(Link)`
  font-family: "Pretendard", sans-serif;
  font-size: 18px;
  text-decoration: none;
  color: black;
  margin: 0 15px;

  &:hover {
    transform: scale(0.9);
  }
`;

const Profile = styled.p`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #CED4DA;
  margin-left: 70px;
`;
