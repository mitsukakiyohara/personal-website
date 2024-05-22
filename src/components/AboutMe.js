import * as React from 'react';
import styled from 'styled-components';

function AboutMe() {
    return (
        <Section>
            <Container>
                <Content>
                    <ImageColumn>
                        <StyledImage loading="lazy" src={require("/Users/mitsukakiyohara/Desktop/my-portfolio/src/images/3.JPG" + "")}/>
                    </ImageColumn>
                    <TextColumn>
                        <TextWrapper>
                            <Heading>About Me</Heading>
                            <Intro>
                                Born and raised in the Bay Area, I'm a second year undergrad at the University of Toronto studying Math,
                                CS & Stats.
                            </Intro>
                            <DetailsWrapper>
                                <Details>
                                    Currently exploring new interests and just vibing. Feel free to check out my projects, blog, or say a
                                    quick hi!
                                </Details>
                                <ContactEmail href="mailto:mitsuka.kiyohara@gmail.com">mitsuka.kiyohara@gmail.com</ContactEmail>
                            </DetailsWrapper>
                        </TextWrapper>
                    </TextColumn>
                </Content>
            </Container>
        </Section>
    );
}

const Section = styled.section`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 60px;
  padding-top: 120px; 
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1056px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Content = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const ImageColumn = styled.div`
  display: flex;
  flex-direction: column;
width: 50%;
margin-left: 0px;
@media (max-width: 991px) {
  width: 100%;
  }
`;


const StyledImage = styled.img`
  width: 100%;
  aspect-ratio: 0.78; 
  object-fit: cover;
  object-position: center;
  border-radius: 50%; 
  border: 2px solid #8ce3f9;
  @media (max-width: 991px) {
    margin-top: 26px;
  }
`;

const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  font-weight: 400;
  margin: auto 0;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Heading = styled.h2`
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #000;
  color: #e1b3ff;
  text-align: right;
  font: 60px 'Pixel Emulator', sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
  }
`;

const Intro = styled.p`
  color: #fff;
  text-align: right;
  font-family: 'SF Pro Display', sans-serif;
  font-style: italic;
  margin-top: 47px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Details = styled.p`
  color: #fff;
  text-align: right;
  font-family: 'SF Pro Display', sans-serif;
  font-style: italic;
`;

const ContactEmail = styled.a`
  color: #8ce3f9;
  font-family: 'SF Pro Display', sans-serif;
  font-style: italic;
  align-self: flex-end;
  margin-top: 16px;
`;

export default AboutMe;