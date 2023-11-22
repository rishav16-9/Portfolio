import About from "./Components/About/about";
import ContactMe from "./Components/Contact me/ContactMe";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/navbar";
import Project from "./Components/Project/project";
import Skills from "./Components/Skill/skills";
import Work from "./Components/Work/Work";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <Work />
      <ContactMe />
    </div>
  );
}

export default App;
