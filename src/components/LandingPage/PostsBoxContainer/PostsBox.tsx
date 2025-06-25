import React, { useEffect, useMemo, useState } from "react";

import { timeAgo } from "helpers/utils";
import { IMAGE_PREFIX } from "configs/images";
import { useAuthContext } from "context/AuthContext";
import { useModalContext } from "context/ModalContext";
import { PostType } from "features/postsSlice/postsSlice";

import {
  LandingPagePostsBoxBorder,
  LandingPagePostsContentBox,
} from "assets/StyledComponents/pages/LandingPage";
import { StyledBox } from "assets/StyledComponents/base/StyledBox";
import { StyledButton } from "assets/StyledComponents/base/StyledButton";

import ProfilePic1 from "assets/images/ProfilePic1.png";
import ProfilePic2 from "assets/images/ProfilePic2.png";
import ProfilePic3 from "assets/images/ProfilePic3.png";
import { StyledPara } from "assets/StyledComponents/base/StyledPara";
import { StyledSpan } from "assets/StyledComponents/base/StyledSpan";

interface PostsBoxProps {
  data: PostType;
}

const PostsBox = (props: PostsBoxProps) => {
  const { data } = props;

  const { login } = useAuthContext();
  const { handleOpenModal } = useModalContext();

  const profilePic = useMemo(() => {
    const pics = [ProfilePic1, ProfilePic2, ProfilePic3];
    const random = Math.floor(Math.random() * 3);

    return pics[random];
  }, []);

  const emojies = useMemo(() => {
    const emoji = ["😄", "🥵", "😶‍🌫️"];
    const random = Math.floor(Math.random() * 3);

    return emoji[random];
  }, []);

  const [currentTime, setCurrentTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    if (login) {
      window.alert("Function not implemented");
    } else {
      handleOpenModal("login", true);
    }
  };

  return (
    <LandingPagePostsBoxBorder>
      <LandingPagePostsContentBox>
        {/* Profile Section */}
        <StyledBox className="flex items-center" gap="12px">
          <img src={profilePic} alt="profile" />

          <StyledBox className="flex flex-col">
            <StyledPara size="13px" weight="600">
              {data.title}
            </StyledPara>

            <StyledPara color="#0000005E" weight="500" size="12px">
              {timeAgo(data.createdAt, currentTime)}
            </StyledPara>
          </StyledBox>
        </StyledBox>

        {/* Post Section */}
        <StyledBox className="flex overflow-hidden" gap="18px">
          <StyledSpan
            height="30px"
            minWidth="30px"
            radius="18.5px"
            bckColor="#F2F2F2"
            className="flex items-center justify-center"
          >
            {emojies}
          </StyledSpan>

          <StyledBox className="overflow-auto">
            <StyledPara size="14px" weight="500">
              {data.description}
            </StyledPara>
          </StyledBox>
        </StyledBox>
      </LandingPagePostsContentBox>

      {/* Buttons */}
      <StyledBox
        gap="12px"
        padding="0 0 0 6px"
        onClick={handleClick}
        className="flex items-center"
      >
        <StyledButton>
          <img src={IMAGE_PREFIX.LikeIcon} alt="like" />
        </StyledButton>

        <StyledButton>
          <img src={IMAGE_PREFIX.CommentIcon} alt="comment" />
        </StyledButton>

        <StyledButton>
          <img src={IMAGE_PREFIX.ShareIcon} alt="share" />
        </StyledButton>
      </StyledBox>
    </LandingPagePostsBoxBorder>
  );
};

export default PostsBox;
