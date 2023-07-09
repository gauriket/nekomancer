import styled from "styled-components";
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei';


const Container = styled.div`
height:100vh;
width: 100%;
scroll-snap-align: center;
`
const Test = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight position={[3, 2, 1]} />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial>
            <RenderTexture attach="map">
              <PerspectiveCamera makeDefault position={[0, 0, 5]} />
              <color attach="background" args={["#dc9dcd"]} />
              <Text fontSize={3} color="#555">
                ehe
              </Text>
            </RenderTexture>
          </meshStandardMaterial>
        </mesh>
      </Canvas>
    </Container>
  )
}

export default Test
