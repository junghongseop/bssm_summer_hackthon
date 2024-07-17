import React, { useState } from "react";
import styled from "styled-components";
import { ref, set } from "firebase/database";
import { db } from "../../firebase";
import CheckButton from "../Button/CheckButton";
import Input from "../Input/Input";

const Box = () => {
  const [values, setValues] = useState({
    red: "",
    yellow: "",
    blue: "",
  });

  const [hasError, setHasError] = useState({
    red: false,
    yellow: false,
    blue: false,
  });

  const handleChange = (color) => (e) => {
    const value = e.target.value;
    if (
      /^\d*$/.test(value) &&
      (value === "" || (parseInt(value) >= 0 && parseInt(value) <= 255))
    ) {
      setValues({ ...values, [color]: value });
      setHasError({ ...hasError, [color]: false });
    } else {
      setHasError({ ...hasError, [color]: true });
    }
  };

  const handleCheck = async () => {
    const errors = {
      red:
        values.red === "" ||
        !(parseInt(values.red) >= 0 && parseInt(values.red) <= 255),
      yellow:
        values.yellow === "" ||
        !(parseInt(values.yellow) >= 0 && parseInt(values.yellow) <= 255),
      blue:
        values.blue === "" ||
        !(parseInt(values.blue) >= 0 && parseInt(values.blue) <= 255),
    };
    setHasError(errors);

    if (!Object.values(errors).includes(true)) {
      try {
        await set(ref(db, "LED/Red"), { bright: parseInt(values.red) });
        await set(ref(db, "LED/Yellow"), { bright: parseInt(values.yellow) });
        await set(ref(db, "LED/Blue"), { bright: parseInt(values.blue) });
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  return (
    <BoxStyle>
      <EmptyButtonWrapper>
        <h1>빛 세기 조절</h1>
        <StyledInput
          label="빨간색"
          value={values.red}
          onChange={handleChange("red")}
          hasError={hasError.red}
        />
        <StyledInput
          label="노란색"
          value={values.yellow}
          onChange={handleChange("yellow")}
          hasError={hasError.yellow}
        />
        <StyledInput
          label="파란색"
          value={values.blue}
          onChange={handleChange("blue")}
          hasError={hasError.blue}
        />
        <CheckButton onClick={handleCheck}>확인</CheckButton>
      </EmptyButtonWrapper>
    </BoxStyle>
  );
};

export default Box;

const BoxStyle = styled.div`
  width: 630px;
  height: 600px;
  background-color: white;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #d8bfd8;
  font-family: "Pretendard", sans-serif;
`;

const EmptyButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  font-family: "Pretendard", sans-serif;
  gap: 20px;
`;

const StyledInput = styled(Input).attrs((props) => ({
  hasError: props.hasError,
}))`
  box-shadow: ${({ hasError }) => (hasError ? "0 0 10px 2px red" : "none")};
`;
