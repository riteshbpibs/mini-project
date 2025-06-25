import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { IMAGE_PREFIX } from "configs/images";
import { useAuthContext } from "context/AuthContext";
import { useModalContext } from "context/ModalContext";
import { addPosts } from "features/postsSlice/postsSlice";

import {
  LandingPageCreatePostForm,
  LandingPageCreatePostFormInput,
} from "assets/StyledComponents/pages/LandingPage";
import { StyledBox } from "assets/StyledComponents/base/StyledBox";
import { StyledSpan } from "assets/StyledComponents/base/StyledSpan";
import { StyledButton } from "assets/StyledComponents/base/StyledButton";

const InputForm = () => {
  const dispatch = useDispatch();

  const { login, userName } = useAuthContext();
  const { handleOpenModal } = useModalContext();

  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (login) {
      const text = comment.trim();

      if (text === "") return;
      dispatch(
        addPosts({
          id: uuidv4(),
          title: userName,
          description: text,
          createdAt: Date.now(),
        })
      );
      setComment("");
    } else {
      handleOpenModal("login", true);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      const form = e.currentTarget.form;
      if (form) form.requestSubmit();
    }
  };

  const handleButtonClick = () => {
    if (login) {
      window.alert("function not implemented");
    } else {
      handleOpenModal("login", true);
    }
  };

  return (
    <LandingPageCreatePostForm onSubmit={handleSubmit}>
      <StyledBox className="flex gap-2 h-[84px]">
        <img src={IMAGE_PREFIX.SmilefaceIcon} className="h-fit" alt="smile" />

        <LandingPageCreatePostFormInput
          autoFocus
          id="comment"
          name="comment"
          value={comment}
          onKeyDown={handleKeyDown}
          placeholder="How are you feeling today?"
          onChange={(e) => setComment(e.target.value)}
        />
      </StyledBox>

      {/* Divider */}
      <StyledSpan bckColor="#D9D9D9" width="100%" height="1px" />

      {/* Footer */}
      <StyledBox className="flex items-center justify-between">
        <StyledBox className="flex items-center" gap="12px">
          <StyledButton
            width="30px"
            height="30px"
            type="button"
            radius="10px"
            bckColor="#0000000F"
            className="flex items-center justify-center"
          >
            <img src={IMAGE_PREFIX.AddIcon} alt="attach" />
          </StyledButton>

          <StyledButton type="button" onClick={handleButtonClick}>
            <img src={IMAGE_PREFIX.VoiceIcon} alt="voice" />
          </StyledButton>

          <StyledButton type="button" onClick={handleButtonClick}>
            <img src={IMAGE_PREFIX.VideoIcon} alt="video" />
          </StyledButton>
        </StyledBox>

        <StyledButton type="submit">
          <img src={IMAGE_PREFIX.SendIcon} alt="send" />
        </StyledButton>
      </StyledBox>
    </LandingPageCreatePostForm>
  );
};

export default InputForm;
