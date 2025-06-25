import React from "react";

import InputForm from "./InputForm";
import CreatePostBoxHeader from "./Header";
import {
  LandingPageCreatePostBorderBox,
  LandingPageCreatePostBox,
} from "assets/StyledComponents/pages/LandingPage";

const CreatePostBox = () => {
  return (
    <LandingPageCreatePostBorderBox>
      <LandingPageCreatePostBox>
        {/* Header */}
        <CreatePostBoxHeader />

        {/* Input Form */}
        <InputForm />
      </LandingPageCreatePostBox>
    </LandingPageCreatePostBorderBox>
  );
};

export default CreatePostBox;
