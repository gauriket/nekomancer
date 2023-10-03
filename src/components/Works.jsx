// Works.js

import { useState } from "react";
import styled from "styled-components";
import WebDesign from "./WebDesign";
import UIUX from "./UIUX";
import "./works.css"; // Import the CSS file

const data = ["Web Development", "UI/UX"];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
  @media only screen and (max-width: 500px) {
    padding-top: 120px;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
  @media only screen and (max-width: 500px) {
    padding-top: 120px;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("Web Development");
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <li
                className="list-item"
                data-text={item}
                key={item}
                onClick={() => setWork(item)}
              >
                {item}
              </li>
            ))}
          </List>
        </Left>
        <Right>{work === "Web Development" ? <WebDesign /> : <UIUX />}</Right>
      </Container>
    </Section>
  );
};

export default Works;
