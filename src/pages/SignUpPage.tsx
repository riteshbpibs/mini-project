import React from "react";

import SignUpForm from "components/SignUpForm";
import { StyledBox } from "assets/StyledComponents/base/StyledBox";
import { MainDesignContainer } from "assets/StyledComponents/components/DesignContainers";

const SignUpPage = () => {
  return (
    <MainDesignContainer>
      <StyledBox className="w-full flex h-screen items-center justify-center">
        <SignUpForm />
      </StyledBox>
    </MainDesignContainer>
  );
};

export default SignUpPage;
