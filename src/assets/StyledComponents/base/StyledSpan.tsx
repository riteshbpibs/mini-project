import styled from "styled-components";

interface StyledSpanProps {
  width?: string;
  height?: string;
  radius?: string;
  bckColor?: string;
  minWidth?: string;
  minHeight?: string;
}

const StyledSpan = styled.span<StyledSpanProps>`
  ${(props) => props.width && `width: ${props.width}`};
  ${(props) => props.height && `height: ${props.height}`};
  ${(props) => props.radius && `border-radius: ${props.radius}`};
  ${(props) => props.minWidth && `min-width: ${props.minWidth}`};
  ${(props) => props.minHeight && `min-weight: ${props.minHeight}`};
  ${(props) => props.bckColor && `background-color: ${props.bckColor}`};
`;

export { StyledSpan };
