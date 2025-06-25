import React from "react";

import { useModalContext } from "context/ModalContext";

import CreatePostBox from "components/LandingPage/CreatePostBox";
import PostsBoxContainer from "components/LandingPage/PostsBoxContainer";
import { LandingPageContainer } from "assets/StyledComponents/pages/LandingPage";
import { MainDesignContainer } from "assets/StyledComponents/components/DesignContainers";
import ModalComponent from "components/Modals/ModalComponent";
import SignInForm from "components/SignInForm";
import SignUpForm from "components/SignUpForm";

const LandingPage = () => {
  const { openModal, handleOpenModal } = useModalContext();

  return (
    <>
      {openModal.login && (
        <ModalComponent
          show={openModal.login}
          onClose={() => handleOpenModal("login", false)}
        >
          <SignInForm />
        </ModalComponent>
      )}

      {openModal.signUp && (
        <ModalComponent
          show={openModal.signUp}
          onClose={() => handleOpenModal("signUp", false)}
        >
          <SignUpForm />
        </ModalComponent>
      )}

      <MainDesignContainer>
        <LandingPageContainer>
          <CreatePostBox />

          <PostsBoxContainer />
        </LandingPageContainer>
      </MainDesignContainer>
    </>
  );
};

export default LandingPage;
