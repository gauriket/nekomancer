// import React from 'react'
import styled from "styled-components";
import Navbar from "./Navbar";
import { MeshDistortMaterial, Sphere, OrbitControls } from "@react-three/drei";
import {Canvas} from '@react-three/fiber';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
 flex: 2;
 display: flex;
 flex-direction: column;
 justify-content: center;
`;

const Title = styled.h1`
 font-size: 74px;
`;

const WhatWeDo = styled.div`
 display:flex;
 align-items: center;
 gap:10px;
`;

const Line = styled.img`
 height: 5px;
`;

const Subtitle = styled.h2`
 color:#da4ea2;

`;

const Desc = styled.p`
 font-size: 24px;
 color: lightgray;
`;

const Button = styled.button`
background-color:#da4ea2;
color:white;
font-weight: 500;
width: 100px;
padding: 10px;
border:none;
border-radius: 10px;
cursor: pointer;
`;

const Right = styled.div`
  flex:3;
  position: relative;
`;

const Img = styled.img`
  width: 400px;
  height: 400px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left:0;
  right:0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @keyframes animate{
    100%{
        transform: translateY(30px);
    }
  }
`;

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
            <Title>Nekomancer GauriKet</Title>
            <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>Welcome to My Portfolio Website</Subtitle></WhatWeDo>
            <Desc>here to provide you stunning websites that fit your demands</Desc>
            <Button>Learn More</Button>
        </Left>
        <Right>
        <Canvas>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1}/>
            <directionalLight position={[1,3,-2]}/>
            <Sphere args={[1,100,200]} scale={2.5}>
            <MeshDistortMaterial color="#7A4A9D" attach="material" distort={0.5} speed={4}/></Sphere>
        </Canvas>
            <Img src="./img/Cat.png"/>
        </Right>
      </Container>
    </Section>
  );
}

export default Hero;
