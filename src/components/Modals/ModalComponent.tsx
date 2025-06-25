import { createPortal } from "react-dom";
import React, { ReactNode, useEffect } from "react";

import {
  ModalComponentBackgroundBlurBox,
  ModalComponentContentContainer,
} from "assets/StyledComponents/components/ModalComponent";

interface ModalComponentProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const ModalComponent = (props: ModalComponentProps) => {
  const { show, onClose, children } = props;

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "hidden auto";
    }

    return () => {
      document.body.style.overflow = "hidden auto";
    };
  }, [show]);

  return createPortal(
    <ModalComponentBackgroundBlurBox onClick={onClose}>
      <ModalComponentContentContainer onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalComponentContentContainer>
    </ModalComponentBackgroundBlurBox>,
    document.body
  );
};

export default ModalComponent;
