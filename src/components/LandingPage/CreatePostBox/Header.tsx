import { IMAGE_PREFIX } from "configs/images";
import { useAuthContext } from "context/AuthContext";
import { useModalContext } from "context/ModalContext";

import {
  LandingPageCreatePostBoxHeader,
  LandingPageCreatePostHeaderLeftBox,
} from "assets/StyledComponents/pages/LandingPage";

import { StyledBox } from "assets/StyledComponents/base/StyledBox";
import { StyledPara } from "assets/StyledComponents/base/StyledPara";
import { StyledSpan } from "assets/StyledComponents/base/StyledSpan";
import { StyledButton } from "assets/StyledComponents/base/StyledButton";

const CreatePostBoxHeader = () => {
  const { login } = useAuthContext();
  const { handleOpenModal } = useModalContext();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLElement;

    if (!target) return;
    if (login) {
      window.alert("function not implemented");
    } else {
      handleOpenModal("login", true);
    }
  };

  return (
    <LandingPageCreatePostBoxHeader>
      <LandingPageCreatePostHeaderLeftBox onClick={handleClick}>
        <StyledButton
          width="94px"
          radius="7px"
          height="32px"
          bckColor="#ffffff"
          className="flex items-center justify-evenly shadow-[#00000017]"
        >
          <StyledPara weight="500" size="12px">
            Paragraph
          </StyledPara>

          <img src={IMAGE_PREFIX.ArrowDownIcon} alt="dropdown" />
        </StyledButton>

        {/* Text Styles */}
        <StyledBox className="flex items-center" gap="12px">
          <StyledButton
            radius="7px"
            width="32px"
            height="32px"
            bckColor="#ffffff"
            className="flex items-center justify-evenly shadow-[##00000017]"
          >
            <img src={IMAGE_PREFIX.BoldIcon} alt="bold" />
          </StyledButton>

          <StyledButton>
            <img src={IMAGE_PREFIX.ItalicIcon} alt="italic" />
          </StyledButton>

          <StyledButton>
            <img src={IMAGE_PREFIX.UnderlineIcon} alt="underline" />
          </StyledButton>
        </StyledBox>

        {/* Divider */}
        <StyledSpan width="1px" height="100%" bckColor="#0000001A" />

        {/* List Styles */}
        <StyledBox className="flex items-center" gap="16px">
          <StyledButton>
            <img src={IMAGE_PREFIX.PointedListIcon} alt="unordered-list" />
          </StyledButton>

          <StyledButton>
            <img src={IMAGE_PREFIX.NumberListIcon} alt="Ordered List" />
          </StyledButton>
        </StyledBox>

        {/* Divider */}
        <StyledSpan width="1px" height="100%" bckColor="#0000001A" />

        {/* Input Styles */}
        <StyledBox
          gap="16px"
          padding="0 12px 0 0"
          className="flex items-center"
        >
          <StyledButton>
            <img src={IMAGE_PREFIX.QuotesIcon} alt="quotes" />
          </StyledButton>

          <StyledButton>
            <img src={IMAGE_PREFIX.CodeIcon} alt="code" />
          </StyledButton>
        </StyledBox>
      </LandingPageCreatePostHeaderLeftBox>

      <StyledButton
        width="40px"
        height="40px"
        radius="10px"
        onClick={handleClick}
        bckColor="#FF000026"
        className="flex items-center justify-center"
      >
        <img src={IMAGE_PREFIX.PostDeleteIcon} alt="delete" />
      </StyledButton>
    </LandingPageCreatePostBoxHeader>
  );
};

export default CreatePostBoxHeader;
