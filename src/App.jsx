import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Test from "./components/Test";
import styled from "styled-components";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Container = styled.div`
  height: 100%;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  position: relative;
  color: white;
  margin: -8px;
  background-image: url("https://images.unsplash.com/photo-1656536665219-da2b7deb314b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ResponsiveContainer = styled(Container)`
  
`;

function App() {
  return (
    
    <ResponsiveContainer>
      
    <Hero/>
      <Who />
      <Works />
      <Contact />
      <Test />
    </ResponsiveContainer>
  );
}

export default App;
