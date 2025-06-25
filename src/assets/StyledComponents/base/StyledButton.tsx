import styled from "styled-components";

interface StyledButtonProps {
  width?: string;
  height?: string;
  radius?: string;
  bckColor?: string;
}

const StyledButton = styled.button<StyledButtonProps>`
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.radius && `border-radius: ${props.radius}`};
  ${(props) => props.bckColor && `background-color: ${props.bckColor}`};
`;

export { StyledButton };
