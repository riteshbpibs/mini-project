import styled from "styled-components";
import { StyledBox } from "../base/StyledBox";
import { StyledSpan } from "../base/StyledSpan";
import { StyledButton } from "../base/StyledButton";

const CommonFormContainerBorder = styled(StyledBox)`
  gap: 12px;
  width: 498px;
  display: flex;
  padding: 12px;
  border-radius: 30px;
  align-items: center;
  flex-direction: column;
  background-color: #ebebeb;
`;

const CommonFormContainer = styled.form`
  width: 100%;
  display: flex;
  border-radius: 30px;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: space-evenly;
`;

const CommonFormHeadLogo = styled(StyledSpan)`
  width: 53px;
  height: 53px;
  display: flex;
  align-items: center;
  border-radius: 99999px;
  justify-content: center;
  background-color: #f8f8f8;
`;

const CommonFormHeadInfoBox = styled(StyledBox)`
  gap: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CommonFormInputBoxContainer = styled(StyledBox)`
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const CommonFormInputLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

const CommonFormInputBox = styled.input`
  width: 377px;
  height: 46px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 0 12px;
  border-radius: 11px;
  background-color: #f4f4f4;

  &::placeholder {
    color: #0000007a;
  }
`;

const CommonFormSubmitButton = styled(StyledButton)`
  width: 377px;
  height: 50px;
  font-size: 14px;
  color: #ffffff;
  font-weight: 600;
  border-radius: 11px;
  background-color: #5057ea;
`;

export {
  CommonFormContainerBorder,
  CommonFormContainer,
  CommonFormHeadLogo,
  CommonFormHeadInfoBox,
  CommonFormInputBoxContainer,
  CommonFormInputLabel,
  CommonFormInputBox,
  CommonFormSubmitButton,
};
