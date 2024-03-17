import NavBar from "./components/NavBar.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import Home from "./Home.jsx";
import About from './components/About.js';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks/>
      <About/>
      <Projects/>
      <Skills/>
    </div>
  );
}

export default App;
