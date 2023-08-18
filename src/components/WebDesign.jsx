import styled from "styled-components";
import Hackcommerce from "../links/hackcommerce";
import Chakshugit from "../links/chakshugit";

const Container=styled.div
`
@media only screen and (min-width: 769px) {
  padding-top: 250px;
};
@media only screen and (max-width: 768px) {
  padding: 20px;
}
`

const Title = styled.h1`
  font-size: 25px;
  color: white;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Subtitle = styled.h2`
font-size: 20px;
  color: #da4ea2;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WebDesign = () => {
  return (
    <Container className="my-5">
      <Title>
        Hackcommerce(MLH Hackathon Prize winning Submission):
      </Title>
      <Subtitle>
        <Hackcommerce/>
      </Subtitle>
      <Title>
        Chakshu(HACK-MIT Submission):
      </Title>
      <Subtitle>
        <Chakshugit/>
      </Subtitle>
    </Container>
  );
}

export default WebDesign;
