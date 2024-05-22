import React from 'react';
import styled from 'styled-components';
import musicApp from '../images/music-app.png';
import bitoPrototype from '../images/bito.png';

// ProjectComponent implementation
const ProjectComponent = () => {
    const projects = [
        {
            title: "Bito",
            description: "A service for undergraduate students to find research opportunities and connect with passionate researchers across the globe.",
            image: bitoPrototype,
            buttons: [
                { text: "View on Figma", link: "https://www.figma.com/design/3ugrWwIftz1KbBq0rp8huR/Bito-Prototype?node-id=0%3A1&t=MmYbqYpVLwdeYkGp-1" },
                { text: "Slide Deck", link: "https://drive.google.com/file/d/1PJPZjw6W_JBoZwUQ2gBjx7ts9rktQW1F/view?usp=sharing" },
                { text: "View Demo", link: "https://drive.google.com/file/d/1DKuJ67WGSRHbaafuiTUCu7vk6gWUAOr3/view?usp=drive_link" }
            ]
        },
        {
            title: "An untitled music sharing app",
            description: "An app to discover and share all the music you are in love with your friends and the world.",
            image: musicApp,
            buttons: [
                { text: "View on Figma", link: "https://www.figma.com/design/8ZYzQKW5jiBgPcVf5xNK9k/music-app-UI?node-id=232%3A2387&t=D3hLj8M3DMpEwEVG-1"}, 
                { text: "View Demo", link: "https://drive.google.com/file/d/19kFO1bY2zO0ONOVhwPotCWJ_5O4h4hzS/view?usp=sharing" }
            ]
        }
    ];

    return (
        <ProjectsWrapper>
            <Header>
                <Heading>Projects</Heading>
            </Header>
            <ProjectList>
                {projects.map((project, index) => (
                    <ProjectItem key={index}>
                        <ProjectCard>
                            <ProjectImage src={project.image} alt={project.title} />
                            <ProjectInfo>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <ProjectDescription>{project.description}</ProjectDescription>
                                <ButtonContainer>
                                    {project.buttons.map((button, btnIndex) => (
                                        <StyledLink href={button.link} target="_blank" rel="noopener noreferrer" key={btnIndex}>
                                            <Button>{button.text}</Button>
                                        </StyledLink>
                                    ))}
                                </ButtonContainer>
                            </ProjectInfo>
                        </ProjectCard>
                    </ProjectItem>
                ))}
            </ProjectList>
        </ProjectsWrapper>
    );
};

// Styled components
const Header = styled.header`
    text-align: center;
    align-self: center;
`;

const Heading = styled.h2`
    color: var(--Secondary, #e1b3ff);
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;
    font: 400 60px Pixel Emulator, sans-serif;
    @media (max-width: 991px) {
        font-size: 40px;
    }
`;

const ProjectsWrapper = styled.div`
    margin-top: 266px;
    padding: 0 20px; /* Add padding to the left and right */
    padding-bottom: 60px; /* Add padding to the bottom */
    @media (max-width: 991px) {
        margin-top: 40px;
    }
`;

const ProjectList = styled.div`
    display: flex;
    gap: 20px;
    @media (max-width: 991px) {
        flex-direction: column;
        gap: 0;
    }
`;

const ProjectItem = styled.article`
    display: flex;
    flex-direction: column;
    width: 50%;
    @media (max-width: 991px) {
        width: 100%;
        margin-top: 30px;
    }
`;

const ProjectCard = styled.div`
    display: flex;
    flex-grow: 1;
    padding: 20px; /* Add padding to the project card */
    flex-direction: column;
    align-items: center;
    background: rgba(212, 212, 212, 0.3);
    box-shadow: 0px 0px 2px rgba(0, 101, 242, 0.1), 0px 1px 4px rgba(0, 101, 242, 0.1);
    border-radius: 50px;
`;

const ProjectImage = styled.img`
    width: 100%;
    height: 300px; /* Set a fixed height for the images */
    object-fit: cover; /* Ensure the image covers the set height while maintaining aspect ratio */
    border-radius: 50px 50px 0 0;
`;

const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 16px;
    color: white;
`;

const ProjectTitle = styled.h3`
    font: italic 400 30px SF Pro Display, -apple-system, Roboto, Helvetica, sans-serif;
`;

const ProjectDescription = styled.p`
    font: 500 18px/1.11 Helvetica Neue, -apple-system, Roboto, Helvetica, sans-serif;
    letter-spacing: 0.02px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 10px; /* Add some space above the buttons */
`;

const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    border: 2px solid rgba(255, 255, 255, 1);
    color: #fff;
    background-color: transparent;
    padding: 8px 16px;
    font: 500 18px/111% Helvetica Neue, -apple-system, Roboto, Helvetica, sans-serif;
    cursor: pointer;
    margin-top: 10px; // Add some space between buttons
`;

const StyledLink = styled.a`
    text-decoration: none; /* Remove underline from links */
`;

export default ProjectComponent;
