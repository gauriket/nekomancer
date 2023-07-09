// import React from 'react'
import styled from "styled-components";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
 flex: 1;
 
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
width: 120px;
padding: 10px;
border:none;
border-radius: 10px;
cursor: pointer;
`;

const Right = styled.div`
  flex:1;
  display: flex;
 flex-direction: column;
 justify-content: center;
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

          <Title>Think Outside the Square Space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who we Are</Subtitle></WhatWeDo>
          <Desc>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos laudantium architecto beatae repellat ea vero magni impedit repudiandae odit, ipsam quam reiciendis iste distinctio aliquam molestiae. Accusamus odio minima eius?s</Desc>
          <Button>See Our Works</Button>
        </Right>
      </Container>
    </Section>
  );
}

export default Who;
