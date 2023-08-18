import styled from "styled-components";
import FigmaLink from "../links/qriocity";
import Chakshufig from "../links/chakshufig";
import Numerates from "../links/numerates";

const Container=styled.div
`

@media only screen and (min-width: 769px) {
  padding-top: 250px;
};
@media only screen and (max-width: 768px) {
  padding: 20px;
};
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

const UIUX = () => {
    return (
    <Container>
      <Title>
        Qriocity(An IT Educational App):
      </Title>
      <Subtitle>
      <FigmaLink />
      </Subtitle>
      <Title>
        Chakshu(HACK-MIT Submission):
      </Title>
      <Subtitle>
        <Chakshufig/>
      </Subtitle>
      <Title>
        Numerates Club Website:
      </Title>
      <Subtitle>
        <Numerates/>
      </Subtitle>
    </Container>
  )
}

export default UIUX;
