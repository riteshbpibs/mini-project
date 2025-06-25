import React, { useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IMAGE_PREFIX } from "configs/images";
import { getLocalStorage, setLocalStorage } from "helpers/utils";
import { useAuthContext } from "context/AuthContext";
import { useModalContext } from "context/ModalContext";

import { StyledBox } from "assets/StyledComponents/base/StyledBox";
import { StyledPara } from "assets/StyledComponents/base/StyledPara";
import { StyledSpan } from "assets/StyledComponents/base/StyledSpan";
import {
  CommonFormHeadInfoBox,
  CommonFormHeadLogo,
  CommonFormInputBox,
  CommonFormInputBoxContainer,
  CommonFormInputLabel,
  CommonFormSubmitButton,
} from "assets/StyledComponents/common/Forms";

import {
  SignUpFormContainer,
  SignUpFormContainerBorder,
} from "assets/StyledComponents/components/SignUpForm";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "set_user":
      return { ...state, user: action.payload };

    case "set_password":
      return { ...state, password: action.payload };

    case "set_repeatPassword":
      return { ...state, repeatPassword: action.payload };

    default:
      return state;
  }
};

const SignUpForm = () => {
  const navigate = useNavigate();
  const { setUserName, setLogin } = useAuthContext();
  const { openModal, handleOpenModal } = useModalContext();

  const [state, dispatch] = useReducer(reducer, {
    user: "",
    password: "",
    repeatPassword: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { user, password, repeatPassword } = state;

    if (password !== repeatPassword) {
      window.alert("Password do not match");
      return;
    }

    const localUsers = getLocalStorage("users")!;
    const parsedUsers = JSON.parse(localUsers);

    if (checkExistingUser(user)) {
      window.alert("Email/Username already exists");
    } else {
      const newUsers = [...parsedUsers, { username: user, password: password }];
      setLocalStorage("users", JSON.stringify(newUsers));
      setLocalStorage("username", user);
      setLocalStorage("login", true);

      setUserName(user);
      setLogin(true);
      navigate("/");

      openModal.signUp && handleOpenModal("signUp", false);
    }
  };

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    const value = e.target.value;
    const sanitizedValue = value.replace(/\s/g, "");

    dispatch({ type, payload: sanitizedValue });
  };

  const checkExistingUser = (user: string) => {
    const localUsers = getLocalStorage("users")!;
    const parsedUsers = JSON.parse(localUsers);

    for (let { username } of parsedUsers) {
      if (user === username) {
        return true;
      }
    }

    return false;
  };

  return (
    <SignUpFormContainerBorder>
      <SignUpFormContainer onSubmit={handleSubmit}>
        <CommonFormHeadLogo>
          <img src={IMAGE_PREFIX.LoginIcon} alt="login" />
        </CommonFormHeadLogo>

        <CommonFormHeadInfoBox>
          <StyledPara weight="700" size="20px">
            Create an account to continue
          </StyledPara>

          <StyledPara size="14px" color="#0000007A">
            Create an account to access all the features on this app
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

          {/* Repeat Password */}
          <StyledBox className="flex flex-col" gap="4px">
            <CommonFormInputLabel htmlFor="repeatPassword">
              Repeat Password
            </CommonFormInputLabel>

            <CommonFormInputBox
              required
              minLength={6}
              type="password"
              id="repeatPassword"
              name="repeatPassword"
              value={state.repeatPassword}
              placeholder="Enter your password again"
              onChange={(e) => handleOnChange(e, "set_repeatPassword")}
            />
          </StyledBox>

          {/* Button */}
          <CommonFormSubmitButton type="submit">Sign Up</CommonFormSubmitButton>
        </CommonFormInputBoxContainer>
      </SignUpFormContainer>

      <StyledPara size="14px" weight="500" color="#00000099">
        Already have an account?{" "}
        {!openModal.signUp && (
          <Link to="/login" className="font-semibold text-[#5057EA]">
            Sign In
          </Link>
        )}
        {openModal.signUp && (
          <StyledSpan
            onClick={() => {
              handleOpenModal("login", true);
              handleOpenModal("signUp", false);
            }}
            className="font-semibold text-[#5057EA] cursor-pointer"
          >
            Sign In
          </StyledSpan>
        )}
      </StyledPara>
    </SignUpFormContainerBorder>
  );
};

export default SignUpForm;
