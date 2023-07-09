import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import './App.css';

function App() {
  return (
    <>
    <div className="Container">
      <Hero />
      <Who />
      <Works />
      <Contact />
    </div></>
  );
}

export default App;