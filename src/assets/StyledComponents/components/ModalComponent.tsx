import styled from "styled-components";

import { StyledBox } from "../base/StyledBox";

const ModalComponentBackgroundBlurBox = styled(StyledBox)`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 110;
  display: flex;
  position: fixed;
  min-height: 100dvh;
  align-items: center;
  background: #00000073;
  justify-content: center;
  backdrop-filter: blur(12px);
`;

const ModalComponentContentContainer = styled(StyledBox)`
  animation: newModalAppear 0.2s cubic-bezier(0.79, 0.33, 0.14, 0.53) forwards;

  @keyframes newModalAppear {
    from {
      transform: scale(0.9);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export { ModalComponentBackgroundBlurBox, ModalComponentContentContainer };
