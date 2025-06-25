import styled from "styled-components";

import { StyledBox } from "../base/StyledBox";

const LandingPageContainer = styled(StyledBox)`
  gap: 40px;
  display: flex;
  margin-top: 60px;
  flex-direction: column;
`;

const LandingPageCreatePostBorderBox = styled(StyledBox)`
  width: 568px;
  height: 224px;
  display: flex;
  align-items: center;
  border-radius: 12px;
  justify-content: center;
  background-color: #00000008;
`;

const LandingPageCreatePostBox = styled(StyledBox)`
  width: 554px;
  padding: 10px;
  height: 210px;
  border-radius: 12px;
  background-color: #ffffff;
  border: 1px solid #00000021;
`;

const LandingPageCreatePostBoxHeader = styled(StyledBox)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LandingPageCreatePostHeaderLeftBox = styled(StyledBox)`
  width: 414px;
  height: 40px;
  display: flex;
  padding: 4px;
  border-radius: 10px;
  align-items: center;
  background-color: #00000008;
  justify-content: space-between;
`;

const LandingPageCreatePostForm = styled.form`
  gap: 12px;
  width: 100%;
  display: flex;
  margin-top: 12px;
  flex-direction: column;
`;

const LandingPageCreatePostFormInput = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  overflow: auto;
  font-size: 14px;
  font-weight: 500;

  &::placeholder {
    color: #00000066;
  }
`;

const LandingPagePostsBoxBorder = styled(StyledBox)`
  gap: 6px;
  width: 568px;
  padding: 8px;
  height: 209px;
  display: flex;
  border-radius: 21px;
  flex-direction: column;
  background-color: #00000008;
`;

const LandingPagePostsContentBox = styled(StyledBox)`
  gap: 12px;
  width: 554px;
  height: 163px;
  display: flex;
  padding: 12px;
  border-radius: 18px;
  flex-direction: column;
  box-shadow: #0000000d;
  background-color: #ffffff;
  border: 1px solid #0000001a;
`;

export {
  LandingPageContainer,
  LandingPageCreatePostBorderBox,
  LandingPageCreatePostBox,
  LandingPageCreatePostBoxHeader,
  LandingPageCreatePostHeaderLeftBox,
  LandingPageCreatePostForm,
  LandingPageCreatePostFormInput,
  LandingPagePostsBoxBorder,
  LandingPagePostsContentBox,
};
