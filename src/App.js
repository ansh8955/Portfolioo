import NavBar from "./components/NavBar.jsx";
import SocialLinks from "./components/SocialLinks.jsx";
import Home from "./Home.jsx";
import About from './components/About.js';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';
import Contacts from './components/Contacts.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks/>
      <About/>
      <Projects/>
      <Skills/>
      <Contacts/>
    </div>
  );
}

export default App;
