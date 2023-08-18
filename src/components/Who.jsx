import styled from "styled-components";
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from "./Cube";
import '../links/link.css';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 1400px) {
    padding-bottom: 20px;
  }
  @media only screen and (max-width: 500px) {
    padding-bottom: 50px;
  }
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 1400px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 1400px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 1400px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 1000px) {
    padding: 20px;
    font-size:20px;
  }
`;

const Button = styled.div`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 140px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  align-items: center;
    text-align: center;
`;


const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Canvas>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Cube />
          </Canvas>
        </Left>
        <Right>
          <Title>Who's Gauri anyway?</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>a little about me ;P</Subtitle>
          </WhatWeDo>
          <Desc>
          In my endless quest for the quirkiest coding adventures, I find myself on a perpetual journey to uncover mind-boggling learning opportunities that'll rocket boost my software engineering prowess! As a sophomore at the ever-illustrious MIT World Peace University, I'm gleefully immersing myself in the fantastical realm of Computer Science, where algorithms and data structures sing magical melodies of code! 
          </Desc>
          <Button><a className="button-link" href="https://linktr.ee/gauriket" target="_blank" rel="noopener noreferrer">
        You can find me here
      </a></Button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
