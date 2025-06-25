import styled from "styled-components";

interface StyledParaProps {
  size?: string;
  weight?: string;
  color?: string;
}

const StyledPara = styled.p<StyledParaProps>`
  font-size: ${(props) => props.size || "16px"};
  color: ${(props) => props.color || "#000000"};
  font-weight: ${(props) => props.weight || "400"};
`;

export { StyledPara };
