import * as React from "react";
import styled from "styled-components";

function Navigation() {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <Header>
      <Nav>
        {navItems.map((item) => (
          <NavItem key={item.name} href={item.href}>
            {item.name}
          </NavItem>
        ))}
      </Nav>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 30px 60px;
  color: var(--Primary, #fff);
  font-size: 24px;
  font-weight: 500;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Nav = styled.nav`
  display: flex;
  width: 798px;
  max-width: 100%;
  gap: 20px;
  justify-content: space-between;
  padding: 10px 32px 10px 0;
  @media (max-width: 991px) {
    flex-wrap: wrap;
    padding-right: 20px;
  }
`;

const NavItem = styled.a`
  font-family: Helvetica Neue, sans-serif;
  white-space: nowrap;
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  @media (max-width: 991px) {
    white-space: initial;
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default Navigation;
