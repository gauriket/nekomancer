import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import Test from "./components/Test";
import './App.css';

function App() {
  return (
    <>
    <div className="Container">
      <Hero />
      <Who />
      <Works />
      <Contact />
      <Test/>
    </div></>
  );
}

export default App;