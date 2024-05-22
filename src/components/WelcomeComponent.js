import styled from "styled-components";

function WelcomeComponent() {
  return (
    <Main>
      <Section>
        <Title>mitsuka kiyohara</Title>
        <Subtitle>Welcome to my world :)</Subtitle>
      </Section>
    </Main>
  );
}

const Main = styled.main`
  justify-content: center;
  align-items: center;
  display: flex;
  font-weight: 400;
  text-align: center;
  padding: 0 60px;
  padding-top: 100px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

const Section = styled.section`
  display: flex;
  width: 820px;
  max-width: 100%;
  flex-direction: column;
`;

const Title = styled.h1`
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;
  color: #8ce3f9;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 19px 60px;
  font-family: 'Pixel Emulator', sans-serif;
  font-size: 80px;
  @media (max-width: 991px) {
    font-size: 40px;
    padding: 0 20px;
  }
`;

const Subtitle = styled.h2`
  color: #fff;
  margin-top: 35px;
  font: italic 30px 'SF Pro Display', sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export default WelcomeComponent;