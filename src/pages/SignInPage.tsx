import React from "react";

import SignInForm from "components/SignInForm";
import { StyledBox } from "assets/StyledComponents/base/StyledBox";
import { MainDesignContainer } from "assets/StyledComponents/components/DesignContainers";

const SignInPage = () => {
  return (
    <MainDesignContainer>
      <StyledBox className="w-full flex h-screen items-center justify-center">
        <SignInForm />
      </StyledBox>
    </MainDesignContainer>
  );
};

export default SignInPage;
