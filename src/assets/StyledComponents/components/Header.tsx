import styled from "styled-components";
import { StyledBox } from "../base/StyledBox";

const StyledHeader = styled.header``;

const StyledNavbar = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0 32px;
  align-items: center;
  justify-content: space-between;
`;

const NavbarLogoContainer = styled(StyledBox)`
  display: flex;
  align-items: center;
`;

export { StyledHeader, StyledNavbar, NavbarLogoContainer };
