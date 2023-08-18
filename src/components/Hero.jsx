import styled from "styled-components";
import Navbar from "./Navbar";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Game from "./game";

const Section = styled.div`
height: 600px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 1400px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 1400px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;


const Left = styled.div`
padding-left: 30px;
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  
  @media only screen and (max-width: 2400px) and (min-width: 1401px) {
    width: 50%;
  }
  
  @media only screen and (max-width: 1400px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  @media only screen and (max-width: 1400px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 3px;
`;

const Subtitle = styled.h2`
font-size: 20px;
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 20px;
  color: lightgray;
  
  @media only screen and (max-width: 1400px) {
    padding: 20px;
    text-align: center;
  }
  @media only screen and (max-width: 950px) {
    font-size: 15px;
  }
`;

const Right = styled.div`
  flex: 3;
  height: 500px;
  width: 500px
  position: relative;
  @media only screen and (max-width: 2400px) and (min-width: 1401px) {
    width: 50%;

  }
  @media only screen and (max-width: 1400px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 2400px) and (min-width: 1401px) {
    width: 300px;
    height: 300px;
  }
  @media only screen and (max-width: 1400px) {
    width: 270px;
    height: 270px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Pfp = styled.img`

  width: 220px;
  height: 220px;
  object-fit: contain;
  position: absolute;
  border-radius: 50%;
  top: 0;
  right: 0;
  left: 0;
  margin: auto;
  padding: 30px;
  @media only screen and (max-width: 2400px) and (min-width: 1401px) {
    width: 300px;
    height: 300px;
  }
  @media only screen and (max-width: 1400px) {
    width: 270px;
    height: 270px;
  }
`;


const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[2, 3, -3]} />
            <Sphere args={[1, 100, 100]} scale={2.96}>
              <MeshDistortMaterial color="#693A9D" attach="material" distort={0.25} speed={4} />
            </Sphere>
          </Canvas> 
            <Pfp src="./img/pfp.jpg" />
            <Title>Gauri Ket</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Welcome to My Portfolio Website</Subtitle>
          </WhatWeDo>
          <Desc>Designing the Future, Bit by Bit: A Journey through the Projects and Innovations of a Computer Science Student</Desc>

        </Left>
        <Right>
          <Game/>
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
