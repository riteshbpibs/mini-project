import React from "react";
import { Link, useLocation } from "react-router-dom";

import { IMAGE_PREFIX } from "configs/images";
import { useAuthContext } from "context/AuthContext";

import { StyledPara } from "assets/StyledComponents/base/StyledPara";

import {
  NavbarLogoContainer,
  StyledHeader,
  StyledNavbar,
} from "assets/StyledComponents/components/Header";

const Header = () => {
  const { pathname } = useLocation();

  const { login, handleLogout } = useAuthContext();

  return (
    <StyledHeader>
      <StyledNavbar>
        <NavbarLogoContainer className="gap-2">
          <img src={IMAGE_PREFIX.HeaderLogo} alt="logo" />

          <StyledPara weight="700">foo-rum</StyledPara>
        </NavbarLogoContainer>

        {!login && (
          <Link to={pathname === "/" ? "/login" : "/"}>
            <NavbarLogoContainer className="gap-1">
              <StyledPara weight="600" size="14px">
                {pathname === "/" ? "Login" : "Back to home"}
              </StyledPara>

              {pathname === "/" && (
                <img src={IMAGE_PREFIX.LoginIcon} alt="login" />
              )}
            </NavbarLogoContainer>
          </Link>
        )}

        {login && (
          <NavbarLogoContainer
            className="gap-1 cursor-pointer"
            onClick={handleLogout}
          >
            <StyledPara weight="600" size="14px">
              Logout
            </StyledPara>

            {pathname === "/" && (
              <img src={IMAGE_PREFIX.LoginIcon} alt="logout" />
            )}
          </NavbarLogoContainer>
        )}
      </StyledNavbar>
    </StyledHeader>
  );
};

export default Header;
