import styled from "styled-components";

interface StyledBoxProps {
  gap?: string;
  padding?: string;
}

const StyledBox = styled.div<StyledBoxProps>`
  padding: ${(props) => props.padding || 0};

  ${(props) => props.gap && `gap: ${props.gap}`}
`;

export { StyledBox };
