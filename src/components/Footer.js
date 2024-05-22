import * as React from "react";
import styled from "styled-components";

function Footer() {
    return (
        <FooterWrapper>
            <Separator />
            <FooterContent>
                <Nav>
                    <NavLink href="#home">Home</NavLink>
                    <NavLink href="#about">About</NavLink>
                    <NavLink href="#projects">Projects</NavLink>
                    <NavLink href="#contact">Contact</NavLink>
                </Nav>
                <SocialLinks>
                    <a href="mailto:mitsuka.kiyohara@gmail.com">
                        <IconPrimary src="https://cdn.builder.io/api/v1/image/assets/TEMP/92fcb9d84f3c28e21a8e4ca14310446db1826cf6a3620f4a95ffe5f87bace884?apiKey=d76abf93a9994ab9b9ded65b1d705b50&" loading="lazy" />
                    </a>
                    <a href="https://www.instagram.com/mitsukakiyohara/">
                        <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/8128212c03b1ff24b44cf2f1f25cc369db1f97d7b46992d9c2f0190b6a761c85?apiKey=d76abf93a9994ab9b9ded65b1d705b50&" loading="lazy" />
                    </a>
                    <a href="http://www.linkedin.com/in/mitsuka-kiyohara">
                        <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/95f37c925be45fcf9f298631d5fdf8447db1d022a692e8c09d27160a74011e1e?apiKey=d76abf93a9994ab9b9ded65b1d705b50&" loading="lazy" alt="LinkedIn" />
                    </a>
                    <a href="https://github.com/mitsukakiyohara">
                        <Icon src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba9e15908d599082fa2abb2a65aeba810fd412d803b3702dc1eb02e4e063a56b?apiKey=d76abf93a9994ab9b9ded65b1d705b50&" loading="lazy" alt="GitHub" />
                    </a>
                </SocialLinks>
            </FooterContent>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
    width: 100%;
    text-align: center; /* Center content */
    overflow: hidden; /* Prevent overflow */
`;

const FooterContent = styled.div`
    display: flex; 
    justify-content: space-between;
    padding: 16px 60px;
    color: var(--Primary, #fff);
    font-size: 24px;
    font-weight: 500;

    @media (max-width: 991px) { 
        flex-wrap: wrap; 
        padding-left: 20px;
        padding-right: 20px;
    }
`;

const Nav = styled.nav`
    display: flex; 
    gap: 20px;
    font-size: 18px;
    color: var(--Primary, #fff);
    font-weight: 700; 
    white-space: nowrap; 
    letter-spacing: 0.1px; 
    line-height: 133%; 
    margin: auto 0;
    padding-right: 60px;

    @media (max-width: 991px) {
        flex-wrap: wrap; 
        white-space: initial;
    }
`;

const NavLink = styled.a`
    font-family: Helvetica Neue, sans-serif; 
    cursor: pointer; 
    text-decoration: none; 
    color: inherit;
`;

const Separator = styled.hr`
    margin-top: 100px;
    border: 1px solid rgba(255, 255, 255, 1);
    background-color: #fff;
    width: 100%;
`;

const SocialLinks = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 6px;
    flex-wrap: wrap; /* Enable wrapping */
    overflow: hidden; /* Prevent overflow */
`;

const Icon = styled.img`
  width: 29px;
  object-fit: cover;
  cursor: pointer; 
`;

const IconPrimary = styled(Icon)`
  width: 36px;
  aspect-ratio: 1.23;
`;

export default Footer;
