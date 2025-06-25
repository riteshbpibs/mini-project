import React, { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IMAGE_PREFIX } from "configs/images";
import { getLocalStorage, setLocalStorage } from "helpers/utils";
import { useAuthContext } from "context/AuthContext";
import { useModalContext } from "context/ModalContext";

import { StyledBox } from "assets/StyledComponents/base/StyledBox";
import { StyledSpan } from "assets/StyledComponents/base/StyledSpan";
import { StyledPara } from "assets/StyledComponents/base/StyledPara";

import {
  SignInFormContainer,
  SignInFormContainerBorder,
} from "assets/StyledComponents/components/SignInForm";

import {
  CommonFormHeadInfoBox,
  CommonFormHeadLogo,
  CommonFormInputBox,
  CommonFormInputBoxContainer,
  CommonFormInputLabel,
  CommonFormSubmitButton,
} from "assets/StyledComponents/common/Forms";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "set_user":
      return { ...state, user: action.payload };

    case "set_password":
      return { ...state, password: action.payload };

    default:
      return state;
  }
};

const SignInForm = () => {
  const navigate = useNavigate();
  const { setUserName, setLogin } = useAuthContext();
  const { openModal, handleOpenModal } = useModalContext();

  const [state, dispatch] = useReducer(reducer, {
    user: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { user, password } = state;

    if (checkUserAvailable(user, password)) {
      setLocalStorage("username", user);
      setLocalStorage("login", true);

      setUserName(user);
      setLogin(true);
      navigate("/");
      openModal.login && handleOpenModal("login", false);
    } else {
      window.alert("Invalid email/username or password");
    }
  };

  const checkUserAvailable = (user: string, pass: string) => {
    const localUsers = getLocalStorage("users")!;
    const parsedUsers = JSON.parse(localUsers);

    for (let { username, password } of parsedUsers) {
      if (user === username && pass === password) {
        return true;
      }
    }

    return false;
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/\s/g, "");

    dispatch({ type, payload: sanitizedValue });
  };

  return (
    <SignInFormContainerBorder>
      <SignInFormContainer onSubmit={handleSubmit}>
        <CommonFormHeadLogo>
          <img src={IMAGE_PREFIX.LoginIcon} alt="login" />
        </CommonFormHeadLogo>

        <CommonFormHeadInfoBox>
          <StyledPara weight="700" size="20px">
            Sign in to continue
          </StyledPara>

          <StyledPara size="14px" color="#0000007A">
            Sign in to access all the features on this app
          </StyledPara>
        </CommonFormHeadInfoBox>

        <CommonFormInputBoxContainer>
          {/* Email/Username */}
          <StyledBox className="flex flex-col" gap="4px">
            <CommonFormInputLabel htmlFor="user">
              Email or username
            </CommonFormInputLabel>

            <CommonFormInputBox
              required
              id="user"
              type="text"
              name="user"
              minLength={4}
              value={state.user}
              placeholder="Enter your email or username"
              onChange={(e) => handleOnChange(e, "set_user")}
            />
          </StyledBox>

          {/* Password */}
          <StyledBox className="flex flex-col" gap="4px">
            <CommonFormInputLabel htmlFor="password">
              Password
            </CommonFormInputLabel>

            <CommonFormInputBox
              required
              id="password"
              minLength={6}
              type="password"
              name="password"
              value={state.password}
              placeholder="Enter your password"
              onChange={(e) => handleOnChange(e, "set_password")}
            />
          </StyledBox>

          {/* Button */}
          <CommonFormSubmitButton type="submit">Sign In</CommonFormSubmitButton>
        </CommonFormInputBoxContainer>
      </SignInFormContainer>

      <StyledPara size="14px" weight="500" color="#00000099">
        Do not have account?{" "}
        {!openModal.login && (
          <Link to="/signup" className="font-semibold text-[#5057EA]">
            Sign Up
          </Link>
        )}
        {openModal.login && (
          <StyledSpan
            onClick={() => {
              handleOpenModal("signUp", true);
              handleOpenModal("login", false);
            }}
            className="font-semibold text-[#5057EA] cursor-pointer"
          >
            Sign Up
          </StyledSpan>
        )}
      </StyledPara>
    </SignInFormContainerBorder>
  );
};

export default SignInForm;
