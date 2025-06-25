import styled from "styled-components";

import {
  CommonFormContainer,
  CommonFormContainerBorder,
} from "../common/Forms";

const SignInFormContainerBorder = styled(CommonFormContainerBorder)`
  height: 572px;
`;

const SignInFormContainer = styled(CommonFormContainer)`
  height: 506px;
`;

export { SignInFormContainerBorder, SignInFormContainer };
