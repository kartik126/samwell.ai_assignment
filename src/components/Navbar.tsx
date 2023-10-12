import Image from "next/image";
import React, { useState } from "react";
import styled from "styled-components";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import LoginOutlinedIcon from "@mui/icons-material/LoginOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import SvgLogo from "./SvgLogo";

const HeaderContainer = styled.header`
  background-color: #fff;
  color: #fff;
  display: flex;
  flex-direction: row;
  padding: 30px 10px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
`;

const Logo = styled.div`
  font-size: 16px;
  margin: 0 20px;
  font-weight: 600;
  color: #000;
  display:flex;
  align-items: center;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin: 0 20px;
  @media (max-width: 768px) {
    display: none; /* Hide the navigation links on small screens */
  }
`;

const NavLink = styled.a`
  color: #000;
  text-decoration: none;
  font-weight: 300;
  font-size: 15px;
  margin-left: 50px;
  &:hover {
    text-decoration: underline;
  }
`;

const AccountButton = styled.button`
  border-radius: 57px;
  background: rgb(255, 255, 255);
  border: 1px solid rgb(221, 221, 221);
  padding: 8px 20px;
  cursor: pointer;
  position: absolute;
  right: 60px;
  @media (max-width: 768px) {
    display: none; /* Hide the navigation links on small screens */
  }
`;

const AccountDropdown = styled.div`
  padding: 32px;
  border-radius: 16px;
  border: 5px solid rgb(249, 249, 249);
  background: rgb(255, 255, 255);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 25p;
  margin-top: 40px;
  margin-right: 50px;
  display: flex;
  flex-direction: column;
`;

const AccountLink = styled.p`
  color: gray;
  text-decoration: none;
  font-weight: 300;
  font-size: 15px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 11px;
`;
const MobileMenuButton = styled.div`
  display: none; /* Initially hidden on larger screens */
  position: absolute;
  right:40px;
  @media (max-width: 768px) {
    display: block; /* Display on small screens */
    cursor: pointer;
  }
`;
const MobileMenu = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 768px) {
    display: flex;
    background-color: #fff;
    position: fixed;
    top: 60px;
    right: 0;
    width: 100%;
    flex-direction: column;
    text-align: right;
    border: 1px solid #000;
  }
`;
const MobileNavLink = styled.a`
  color: #000;
  text-decoration: none;
  font-weight: 300;
  font-size: 15px;
  padding: 10px 20px;
  border-top: 1px solid #ddd;
  &:last-child {
    border-bottom: 1px solid #ddd;
  }
  &:hover {
    text-decoration: underline;
  }`;

const Navbar = () => {
  const [accountSatus, setaccountSatus] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <Logo><SvgLogo/>Samwell.ai</Logo>
      <Navigation>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">Pricing</NavLink>
        <NavLink href="/contact">Influencer Program</NavLink>
      </Navigation>
      <MobileMenuButton onClick={toggleMobileMenu}>
        <MenuIcon style={{ fontSize: 30, color: '#000' }} />
      </MobileMenuButton>
      {mobileMenuOpen && (
        <MobileMenu>
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/about">Pricing</MobileNavLink>
          <MobileNavLink href="/contact">Influencer Program</MobileNavLink>
        </MobileMenu>
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          right: "10px",
        }}
      >
        <AccountButton onClick={() => setaccountSatus(!accountSatus)}>
          @profile
        </AccountButton>
        {accountSatus && (
          <AccountDropdown>
            <Image
              alt=""
              src={`https://ui-avatars.com/api/?background=random&name=kartik sharma`}
              width={50}
              height={50}
              style={{ borderRadius: "100%", marginBottom: "20px" }}
            />
            <AccountLink>
              <FolderOutlinedIcon style={{ marginRight: "10px" }} /> My
              Activities
            </AccountLink>
            <AccountLink
              style={{
                borderBottom: "1px solid rgb(224, 224, 224)",
                paddingBottom: "25px",
              }}
            >
              <VerifiedOutlinedIcon style={{ marginRight: "10px" }} /> Rewards &
              Referals
            </AccountLink>
            <AccountLink>
              <CreditCardOutlinedIcon style={{ marginRight: "10px" }} /> Account
              Settings
            </AccountLink>
            <AccountLink>
              <CreditCardOutlinedIcon style={{ marginRight: "10px" }} /> Billing
            </AccountLink>
            <AccountLink>
              <LoginOutlinedIcon style={{ marginRight: "10px" }} /> Logout
            </AccountLink>
          </AccountDropdown>
        )}
      </div>
    </HeaderContainer>
  );
};

export default Navbar;
